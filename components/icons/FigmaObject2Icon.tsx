import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any custom props here if needed
}

const FigmaObject2Icon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="754"
      height="1337"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
            <linearGradient id={`${id}-Vector-8354-gradient`} gradientTransform="matrix(-0.020332178100943565, -1.0411134958267212, 1.020331621170044, -0.16028320789337158, 0.19529280066490173, 1.0655063390731812)">
                <stop offset="0" stop-color="rgb(102, 204, 138)" />
          <stop offset="1" stop-color="rgba(255, 255, 255, 0)" />
            </linearGradient>
        </defs>
      <path
        d="M296.927 67.7179 C246.796 32.1579 -14.6805 -33.2507 53.5046 20.2713 L0 1260.38 C266.463 1129.32 318.358 1074.84 346.155 960.137 C-146.219 626.089 771.017 297.737 296.927 67.7179 Z"
        fill={`url(#${id}-Vector-8354-gradient)`}
      />
    </svg>
  );
};

export default FigmaObject2Icon;