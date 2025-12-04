import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any custom props here if needed
}

const FigmaObject4Icon: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
            <linearGradient id="Vector-gradient-221-1606" gradientTransform="matrix(6.123234262925839e-17, -1, 1, 6.123234262925839e-17, 0, 1)">
                <stop offset="0" stop-color="rgb(163, 255, 195)" />
              <stop offset="1" stop-color="rgb(33, 170, 81)" />
            </linearGradient>
                </defs>
      
      <path
        d="M0.0014374 1.4375 C0.0014374 1.17054 0.0757772 0.908853 0.216127 0.681762 C0.356477 0.454672 0.557291 0.27115 0.796068 0.151762 C1.03484 0.0323732 1.30215 -0.0181654 1.56803 0.00580916 C1.83392 0.0297837 2.08787 0.127324 2.30144 0.287501 L13.7986 8.91537 C14.9026 9.74337 14.3161 11.5029 12.9361 11.5029 L7.26225 11.5029 C7.04199 11.5027 6.82464 11.5532 6.62699 11.6504 C6.42934 11.7476 6.25667 11.889 6.12231 12.0635 L2.57744 16.6851 C1.74225 17.7747 0 17.1839 0 15.8096 L0.0014374 1.4375 Z"
        fill="url(#Vector-gradient-221-1606)"
      />
        
    </svg>
  );
};

export default FigmaObject4Icon;