'use client'

import React from 'react';

const IsometricGrid = ({
  strokeColor = "#606060",
  strokeWidth = 0.2,
  className = ""
}) => {

  return (
    /* Changed to absolute bottom-0 to pin it to the floor of the hero */
    <div className={`absolute bottom-0 left-0 w-full overflow-visible pointer-events-none ${className}`}>
      <svg
        viewBox="0 0 700 420"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <g transform="translate(3, 10)">
          {/* CSS path-draw animation replaces framer-motion pathLength */}
          <path 
            d="M381.224 20.0996L34.8139 220.1M415.865 40.0996L69.4549 240.1M450.506 60.0996L104.096 260.1M485.147 80.0996L138.737 280.1M519.788 100.1L173.378 300.1M554.429 120.1L208.019 320.1M589.07 140.1L242.66 340.1M623.711 160.1L277.301 360.1M658.352 180.1L311.942 380.1M311.942 20.0996L658.352 220.1M277.301 40.0996L623.711 240.1M242.66 60.0996L589.07 260.1M208.019 80.0996L554.429 280.1M173.378 100.1L519.788 300.1M138.737 120.1L485.147 320.1M104.096 140.1L450.506 340.1M69.4549 160.1L415.865 360.1M34.8139 180.1L381.224 380.1M346.583 0.0996094L0.172853 200.1L346.583 400.1L692.993 200.1L346.583 0.0996094Z" 
            stroke={strokeColor} 
            strokeWidth={strokeWidth}
            className="iso-grid-path"
          />
        </g>
      </svg>

      <style>{`
        .iso-grid-path {
          stroke-dasharray: 8000;
          stroke-dashoffset: 8000;
          animation: iso-draw 2s ease-in-out 0.5s forwards;
        }
        @keyframes iso-draw {
          to { stroke-dashoffset: 0; }
        }
      `}</style>
    </div>
  );
};

export default IsometricGrid;