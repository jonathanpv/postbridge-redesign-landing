import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any custom props here if needed
}

const FigmaObject3Icon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="666"
      height="1311"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
            <linearGradient id="Vector-8356-gradient" gradientTransform="matrix(-0.01334725134074688, -1.1706821918487549, 1.1473139524459839, -0.10521943867206573, 0.21416521072387695, 1.1493886709213257)">
                <stop offset="0" stop-color="rgb(102, 204, 138)" />
          <stop offset="1" stop-color="rgba(255, 255, 255, 0)" />
            </linearGradient>
        </defs>
      <path
        d="M235.004 67.7179 C195.328 32.1579 -11.6189 -33.2507 42.3464 20.2713 L0 1260.38 C210.893 1129.32 251.965 1074.84 273.965 960.137 C-115.725 626.089 610.224 297.737 235.004 67.7179 Z"
        fill="url(#Vector-8356-gradient)"
      />
    </svg>
  );
};

export default FigmaObject3Icon;