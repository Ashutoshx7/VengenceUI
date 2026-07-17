"use client";

import * as React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import { Minus, Pause, Play, Plus, SkipBack, SkipForward } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Music Player
 *
 * A collapsible, glassmorphic music player: a floating avatar peeks out of the
 * top-left, an animated equalizer pulses while audio plays, and a slim seekable
 * progress bar tracks position. The whole bar collapses to a compact pill,
 * hiding the track info and transport controls behind a soft width transition.
 *
 * Ported from the vanilla "Azuki Style Music Player" (CodeGrid) into a single,
 * self-contained, prop-driven React component. The Lottie sound-bars and
 * Ionicons of the original are replaced with a pure-CSS equalizer and
 * `lucide-react` icons, so the only runtime dependency is the icon set.
 */

export interface MusicTrack {
  /** Track title shown in the player. */
  title: string;
  /** Artist / author name shown under the title. */
  artist: string;
  /** URL of the audio file. Must be same-origin or CORS-enabled to stream. */
  src: string;
  /** Optional per-track artwork; falls back to the player `avatar`. */
  artwork?: string;
}

export interface MusicPlayerProps {
  /** Playlist to play through. The player renders nothing when empty. */
  tracks: MusicTrack[];
  /** Floating avatar image. Falls back to the current track's `artwork`. */
  avatar?: string;
  /** Index of the track to start on. Defaults to 0. */
  startIndex?: number;
  /** Begin playing as soon as the player mounts. Defaults to false. */
  autoPlay?: boolean;
  /** Wrap from the last track back to the first when a track ends. Defaults to true. */
  loop?: boolean;
  /** Render collapsed (compact pill) on first paint. Defaults to false. */
  defaultCollapsed?: boolean;
  /** Show the seekable progress bar along the bottom edge. Defaults to true. */
  showProgress?: boolean;
  /** Accent color for the equalizer and progress fill. Defaults to `currentColor`. */
  accentColor?: string;
  /** Called whenever the active track changes, with the track and its index. */
  onTrackChange?: (track: MusicTrack, index: number) => void;
  /** Extra class names for the root element. */
  className?: string;
}

const EQ_BARS = [0, 1, 2, 3];

/** Shared equalizer keyframes — identical across instances, so safe to repeat. */
const EQ_KEYFRAMES =
  "@keyframes vengeance-eq{0%,100%{transform:scaleY(0.28)}50%{transform:scaleY(1)}}";

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

function clampIndex(index: number, length: number): number {
  if (length === 0) return 0;
  return Math.min(Math.max(index, 0), length - 1);
}

export function MusicPlayer({
  tracks,
  avatar,
  startIndex = 0,
  autoPlay = false,
  loop = true,
  defaultCollapsed = false,
  showProgress = true,
  accentColor,
  onTrackChange,
  className,
}: MusicPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [index, setIndex] = useState(() => clampIndex(startIndex, tracks.length));
  const [isPlaying, setIsPlaying] = useState(false);
  const [collapsed, setCollapsed] = useState(defaultCollapsed);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  // Whether the next loaded track should auto-start (true after a manual skip
  // or a natural track-end, so playback continues seamlessly).
  const shouldPlayRef = useRef(autoPlay);
  // Keep the latest callback without re-running the load effect on every render.
  const onTrackChangeRef = useRef(onTrackChange);
  useEffect(() => {
    onTrackChangeRef.current = onTrackChange;
  }, [onTrackChange]);

  const track = tracks[index];

  // Load the current track and (if flagged) begin playing.
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;

    audio.src = track.src;
    audio.load();
    setCurrentTime(0);
    onTrackChangeRef.current?.(track, index);

    if (shouldPlayRef.current) {
      audio.play().catch(() => {
        /* Autoplay can be blocked until the user interacts — ignore. */
      });
    }
    // Reload only when the source changes, not when the callback identity does.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index, track?.src]);

  const play = useCallback(() => {
    shouldPlayRef.current = true;
    audioRef.current?.play().catch(() => {});
  }, []);

  const pause = useCallback(() => {
    shouldPlayRef.current = false;
    audioRef.current?.pause();
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) pause();
    else play();
  }, [isPlaying, play, pause]);

  const next = useCallback(() => {
    if (tracks.length === 0) return;
    shouldPlayRef.current = true; // manual skips keep playing
    setIndex((i) => (i + 1) % tracks.length);
  }, [tracks.length]);

  const prev = useCallback(() => {
    if (tracks.length === 0) return;
    shouldPlayRef.current = true;
    setIndex((i) => (i - 1 + tracks.length) % tracks.length);
  }, [tracks.length]);

  const handleEnded = useCallback(() => {
    if (!loop && index === tracks.length - 1) {
      shouldPlayRef.current = false;
      setIsPlaying(false);
      return;
    }
    next();
  }, [loop, index, tracks.length, next]);

  const seek = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      const audio = audioRef.current;
      if (!audio || !Number.isFinite(duration) || duration === 0) return;
      const rect = event.currentTarget.getBoundingClientRect();
      const ratio = (event.clientX - rect.left) / rect.width;
      audio.currentTime = Math.min(Math.max(ratio, 0), 1) * duration;
    },
    [duration],
  );

  if (tracks.length === 0 || !track) return null;

  const accent = accentColor ?? "currentColor";
  const artwork = avatar ?? track.artwork;
  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div
      className={cn(
        "relative select-none text-white transition-[width] duration-700 ease-out",
        collapsed ? "w-[188px]" : "w-[min(420px,90vw)]",
        className,
      )}
    >
      <style>{EQ_KEYFRAMES}</style>

      <audio
        ref={audioRef}
        preload="metadata"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onEnded={handleEnded}
      />

      {/* Collapse / expand toggle */}
      <button
        type="button"
        onClick={() => setCollapsed((c) => !c)}
        aria-label={collapsed ? "Expand player" : "Collapse player"}
        aria-expanded={!collapsed}
        className="absolute -right-3 -top-3 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/15 backdrop-blur-md transition-transform hover:scale-105 active:scale-95"
      >
        {collapsed ? <Plus className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
      </button>

      {/* Floating avatar */}
      {artwork ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={artwork}
          alt={`${track.title} artwork`}
          className="absolute -top-5 left-0 z-20 h-20 w-20 rounded-xl object-cover shadow-lg shadow-black/30 ring-1 ring-white/20"
        />
      ) : null}

      {/* Player bar */}
      <div className="relative flex h-[70px] items-center gap-3 overflow-hidden rounded-xl border border-white/15 bg-white/15 pl-24 pr-5 backdrop-blur-md">
        {/* Equalizer */}
        <div className="flex h-8 shrink-0 items-end gap-[3px]" aria-hidden="true">
          {EQ_BARS.map((bar) => (
            <span
              key={bar}
              className="block w-[3px] rounded-full"
              style={{
                height: "100%",
                background: accent,
                transformOrigin: "bottom",
                animation: `vengeance-eq ${0.9 + bar * 0.18}s ease-in-out infinite`,
                animationPlayState: isPlaying ? "running" : "paused",
                transform: isPlaying ? undefined : "scaleY(0.28)",
              }}
            />
          ))}
        </div>

        {/* Track info + controls, hidden while collapsed */}
        <div
          className={cn(
            "flex min-w-0 flex-1 items-center gap-3 transition-opacity duration-300",
            collapsed ? "pointer-events-none opacity-0" : "opacity-100",
          )}
          style={{ transitionDelay: collapsed ? "0s" : "0.35s" }}
        >
          <div className="min-w-0 flex-1">
            <div className="truncate text-sm font-semibold uppercase tracking-wide">
              {track.title}
            </div>
            <div className="truncate text-[0.65rem] uppercase tracking-[0.2em] text-white/50">
              {track.artist}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-1">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous track"
              className="rounded-full p-1.5 opacity-80 transition hover:bg-white/10 hover:opacity-100"
            >
              <SkipBack className="h-4 w-4 fill-current" />
            </button>
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="rounded-full p-1.5 opacity-90 transition hover:bg-white/10 hover:opacity-100"
            >
              {isPlaying ? (
                <Pause className="h-5 w-5 fill-current" />
              ) : (
                <Play className="h-5 w-5 fill-current" />
              )}
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next track"
              className="rounded-full p-1.5 opacity-80 transition hover:bg-white/10 hover:opacity-100"
            >
              <SkipForward className="h-4 w-4 fill-current" />
            </button>
          </div>
        </div>

        {/* Seekable progress bar */}
        {showProgress && !collapsed ? (
          <div
            role="slider"
            aria-label="Seek"
            aria-valuemin={0}
            aria-valuemax={Math.round(duration) || 0}
            aria-valuenow={Math.round(currentTime)}
            aria-valuetext={`${formatTime(currentTime)} of ${formatTime(duration)}`}
            tabIndex={0}
            onClick={seek}
            onKeyDown={(e) => {
              const audio = audioRef.current;
              if (!audio || !duration) return;
              if (e.key === "ArrowRight") audio.currentTime = Math.min(duration, currentTime + 5);
              if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, currentTime - 5);
            }}
            className="group absolute inset-x-0 bottom-0 flex h-3 cursor-pointer items-end"
          >
            <div className="relative h-[3px] w-full bg-white/15">
              <div
                className="absolute inset-y-0 left-0 transition-[width] duration-100 ease-linear"
                style={{ width: `${progress}%`, background: accent }}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default MusicPlayer;
