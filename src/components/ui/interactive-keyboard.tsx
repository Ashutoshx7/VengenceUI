"use client";

import React, { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export interface InteractiveKeyboardProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onKeyPress'> {
  onKeyClick?: (key: string) => void;
}

export function InteractiveKeyboard({ className, onKeyClick, ...props }: InteractiveKeyboardProps) {
  const [capsLock, setCapsLock] = useState(false);

  const handleKeyClick = (keyName: string) => {
    if (keyName === "caps lock") {
      setCapsLock(!capsLock);
    }
    onKeyClick?.(keyName);
  };

  return (
    <div className={cn("interactive-keyboard-wrapper", className)} {...props}>
      <style>{`
        .interactive-keyboard-wrapper {
          --kb-bg: hsl(0,0%,93%);
          --kb-text: hsl(0,0%,47%);
          --kb-shadow-1: hsla(0,0%,0%,0.25);
          --kb-shadow-2: hsla(0,0%,0%,0.3);
          --kb-shadow-3: hsla(0,0%,0%,0.4);
          --kb-shadow-4: hsla(0,0%,100%,0.8);
          --kb-active-shadow-1: hsla(0,0%,0%,0.2);
          --kb-active-shadow-2: hsla(0,0%,0%,0.4);
          --kb-focus-bg: hsl(0,0%,100%);
          --kb-focus-text: hsl(0,0%,54%);
          
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
          font-size: 16px;
          display: flex;
          overflow: auto;
          width: 100%;
          justify-content: center;
          padding: 2em;
        }

        :is(.dark) .interactive-keyboard-wrapper {
          --kb-bg: hsl(0,0%,20%);
          --kb-text: hsl(0,0%,80%);
          --kb-shadow-1: hsla(0,0%,0%,0.6);
          --kb-shadow-2: hsla(0,0%,0%,0.8);
          --kb-shadow-3: hsla(0,0%,0%,0.8);
          --kb-shadow-4: hsla(0,0%,40%,0.8);
          --kb-active-shadow-1: hsla(0,0%,0%,0.4);
          --kb-active-shadow-2: hsla(0,0%,0%,0.6);
          --kb-focus-bg: hsl(0,0%,30%);
          --kb-focus-text: hsl(0,0%,90%);
        }

        .interactive-keyboard-wrapper button {
          background-color: var(--kb-bg);
          border-radius: 0.125em;
          box-shadow:
            -0.2em -0.125em 0.125em var(--kb-shadow-1),
            0 0 0 0.04em var(--kb-shadow-2),
            0.02em 0.02em 0.02em var(--kb-shadow-3) inset,
            -0.05em -0.05em 0.02em var(--kb-shadow-4) inset;
          color: var(--kb-text);
          display: block;
          font-size: 1em;
          outline: transparent;
          position: relative;
          -webkit-appearance: none;
          appearance: none;
          -webkit-tap-highlight-color: transparent;
          user-select: none;
          border: 0;
          margin: 0;
          padding: 0;
          cursor: pointer;
        }

        .interactive-keyboard-wrapper button:active {
          box-shadow:
            0.1em 0.1em 0.1em var(--kb-active-shadow-1),
            0 0 0 0.05em var(--kb-active-shadow-2),
            -0.025em -0.05em 0.025em var(--kb-shadow-4) inset;
        }
        .interactive-keyboard-wrapper button:focus-visible {
          background-color: var(--kb-focus-bg);
          color: var(--kb-focus-text);
        }
        .interactive-keyboard-wrapper button span {
          display: inline-flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
        }
        .interactive-keyboard-wrapper button > span {
          margin: auto;
          padding: 0.2em 0.375em;
          position: absolute;
          top: 50%;
          left: 0;
          font-size: 0.5em;
          line-height: 2;
          transform: translateY(-50%) scaleX(0.875);
          width: 100%;
        }
        .interactive-keyboard-wrapper button[aria-pressed="true"] .dot-light {
          color: hsl(88,100%,50%);
          text-shadow: 0 0 2px hsl(88,100%,27%);
        }

        /* Keyboard */
        .ikb-keyboard {
          background-image: linear-gradient(90deg,hsl(0,0%,53%),hsl(0,0%,80%));
          border-radius: 0.5em;
          box-shadow:
            -1em -1em 1.5em hsla(0,0%,0%,0.6),
            0 0 0 1px hsl(0,0%,67%) inset;
          display: grid;
          gap: 0.375em 0.875em;
          grid-template-columns: 21.25em 4.125em 5.65em;
          grid-template-rows: 0.75em 1.125em 1.125em 1.125em 1.125em 1.375em;
          font-size: clamp(8px, 2vw, 36px);
          margin: auto;
          padding: 0.25em;
          width: 33.25em;
          height: 9em;
        }

        :is(.dark) .ikb-keyboard {
           background-image: linear-gradient(90deg,hsl(0,0%,20%),hsl(0,0%,30%));
           box-shadow: -1em -1em 1.5em hsla(0,0%,0%,0.9), 0 0 0 1px hsl(0,0%,40%) inset;
        }

        .ikb-row {
          display: flex;
          gap: 0.35em;
        }
        .ikb-row:nth-of-type(14) {
          margin: auto;
        }
        .ikb-row:nth-of-type(n + 14):nth-of-type(-3n + 17) {
          transform: translateY(0.25em);
        }
        .ikb-bump {
          border-radius: 0.1em;
          box-shadow: -0.05em -0.02em 0 0.05em hsla(0,0%,0%,0.3);
          padding: 0;
          top: 85%;
          left: calc(50% - 0.4em);
          width: 0.8em;
          height: 0.15em;
        }

        /* Button size */
        .ikb-btn-0 { width: 1.19em; height: 0.75em; }
        .ikb-btn-1 { width: 1.125em; height: 0.75em; }
        .ikb-btn-2 { width: 1.125em; height: 1.125em; }
        .ikb-btn-3 { width: 2em; height: 1.125em; }
        .ikb-btn-4 { width: 2.3em; height: 1.125em; }
        .ikb-btn-5 { width: 3.05em; height: 1.125em; }
        .ikb-btn-6 { width: 1.5625em; height: 1.375em; }
        .ikb-btn-7 { width: 1.8375em; height: 1.375em; }
        .ikb-btn-8 { width: 1.125em; height: 1.375em; }
        .ikb-btn-9 { width: 2.6875em; height: 1.375em; }
        .ikb-btn-10 { width: 1.125em; height: 2.875em; }
        .ikb-btn-longest { width: 8.625em; height: 1.375em; }

        /* Alignment */
        .ikb-ul, .ikb-ll, .ikb-ur, .ikb-lr { top: 0; transform: scaleX(0.875); }
        .ikb-ul, .ikb-ll { justify-content: flex-start; transform-origin: 0 50%; }
        .ikb-ur, .ikb-lr { justify-content: flex-end; transform-origin: 100% 50%; }
        .ikb-ll, .ikb-lr { top: auto; bottom: 0; }
        .ikb-noxscale { transform: translateY(-50%) scaleX(1); }
        .ikb-ll.ikb-noxscale, .ikb-lr.ikb-noxscale { transform: scaleX(1); }

        /* Fonts */
        .ikb-xxxs { font-size: 0.2em; line-height: 1.5; }
        .ikb-xxs { font-size: 0.25em; line-height: 1.5; }
        .ikb-xs { font-size: 0.3em; line-height: 1.125; }
        .ikb-sm { font-size: 0.4em; line-height: 1.25; }

        /* Icons */
        .ikb-up, .ikb-right, .ikb-down, .ikb-left { width: 0; height: 0; vertical-align: 0.1em; }
        .ikb-up { border-left: 0.25em solid transparent; border-right: 0.25em solid transparent; border-bottom: 0.5em solid currentColor; }
        .ikb-right { border-left: 0.5em solid currentColor; border-top: 0.25em solid transparent; border-bottom: 0.25em solid transparent; }
        .ikb-down { border-left: 0.25em solid transparent; border-right: 0.25em solid transparent; border-top: 0.5em solid currentColor; }
        .ikb-left { border-right: 0.5em solid currentColor; border-top: 0.25em solid transparent; border-bottom: 0.25em solid transparent; }
        
        .ikb-pause { border-left: 0.2em solid; border-right: 0.2em solid; vertical-align: 0.1em; width: 0.475em; height: 0.5em; }
        .ikb-emoji { filter: saturate(0); -webkit-filter: saturate(0); }
        
        .ikb-block { margin-left: 0.1em; height: 0.8em; width: 0.6em; vertical-align: 0.1em; }
        .ikb-cascade { position: relative; height: 1em; width: 1.2em; }
        .ikb-cascade:before, .ikb-cascade:after { content: ""; position: absolute; height: 0.45em; width: 0.8em; }
        .ikb-cascade:before { top: 0; left: 0; }
        .ikb-cascade:after { right: 0; bottom: 0; }
        
        .ikb-block, .ikb-cascade:before, .ikb-cascade:after { border: 1px solid; }
        .ikb-apps:before, .ikb-apps:after { font-weight: bold; display: block; content: "\\25A1\\25A1\\25A1"; line-height: 0.875; }
        
        .ikb-noxpad { padding: 0.2em 0; }
      `}</style>
      
      <div className="ikb-keyboard">
        <div className="ikb-row">
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("esc")}><span className="ikb-xs">esc</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f1")}><span className="ikb-xs ikb-noxscale"><span className="ikb-emoji">&#128261;</span></span><span className="ikb-lr ikb-xxxs">F1</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f2")}><span className="ikb-xs ikb-noxscale"><span className="ikb-emoji">&#128262;</span></span><span className="ikb-lr ikb-xxxs">F2</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f3")}><span className="ikb-xs ikb-noxscale"><span className="ikb-cascade"></span><span className="ikb-block"></span></span><span className="ikb-lr ikb-xxxs">F3</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f4")}><span className="ikb-xxxs ikb-noxscale"><span className="ikb-apps"></span></span><span className="ikb-lr ikb-xxxs">F4</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f5")}><span className="ikb-lr ikb-xxxs">F5</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f6")}><span className="ikb-lr ikb-xxxs">F6</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f7")}><span className="ikb-sm"><span className="ikb-left"></span><span className="ikb-left"></span></span><span className="ikb-lr ikb-xxxs">F7</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f8")}><span className="ikb-sm"><span className="ikb-right"></span><span className="ikb-pause"></span></span><span className="ikb-lr ikb-xxxs">F8</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f9")}><span className="ikb-sm"><span className="ikb-right"></span><span className="ikb-right"></span></span><span className="ikb-lr ikb-xxxs">F9</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f10")}><span className="ikb-xs ikb-noxscale"><span className="ikb-emoji">&#128264;</span></span><span className="ikb-lr ikb-xxxs">F10</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f11")}><span className="ikb-xs ikb-noxscale"><span className="ikb-emoji">&#128265;</span></span><span className="ikb-lr ikb-xxxs">F11</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("f12")}><span className="ikb-xs ikb-noxscale"><span className="ikb-emoji">&#128266;</span></span><span className="ikb-lr ikb-xxxs">F12</span></button>
          <button type="button" className="ikb-btn-0" onClick={() => handleKeyClick("eject")}><span className="ikb-xs ikb-noxscale">⏏</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f13")}><span className="ikb-lr ikb-xxxs">F13</span></button>
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f14")}><span className="ikb-lr ikb-xxxs">F14</span></button>
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f15")}><span className="ikb-lr ikb-xxxs">F15</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f16")}><span className="ikb-lr ikb-xxxs">F16</span></button>
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f17")}><span className="ikb-lr ikb-xxxs">F17</span></button>
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f18")}><span className="ikb-lr ikb-xxxs">F18</span></button>
          <button type="button" className="ikb-btn-1" onClick={() => handleKeyClick("f19")}><span className="ikb-lr ikb-xxxs">F19</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("`")}><span className="ikb-sm">~<br/>`</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("1")}><span className="ikb-sm">!<br/>1</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("2")}><span className="ikb-sm">@<br/>2</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("3")}><span className="ikb-sm">#<br/>3</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("4")}><span className="ikb-sm">$<br/>4</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("5")}><span className="ikb-sm">%<br/>5</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("6")}><span className="ikb-sm">^<br/>6</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("7")}><span className="ikb-sm">&amp;<br/>7</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("8")}><span className="ikb-sm">*<br/>8</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("9")}><span className="ikb-sm">(<br/>9</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("0")}><span className="ikb-sm">)<br/>0</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("-")}><span className="ikb-sm">_<br/>-</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("=")}><span className="ikb-sm">+<br/>=</span></button>
          <button type="button" className="ikb-btn-3" onClick={() => handleKeyClick("delete")}><span className="ikb-lr ikb-xs">delete</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("fn")}><span className="ikb-xs">fn</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("home")}><span className="ikb-xs">home</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("page up")}><span className="ikb-xs">page up</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("clear")}><span className="ikb-xs">clear</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("=")}><span>=</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("/")}><span>/</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("*")}><span>*</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-3" onClick={() => handleKeyClick("tab")}><span className="ikb-ll ikb-xs">tab</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("q")}><span>Q</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("w")}><span>W</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("e")}><span>E</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("r")}><span>R</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("t")}><span>T</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("y")}><span>Y</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("u")}><span>U</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("i")}><span>I</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("o")}><span>O</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("p")}><span>P</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("[")}><span className="ikb-sm">&#123;<br/>[</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("]")}><span className="ikb-sm">&#125;<br/>]</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("\\")}><span className="ikb-sm">|<br/>\</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("forward delete")}><span className="ikb-xs ikb-noxpad">delete⌦</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("end")}><span className="ikb-xs">end</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("page down")}><span className="ikb-xs">page down</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 7")}><span>7</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 8")}><span>8</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 9")}><span>9</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad -")}><span>-</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-4" aria-pressed={capsLock} onClick={() => handleKeyClick("caps lock")}>
            <span className="ikb-ul ikb-xs dot-light" aria-hidden="true">•</span>
            <span className="ikb-ll ikb-xs">caps lock</span>
          </button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("a")}><span>A</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("s")}><span>S</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("d")}><span>D</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("f")}><span>F</span><span className="ikb-bump"></span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("g")}><span>G</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("h")}><span>H</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("j")}><span>J</span><span className="ikb-bump"></span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("k")}><span>K</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("l")}><span>L</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick(";")}><span className="ikb-sm">:<br/>;</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("'")}><span className="ikb-sm">&quot;<br/>'</span></button>
          <button type="button" className="ikb-btn-4" onClick={() => handleKeyClick("return")}><span className="ikb-lr ikb-xs">return</span></button>
        </div>
        <div className="ikb-row"></div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 4")}><span>4</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 5")}><span>5</span><span className="ikb-bump"></span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 6")}><span>6</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad +")}><span>+</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-5" onClick={() => handleKeyClick("shift")}><span className="ikb-ll ikb-xs">shift</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("z")}><span>Z</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("x")}><span>X</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("c")}><span>C</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("v")}><span>V</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("b")}><span>B</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("n")}><span>N</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("m")}><span>M</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick(",")}><span className="ikb-sm">&lt;<br/>,</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick(".")}><span className="ikb-sm">&gt;<br/>.</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("/")}><span className="ikb-sm">?<br/>/</span></button>
          <button type="button" className="ikb-btn-5" onClick={() => handleKeyClick("shift")}><span className="ikb-lr ikb-xs">shift</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("up")}><span><span className="ikb-up"></span></span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 1")}><span>1</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 2")}><span>2</span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("numpad 3")}><span>3</span></button>
          <button type="button" className="ikb-btn-10" onClick={() => handleKeyClick("numpad enter")}><span className="ikb-lr ikb-xs">enter</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-7" onClick={() => handleKeyClick("control")}><span className="ikb-ll ikb-xs">control</span></button>
          <button type="button" className="ikb-btn-6" onClick={() => handleKeyClick("option")}><span className="ikb-ul ikb-xxs">alt</span><span className="ikb-ll ikb-xs">option</span></button>
          <button type="button" className="ikb-btn-7" onClick={() => handleKeyClick("command")}><span className="ikb-ll ikb-xs">command</span><span className="ikb-lr ikb-xs ikb-noxscale">⌘</span></button>
          <button type="button" className="ikb-btn-longest" onClick={() => handleKeyClick("space")}><span></span></button>
          <button type="button" className="ikb-btn-7" onClick={() => handleKeyClick("command")}><span className="ikb-ll ikb-xs ikb-noxscale">⌘</span><span className="ikb-lr ikb-xs">command</span></button>
          <button type="button" className="ikb-btn-6" onClick={() => handleKeyClick("option")}><span className="ikb-ur ikb-xxs">alt</span><span className="ikb-lr ikb-xs">option</span></button>
          <button type="button" className="ikb-btn-7" onClick={() => handleKeyClick("control")}><span className="ikb-lr ikb-xs">control</span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("left")}><span><span className="ikb-left"></span></span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("down")}><span><span className="ikb-down"></span></span></button>
          <button type="button" className="ikb-btn-2" onClick={() => handleKeyClick("right")}><span><span className="ikb-right"></span></span></button>
        </div>
        <div className="ikb-row">
          <button type="button" className="ikb-btn-9" onClick={() => handleKeyClick("numpad 0")}><span>0</span></button>
          <button type="button" className="ikb-btn-8" onClick={() => handleKeyClick("numpad .")}><span>.</span></button>
        </div>
      </div>
    </div>
  );
}

export default InteractiveKeyboard;
