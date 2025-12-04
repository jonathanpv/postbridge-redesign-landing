import * as React from "react"
import { SVGProps } from "react"

interface OrbitMainBubbleProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  children?: React.ReactNode;
  outerStrokeStart?: string;
  outerStrokeEnd?: string;
  innerStrokeStart?: string;
  innerStrokeEnd?: string;
  ringStrokeStart?: string;
  ringStrokeEnd?: string;
}

export const OrbitMainBubble = ({ 
  children,
  outerStrokeStart = "var(--brand-700)",
  outerStrokeEnd = "var(--brand-50)",
  innerStrokeStart = "var(--brand-700)",
  innerStrokeEnd = "var(--brand-50)",
  ringStrokeStart = "var(--brand-600)",
  ringStrokeEnd = "var(--brand-50)",
  className,
  ...props 
}: OrbitMainBubbleProps) => {
  const id = React.useId()
  
  return (
    <div className={`relative inline-block ${className || ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        // 1. Define the internal coordinate system based on your original px values
        viewBox="0 0 223 229" 
        // 2. Tell SVG to fill the parent container
        width="100%"
        height="100%"
        fill="none"
        // Preserves aspect ratio if width/height match doesn't fit perfectly
        preserveAspectRatio="xMidYMid meet" 
        {...props}
      >
        <g filter={`url(#a-${id})`}>
          <circle cx={108.999} cy={121} r={77.5} stroke={`url(#b-${id})`} strokeWidth={7} />
        </g>
        <circle cx={112.499} cy={110.5} r={67} stroke={`url(#c-${id})`} strokeWidth={7} />
        <circle cx={112.999} cy={116} r={82.5} stroke={`url(#d-${id})`} />
        <circle
          cx={115.812}
          cy={106.812}
          r={82.5}
          stroke={`url(#e-${id})`}
          transform="rotate(69.498 115.812 106.812)"
        />
        <circle
          cx={83}
          cy={83}
          r={82.5}
          stroke={`url(#f-${id})`}
          transform="scale(-1 1) rotate(69.498 -29.07 -41.905)"
        />
        <defs>
          <linearGradient
            id={`b-${id}`}
            x1={108.999}
            x2={108.999}
            y1={40}
            y2={202}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={outerStrokeStart} />
            <stop offset={1} stopColor={outerStrokeEnd} />
          </linearGradient>
          <linearGradient
            id={`c-${id}`}
            x1={112.499}
            x2={112.499}
            y1={40}
            y2={181}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={innerStrokeStart} />
            <stop offset={1} stopColor={innerStrokeEnd} />
          </linearGradient>
          <linearGradient
            id={`d-${id}`}
            x1={112.999}
            x2={117.881}
            y1={33}
            y2={95.583}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={ringStrokeStart} />
            <stop offset={1} stopColor={ringStrokeEnd} />
          </linearGradient>
          <linearGradient
            id={`e-${id}`}
            x1={115.812}
            x2={120.694}
            y1={23.813}
            y2={86.395}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={ringStrokeStart} />
            <stop offset={1} stopColor={ringStrokeEnd} />
          </linearGradient>
          <linearGradient
            id={`f-${id}`}
            x1={83}
            x2={87.882}
            y1={0}
            y2={62.583}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={ringStrokeStart} />
            <stop offset={1} stopColor={ringStrokeEnd} />
          </linearGradient>
          <filter
            id={`a-${id}`}
            width={216}
            height={216}
            x={0.999}
            y={13}
            colorInterpolationFilters="sRGB"
            filterUnits="userSpaceOnUse"
          >
            <feFlood floodOpacity={0} result="BackgroundImageFix" />
            <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <feGaussianBlur
              result="effect1_foregroundBlur_221_1123"
              stdDeviation={13.5}
            />
          </filter>
        </defs>
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}