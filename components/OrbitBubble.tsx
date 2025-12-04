import * as React from "react"
import { SVGProps } from "react"

interface OrbitBubbleProps extends Omit<SVGProps<SVGSVGElement>, 'children'> {
  children?: React.ReactNode;
  outerFillStart?: string;
  outerFillEnd?: string;
  innerFill?: string;
  strokeStart?: string;
  strokeEnd?: string;
}

export const OrbitBubble = ({ 
  children, 
  outerFillStart = "var(--brand-100)",
  outerFillEnd = "var(--brand-white)",
  innerFill = "var(--brand-white)",
  strokeStart = "var(--brand-500)",
  strokeEnd = "var(--brand-white-50)",
  className,
  ...props 
}: OrbitBubbleProps) => {
  const id = React.useId()
  
  return (
    <div className={`relative inline-block ${className || ''}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 72 72"
        width="100%"
        height="100%"
        fill="none"
        preserveAspectRatio="xMidYMid meet"
        {...props}
      >
        <circle cx={36.002} cy={36.002} r={36.002} fill={`url(#a-${id})`} />
        <circle cx={36.004} cy={36.001} r={28.423} fill={innerFill} />
        <circle
          cx={36.004}
          cy={36.001}
          r={26.923}
          stroke={`url(#b-${id})`}
          strokeWidth={3}
        />
        <defs>
          <linearGradient
            id={`a-${id}`}
            x1={36.002}
            x2={36.002}
            y1={0}
            y2={72.004}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={outerFillStart} />
            <stop offset={1} stopColor={outerFillEnd} />
          </linearGradient>
          <linearGradient
            id={`b-${id}`}
            x1={36.004}
            x2={36.004}
            y1={7.578}
            y2={64.423}
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor={strokeStart} />
            <stop offset={1} stopColor={strokeEnd} />
          </linearGradient>
        </defs>
      </svg>
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[40%] h-[40%] flex items-center justify-center">
            {children}
          </div>
        </div>
      )}
    </div>
  )
}