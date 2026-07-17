"use client";

import { MusicPlayer, type MusicTrack } from "@/components/ui/music-player";

/**
 * Preview for the Music Player. Uses openly-hosted, CORS-enabled sample audio
 * so the transport controls are fully playable in the docs. Swap in your own
 * tracks and artwork via the `tracks` and `avatar` props.
 */
const SAMPLE_TRACKS: MusicTrack[] = [
  {
    title: "Play It",
    artist: "Witchitaw",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    artwork: "/avatars/aizen.jpg",
  },
  {
    title: "Real Time",
    artist: "Tilden",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    artwork: "/avatars/johan.jpg",
  },
  {
    title: "Rec Center",
    artist: "Xavy",
    src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    artwork: "/avatars/shinji.jpg",
  },
];

export function MusicPlayerDemo() {
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-neutral-950">
      {/* Soft accent glow behind the player so the glass reads on the dark stage */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] max-w-[90%] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, rgba(255,106,0,0.18), transparent 68%)" }}
      />
      <MusicPlayer tracks={SAMPLE_TRACKS} accentColor="#ff6a00" className="relative z-10" />
    </div>
  );
}

export default MusicPlayerDemo;
