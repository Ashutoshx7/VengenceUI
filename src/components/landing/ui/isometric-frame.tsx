import React from "react";

interface IsometricFrameProps {
  /** Fill color of the two bottom box panels. E.g. "text-neutral-800" */
  boxClassName?: string;
  /** Stroke/line color for box borders, dashed connectors, guide lines, circle borders. E.g. "text-white" */
  strokeClassName?: string;
  /** Fill color of the circle dot centers. E.g. "text-black" */
  circleClassName?: string;
  /** Color of the large diagonal gradient overlay. E.g. "text-red-500" */
  gradientClassName?: string;
  /** Height of the SVG in px (width is derived from the 366:422 aspect ratio). */
  size?: number | string;
  className?: string;
}

const IsometricFrame: React.FC<IsometricFrameProps> = ({
  boxClassName      = "text-[#202020]",
  strokeClassName   = "text-white",
  circleClassName   = "text-black",
  gradientClassName = "text-zinc-500",
  size              = 422,
  className         = "",
}) => {
  const uid = React.useId().replace(/:/g, "");
  const h = Number(size);
  const w = (h * 366) / 422;

  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={w}
        height={h}
        viewBox="0 0 366 422"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* ── Box panel: left face ── */}
        <path
          d="M5.32178 236.5L185.321 340.423V420.423L5.32178 316.5V236.5Z"
          fill="currentColor" className={boxClassName}
          stroke="currentColor" strokeOpacity={undefined}
        />
        {/*
          SVG doesn't allow two className on the same element for two different currentColors.
          The box fill and stroke are different roles (box vs stroke), so we overlay a
          transparent fill + stroke-only path on top for the border.
        */}
        <path
          d="M5.32178 236.5L185.321 340.423V420.423L5.32178 316.5V236.5Z"
          fill="none"
          stroke="currentColor" className={strokeClassName}
        />

        {/* ── Box panel: right face ── */}
        <rect
          width="207.846" height="80"
          transform="matrix(0.866025 -0.5 0 1 185.322 340.423)"
          fill="currentColor" className={boxClassName}
        />
        <rect
          width="207.846" height="80"
          transform="matrix(0.866025 -0.5 0 1 185.322 340.423)"
          fill="none"
          stroke="currentColor" className={strokeClassName}
        />

        {/* ── Guide lines (two long vertical dashed lines) ── */}
        <path
          d="M5.32158 5.00015L5.32149 276.5"
          stroke="currentColor" className={strokeClassName}
          strokeDasharray="4 4"
        />
        <path
          d="M365.322 0V268.5"
          stroke="currentColor" className={strokeClassName}
          strokeDasharray="4 4 4 4"
        />

        {/* ── Vertex circles (8 dots) ── */}
        {/* Each circle: fill = circleClassName, stroke = strokeClassName */}
        {([
          "matrix(0.866025 -0.5 0 1 193.322 344.5)",
          "matrix(0.866025 0.5 0 1 11.3218 248.5)",
          "matrix(0.866025 0.5 0 1 168.322 339.5)",
          "matrix(0.866025 0.5 0 1 168.322 392.5)",
          "matrix(0.866025 0.5 0 1 11.3218 301.5)",
          "matrix(0.866025 -0.5 0 1 193.322 397.5)",
          "matrix(0.866025 -0.5 0 1 351.322 308.5)",
          "matrix(0.866025 -0.5 0 1 351.322 251.5)",
        ] as const).map((t, i) => (
          <React.Fragment key={i}>
            {/* Fill layer */}
            <circle cx="5" cy="5" r="4.5" transform={t}
              fill="currentColor" className={circleClassName}
            />
            {/* Stroke layer */}
            <circle cx="5" cy="5" r="4.5" transform={t}
              fill="none"
              stroke="currentColor" className={strokeClassName}
            />
          </React.Fragment>
        ))}

        {/* ── Dashed connector lines ── */}
        <path
          d="M19.8218 259L168.822 345"
          stroke="currentColor" className={strokeClassName}
          strokeDasharray="4 4"
        />
        <path
          d="M19.3218 312.5L168.822 397.5M201.822 344.5L351.822 257.5M201.822 397.5L351.822 314"
          stroke="currentColor" className={strokeClassName}
          strokeDasharray="4 4"
        />

        {/* ── Large diagonal gradient overlay ── */}
        <path
          d="M8.32178 239.5V12L365.822 5.5V240L186.322 342L8.32178 239.5Z"
          fill={`url(#grad_${uid})`}
        />

        <defs>
          <linearGradient
            id={`grad_${uid}`}
            x1="186.822" y1="342"
            x2="187.322" y2="5.49999"
            gradientUnits="userSpaceOnUse"
          >
            <stop
              offset="0"
              style={{ stopColor: "currentColor", stopOpacity: 0.1 }}
              className={gradientClassName}
            />
            <stop
              offset="1"
              style={{ stopColor: "currentColor", stopOpacity: 0 }}
              className={gradientClassName}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default IsometricFrame;