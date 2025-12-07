import React from 'react';

interface IconContainerBubbleProps {
  children: React.ReactNode;
  size?: number;
  className?: string;
}

export const IconContainerBubble = ({ 
  children, 
  size = 72,
  className = "" 
}: IconContainerBubbleProps) => {
  const innerCircleRadius = (size * 28.4226) / 72;
  const strokeRadius = (size * 26.9226) / 72;
  const center = size / 2;

  return (
    <div className={`inline-flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox={`0 0 ${size} ${size}`} 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="relative"
      >
        {/* Outer circle with gradient */}
        <circle 
          cx={center} 
          cy={center} 
          r={center} 
          className="fill-[url(#paint0_linear)]"
        />
        
        {/* Inner white circle */}
        <circle 
          cx={center} 
          cy={center} 
          r={innerCircleRadius} 
          fill="white"
        />
        
        {/* Stroke circle with gradient */}
        <circle 
          cx={center} 
          cy={center} 
          r={strokeRadius} 
          className="stroke-[url(#paint1_linear)]"
          strokeWidth="3"
          fill="none"
        />
        
        <defs>
          <linearGradient 
            id={`${id}-paint0_linear`} 
            x1={center} 
            y1="0" 
            x2={center} 
            y2={size} 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(var(--color-primary) / 0.2)" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          
          <linearGradient 
            id={`${id}-paint1_linear`} 
            x1={center} 
            y1={size * 0.105} 
            x2={center} 
            y2={size * 0.895} 
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="hsl(var(--color-primary) / 0.6)" />
            <stop offset="1" stopColor="white" stopOpacity="0.5" />
          </linearGradient>
        </defs>
      </svg>
      
      {/* Icon container */}
      <div className="absolute inset-0 flex items-center justify-center">
        {children}
      </div>
    </div>
  );
};

// Example usage with a TikTok icon
export const TikTokIcon = ({ size = 32 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <path 
      d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" 
      fill="currentColor"
    />
  </svg>
);
