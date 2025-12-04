
export const CompanyIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-8 -4 98 98"
      fill="none"
      {...props}
    >
      <g fill="#000" filter="url(#a)">
        <path d="M35.785 4.332c-2.527.33-7.25 1.865-9.685 3.098-5.956 3.008-11.49 8.482-14.438 14.287-2.827 5.595-4.482 14.498-3.128 16.844 1.203 2.015 3.7 2.406 5.414.812 1.053-.962 1.113-1.083 1.384-3.97 1.082-11.73 8.03-20.213 19.1-23.371 3.368-.963 9.444-.963 12.813 0 9.264 2.647 15.67 9.023 18.317 18.317.963 3.34.963 9.445 0 12.814-3.128 11.039-11.7 18.047-23.34 19.13-2.708.24-3.038.33-3.85 1.142-1.685 1.715-1.384 4.392.661 5.625 1.594.933 6.948.451 11.73-1.083 21.146-6.767 29.598-31.973 16.814-50.17C61.471 9.114 51.215 3.88 40.537 4c-1.564.03-3.7.18-4.752.33Z" />
        <path d="M39.184 33.63c-.481.24-6.076 5.624-12.392 11.94l-11.52 11.49v-4.632c0-5.113-.271-6.135-1.775-7.038-1.714-1.022-4.12-.39-4.993 1.294-.692 1.353-.662 19.851.03 21.054 1.053 1.775 1.233 1.805 11.85 1.805 10.588 0 10.98-.06 11.882-1.805a3.714 3.714 0 0 0-1.354-4.932c-.691-.392-1.744-.482-5.594-.482h-4.783l11.46-11.52c6.317-6.316 11.7-11.82 11.971-12.242 1.384-2.105-.451-5.414-3.038-5.414-.45 0-1.233.211-1.744.482Z" />
      </g>
      <defs>
        <filter
          id="a"
          width={81.606}
          height={81.543}
          x={0}
          y={0}
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={4} />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix values="0 0 0 0 0.607202 0 0 0 0 0.682692 0 0 0 0 0.633938 0 0 0 1 0" />
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_221_1213"
          />
          <feBlend
            in="SourceGraphic"
            in2="effect1_dropShadow_221_1213"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  )
  