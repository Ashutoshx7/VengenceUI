"use client";

import React, { SVGProps, useId } from 'react';

type ConnectorVariant = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

interface CornerConnectorProps extends Omit<SVGProps<SVGSVGElement>, 'width'> {
  variant?: ConnectorVariant;
  strokeColor?: string;
  strokeWidth?: number | string;
  animateColor?: string;
  beamOpacity?: number;
  duration?: number;
  className?: string;
  animate?: boolean;
  width?: number;
  delay?: number;
}

export const CornerConnector: React.FC<CornerConnectorProps> = ({
  variant = "top-left",
  strokeColor = "currentColor",
  strokeWidth = 1,
  animateColor = "var(--foreground)",
  beamOpacity = 0.56,
  duration = 4.8,
  className = "",
  animate = false,
  width = 455,
  delay = 0,
  ...props
}) => {
  const id = useId();
  const gradientId = `corner-gradient-${id}`;

  // Mapping variants to flip/rotate logic
  const variantStyles: Record<ConnectorVariant, string> = {
    "top-left": "rotate-0",
    "top-right": "[transform:scaleX(-1)]",
    "bottom-left": "[transform:scaleY(-1)]",
    "bottom-right": "rotate-180",
  };

  // Your actual SVG path data
  const pathData = `M0.5 0V47.5004C0.5 53.0232 4.97715 57.5004 10.5 57.5004H${width}`;

  return (
    <svg
      width={width}
      height="58"
      viewBox={`0 0 ${width} 58`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`${variantStyles[variant]} ${className} overflow-visible`}
      {...props}
    >
      {/* Base Static Path */}
      <path
        d={pathData}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />

      {/* Animated Light Beam — uses native SVG animation (no JS) */}
      {animate && (
        <>
          <path
            d={pathData}
            stroke={`url(#${gradientId})`}
            strokeWidth={Number(strokeWidth) + 0.5}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1="-100" y1="-20" x2="0" y2="0"
            >
              <stop offset="0%" stopColor={animateColor} stopOpacity="0" />
              <stop offset="50%" stopColor={animateColor} stopOpacity={beamOpacity} />
              <stop offset="100%" stopColor={animateColor} stopOpacity="0" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="-100 0"
                to={`${width + 100} 0`}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  );
};

export default CornerConnector;

type Orientation = 'vertical' | 'horizontal';

interface ConnectorLineProps extends SVGProps<SVGSVGElement> {
  orientation?: Orientation;
  length?: string | number; // e.g., 126, "100%", "20rem"
  strokeWidth?: number;
  strokeColor?: string;
  animateColor?: string;
  beamOpacity?: number;
  duration?: number;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export const ConnectorLine: React.FC<ConnectorLineProps> = ({
  orientation = 'vertical',
  length = 126,
  strokeWidth = 1,
  strokeColor = "currentColor",
  animateColor = "var(--foreground)",
  beamOpacity = 0.52,
  duration = 4.6,
  className = "",
  delay = 0,
  animate = false,
  ...props
}) => {
  const id = useId();
  const isVertical = orientation === 'vertical';
  const gradientId = `line-gradient-${isVertical ? 'v' : 'h'}-${id}`;
  const numericLength = typeof length === "number" ? length : 126;
  const beamLength = 110;

  const sizeStyles = isVertical
    ? { height: length, width: strokeWidth }
    : { width: length, height: strokeWidth };

  return (
    <svg
      viewBox={`0 0 ${isVertical ? strokeWidth : length} ${isVertical ? length : strokeWidth}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={sizeStyles}
      className={className}
      preserveAspectRatio="none"
      {...props}
    >
      <line
        x1={isVertical ? strokeWidth / 2 : 0}
        y1={isVertical ? 0 : strokeWidth / 2}
        x2={isVertical ? strokeWidth / 2 : length}
        y2={isVertical ? length : strokeWidth / 2}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
      />
      {animate && (
        <>
          <line
            x1={isVertical ? strokeWidth / 2 : 0}
            y1={isVertical ? 0 : strokeWidth / 2}
            x2={isVertical ? strokeWidth / 2 : length}
            y2={isVertical ? length : strokeWidth / 2}
            stroke={`url(#${gradientId})`}
            strokeWidth={Number(strokeWidth) + 0.5}
            strokeLinecap="round"
          />
          <defs>
            <linearGradient
              id={gradientId}
              gradientUnits="userSpaceOnUse"
              x1={isVertical ? 0 : -beamLength}
              y1={isVertical ? -beamLength : 0}
              x2={0}
              y2={0}
            >
              <stop offset="0%" stopColor={animateColor} stopOpacity="0" />
              <stop offset="50%" stopColor={animateColor} stopOpacity={beamOpacity} />
              <stop offset="100%" stopColor={animateColor} stopOpacity="0" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from={isVertical ? `0 ${-beamLength}` : `${-beamLength} 0`}
                to={isVertical ? `0 ${numericLength + beamLength}` : `${numericLength + beamLength} 0`}
                dur={`${duration}s`}
                begin={`${delay}s`}
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>
        </>
      )}
    </svg>
  );
};
