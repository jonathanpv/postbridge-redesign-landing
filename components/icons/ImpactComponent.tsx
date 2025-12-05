import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any custom props here if needed
}

const ImpactComponent: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="1440"
      height="470"
      viewBox="0 0 1440 470"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      
      
        <g transform="matrix(0.998424232006073, 0.056116752326488495, -0.056116752326488495, 0.998424232006073, 80.87890625, 203)">
          
      <path
        d="M1323 386.766 C1323 607.127 828.264 799.766 619.5 799.766 C410.736 799.766 0 546.127 0 325.766 C0 105.404 338.499 17.5591 619.5 1.76556 C932.191 -15.8091 1361.5 96.7656 1323 386.766 Z"
        fill="none"
      />
        
        </g>
            
    </svg>
  );
};


export default ImpactComponent;