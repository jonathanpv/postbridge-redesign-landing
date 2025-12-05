import React, { useId } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * CrossPostingVisualization
 * 
 * A precise SVG reconstruction of the Figma visual.
 * Uses a unique ID prefix to prevent DOM ID conflicts for gradients/filters.
 */
const CrossPostingVisualization = ({ className }: { className?: string }) => {
  // Using a stable ID prefix for this instance to ensure SVG references work correctly
  // and don't clash if multiple instances exist on the page.
  const idPrefix = useId().replace(/:/g, ""); 
  
  return (
    <svg
      className={cn("w-full h-auto", className)}
      viewBox="0 0 562 392"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Diagram showing content being distributed to X, Instagram, LinkedIn, Facebook, and TikTok from a central hub"
    >
      <rect width="562" height="392" rx="14" fill="white" />
      <circle
        cx="281.71"
        cy="230.513"
        r="39.9344"
        stroke={`url(#${idPrefix}_paint0_linear)`}
        strokeWidth="5"
      />
      <circle
        cx="282.011"
        cy="233.822"
        r="49.4583"
        stroke={`url(#${idPrefix}_paint1_linear)`}
      />
      <path
        d="M327.621 211.871C337.192 237.468 324.731 265.755 299.824 275.068C274.917 284.382 246.953 271.21 237.382 245.613C227.811 220.017 240.273 191.73 265.18 182.417C290.087 173.104 318.049 186.275 327.621 211.871Z"
        stroke={`url(#${idPrefix}_paint2_linear)`}
      />
      <g filter={`url(#${idPrefix}_filter0_shadow)`}>
        <circle
          cx="49.9583"
          cy="49.9583"
          r="49.4583"
          transform="matrix(-0.350235 0.936662 0.936662 0.350235 248.99 164)"
          stroke={`url(#${idPrefix}_paint3_linear)`}
        />
      </g>
      <g filter={`url(#${idPrefix}_filter1_inner)`}>
        <rect
          x="236"
          y="290"
          width="92"
          height="37"
          rx="18.5"
          fill="#4FC97A"
        />
        <path
          d="M265.152 314V302.08H269.6C270.411 302.08 271.125 302.229 271.744 302.528C272.373 302.816 272.864 303.243 273.216 303.808C273.568 304.363 273.744 305.04 273.744 305.84C273.744 306.629 273.563 307.307 273.2 307.872C272.848 308.427 272.363 308.853 271.744 309.152C271.125 309.451 270.411 309.6 269.6 309.6H267.328V314H265.152ZM267.328 307.68H269.632C270.027 307.68 270.368 307.605 270.656 307.456C270.944 307.296 271.168 307.077 271.328 306.8C271.488 306.523 271.568 306.203 271.568 305.84C271.568 305.467 271.488 305.147 271.328 304.88C271.168 304.603 270.944 304.389 270.656 304.24C270.368 304.08 270.027 304 269.632 304H267.328V307.68ZM279.295 314.192C278.441 314.192 277.663 313.995 276.959 313.6C276.265 313.205 275.711 312.667 275.295 311.984C274.889 311.301 274.687 310.523 274.687 309.648C274.687 308.773 274.889 307.995 275.295 307.312C275.711 306.629 276.265 306.091 276.959 305.696C277.652 305.301 278.431 305.104 279.295 305.104C280.148 305.104 280.921 305.301 281.615 305.696C282.308 306.091 282.857 306.629 283.263 307.312C283.679 307.984 283.887 308.763 283.887 309.648C283.887 310.523 283.679 311.301 283.263 311.984C282.847 312.667 282.292 313.205 281.599 313.6C280.905 313.995 280.137 314.192 279.295 314.192ZM279.295 312.272C279.764 312.272 280.175 312.16 280.527 311.936C280.889 311.712 281.172 311.403 281.375 311.008C281.588 310.603 281.695 310.149 281.695 309.648C281.695 309.136 281.588 308.688 281.375 308.304C281.172 307.909 280.889 307.6 280.527 307.376C280.175 307.141 279.764 307.024 279.295 307.024C278.815 307.024 278.393 307.141 278.031 307.376C277.668 307.6 277.38 307.909 277.167 308.304C276.964 308.688 276.863 309.136 276.863 309.648C276.863 310.149 276.964 310.603 277.167 311.008C277.38 311.403 277.668 311.712 278.031 311.936C278.393 312.16 278.815 312.272 279.295 312.272ZM288.788 314.192C287.86 314.192 287.049 313.973 286.356 313.536C285.673 313.088 285.204 312.485 284.948 311.728L286.516 310.976C286.74 311.467 287.049 311.851 287.444 312.128C287.849 312.405 288.297 312.544 288.788 312.544C289.172 312.544 289.476 312.459 289.7 312.288C289.924 312.117 290.036 311.893 290.036 311.616C290.036 311.445 289.988 311.307 289.892 311.2C289.807 311.083 289.684 310.987 289.524 310.912C289.375 310.827 289.209 310.757 289.028 310.704L287.604 310.304C286.868 310.091 286.308 309.765 285.924 309.328C285.551 308.891 285.364 308.373 285.364 307.776C285.364 307.243 285.497 306.779 285.764 306.384C286.041 305.979 286.42 305.664 286.9 305.44C287.391 305.216 287.951 305.104 288.58 305.104C289.401 305.104 290.127 305.301 290.756 305.696C291.385 306.091 291.833 306.645 292.1 307.36L290.5 308.112C290.351 307.717 290.1 307.403 289.748 307.168C289.396 306.933 289.001 306.816 288.564 306.816C288.212 306.816 287.935 306.896 287.732 307.056C287.529 307.216 287.428 307.424 287.428 307.68C287.428 307.84 287.471 307.979 287.556 308.096C287.641 308.213 287.759 308.309 287.908 308.384C288.068 308.459 288.249 308.528 288.452 308.592L289.844 309.008C290.559 309.221 291.108 309.541 291.492 309.968C291.887 310.395 292.084 310.917 292.084 311.536C292.084 312.059 291.945 312.523 291.668 312.928C291.391 313.323 291.007 313.632 290.516 313.856C290.025 314.08 289.449 314.192 288.788 314.192ZM297.663 314.096C296.681 314.096 295.919 313.829 295.375 313.296C294.841 312.752 294.575 311.989 294.575 311.008V307.168H293.071V305.296H293.231C293.657 305.296 293.988 305.184 294.223 304.96C294.457 304.736 294.575 304.411 294.575 303.984V303.312H296.671V305.296H298.671V307.168H296.671V310.896C296.671 311.184 296.719 311.429 296.815 311.632C296.921 311.835 297.081 311.989 297.295 312.096C297.519 312.203 297.801 312.256 298.143 312.256C298.217 312.256 298.303 312.251 298.399 312.24C298.505 312.229 298.607 312.219 298.703 312.208V314C298.553 314.021 298.383 314.043 298.191 314.064C297.999 314.085 297.823 314.096 297.663 314.096Z"
          fill="white"
        />
      </g>
      <path
        d="M317.752 333.309C317.752 333.042 317.827 332.78 317.967 332.553C318.107 332.326 318.308 332.142 318.547 332.023C318.786 331.903 319.053 331.853 319.319 331.877C319.585 331.901 319.839 331.998 320.052 332.159L331.55 340.786C332.654 341.614 332.067 343.374 330.687 343.374H325.013C324.793 343.374 324.576 343.424 324.378 343.522C324.18 343.619 324.008 343.76 323.873 343.935L320.328 348.556C319.493 349.646 317.751 349.055 317.751 347.681L317.752 333.309Z"
        fill={`url(#${idPrefix}_paint4_linear)`}
      />
      <path d="M278 174L278 96" stroke={`url(#${idPrefix}_paint5_linear)`} />
      <path
        d="M253 178.5L232.5 152H131"
        stroke={`url(#${idPrefix}_paint6_linear)`}
      />
      <path
        d="M303 178.5L323.5 152H425"
        stroke={`url(#${idPrefix}_paint7_linear)`}
      />
      <path
        d="M224 223.5H182L121 282.5"
        stroke={`url(#${idPrefix}_paint8_linear)`}
      />
      <path
        d="M335 223.5H377L438 282.5"
        stroke={`url(#${idPrefix}_paint9_linear)`}
      />
      <g filter={`url(#${idPrefix}_filter2_drop)`}>
        <circle cx="277.5" cy="59.5" r="29.5" fill="white" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M269.041 46.207C267.759 46.207 266.53 46.7163 265.624 47.6227C264.717 48.5291 264.208 49.7585 264.208 51.0404V67.957C264.208 69.2389 264.717 70.4683 265.624 71.3747C266.53 72.2811 267.759 72.7904 269.041 72.7904H285.958C287.24 72.7904 288.469 72.2811 289.376 71.3747C290.282 70.4683 290.791 69.2389 290.791 67.957V51.0404C290.791 49.7585 290.282 48.5291 289.376 47.6227C288.469 46.7163 287.24 46.207 285.958 46.207H269.041ZM268.638 50.4362C268.505 50.4854 268.387 50.5647 268.29 50.668C268.194 50.7712 268.123 50.8955 268.084 51.0309C268.044 51.1664 268.037 51.3092 268.062 51.448C268.087 51.5869 268.144 51.7179 268.229 51.8306L275.013 60.8327L267.866 68.4996L267.812 68.5612H270.286L276.122 62.3032L280.608 68.2579C280.712 68.3957 280.853 68.501 281.015 68.5612H286.358C286.49 68.5118 286.609 68.4322 286.705 68.3289C286.801 68.2255 286.871 68.1012 286.911 67.9658C286.95 67.8304 286.957 67.6876 286.932 67.5489C286.906 67.4102 286.849 67.2794 286.764 67.1668L279.98 58.1647L287.187 50.4362H284.71L278.874 56.6954L274.386 50.7407C274.282 50.6024 274.141 50.4968 273.979 50.4362H268.638ZM281.784 66.8067L270.77 52.1907H273.21L284.223 66.8055L281.784 66.8067Z"
        fill="#4A5160"
      />
      <g filter={`url(#${idPrefix}_filter3_drop)`}>
        <circle cx="94.5" cy="297.5" r="29.5" fill="white" />
      </g>
      <g clipPath={`url(#${idPrefix}_clip0)`}>
        <path
          d="M109 297.5C109 289.492 102.508 283 94.5 283C86.4919 283 80 289.492 80 297.5C80 304.737 85.3025 310.736 92.2344 311.824V301.691H88.5527V297.5H92.2344V294.305C92.2344 290.671 94.3992 288.664 97.7113 288.664C99.2977 288.664 100.957 288.947 100.957 288.947V292.516H99.1287C97.3274 292.516 96.7656 293.633 96.7656 294.78V297.5H100.787L100.144 301.691H96.7656V311.824C103.698 310.736 109 304.737 109 297.5Z"
          fill="#1877F2"
        />
        <path
          d="M100.144 301.691L100.787 297.5H96.7656V294.78C96.7656 293.633 97.3274 292.516 99.1287 292.516H100.957V288.947C100.957 288.947 99.2977 288.664 97.7112 288.664C94.3992 288.664 92.2344 290.671 92.2344 294.305V297.5H88.5527V301.691H92.2344V311.824C92.9839 311.941 93.7414 312 94.5 312C95.2586 312 96.0161 311.941 96.7656 311.824V301.691H100.144Z"
          fill="white"
        />
      </g>
      <g filter={`url(#${idPrefix}_filter4_drop)`}>
        <circle cx="98.5" cy="149.5" r="29.5" fill="white" />
      </g>
      <g clipPath={`url(#${idPrefix}_clip1)`}>
        <path
          d="M106.203 135H90.7969C87.0431 135 84 138.043 84 141.797V157.203C84 160.957 87.0431 164 90.7969 164H106.203C109.957 164 113 160.957 113 157.203V141.797C113 138.043 109.957 135 106.203 135Z"
          fill={`url(#${idPrefix}_paint10_radial)`}
        />
        <path
          d="M106.203 135H90.7969C87.0431 135 84 138.043 84 141.797V157.203C84 160.957 87.0431 164 90.7969 164H106.203C109.957 164 113 160.957 113 157.203V141.797C113 138.043 109.957 135 106.203 135Z"
          fill={`url(#${idPrefix}_paint11_radial)`}
        />
        <path
          d="M98.501 138.172C95.4245 138.172 95.0384 138.185 93.8301 138.24C92.6241 138.296 91.8009 138.486 91.0806 138.767C90.3355 139.056 89.7035 139.443 89.0739 140.073C88.4437 140.703 88.0566 141.335 87.7664 142.079C87.4854 142.8 87.2943 143.623 87.2401 144.829C87.186 146.037 87.1719 146.424 87.1719 149.5C87.1719 152.577 87.1855 152.962 87.2403 154.17C87.2958 155.376 87.4867 156.199 87.7666 156.919C88.0561 157.665 88.4432 158.297 89.0731 158.926C89.7026 159.556 90.3346 159.944 91.0792 160.234C91.8 160.514 92.6233 160.705 93.8291 160.76C95.0374 160.815 95.4233 160.828 98.4997 160.828C101.576 160.828 101.961 160.815 103.17 160.76C104.376 160.705 105.2 160.514 105.921 160.234C106.665 159.944 107.297 159.556 107.926 158.926C108.556 158.297 108.943 157.665 109.233 156.92C109.512 156.199 109.703 155.376 109.76 154.17C109.814 152.962 109.828 152.577 109.828 149.5C109.828 146.424 109.814 146.037 109.76 144.829C109.703 143.623 109.512 142.8 109.233 142.08C108.943 141.335 108.556 140.703 107.926 140.073C107.296 139.443 106.666 139.056 105.92 138.767C105.198 138.486 104.374 138.295 103.168 138.24C101.96 138.185 101.575 138.172 98.4975 138.172H98.501ZM97.4848 140.213C97.7864 140.213 98.123 140.213 98.501 140.213C101.526 140.213 101.884 140.224 103.079 140.278C104.183 140.329 104.783 140.514 105.182 140.669C105.711 140.874 106.087 141.119 106.484 141.516C106.88 141.912 107.126 142.29 107.331 142.819C107.486 143.217 107.671 143.817 107.722 144.921C107.776 146.116 107.788 146.474 107.788 149.498C107.788 152.521 107.776 152.88 107.722 154.074C107.671 155.178 107.486 155.778 107.331 156.176C107.126 156.705 106.88 157.082 106.484 157.478C106.087 157.874 105.711 158.12 105.182 158.325C104.783 158.481 104.183 158.665 103.079 158.715C101.884 158.77 101.526 158.781 98.501 158.781C95.4762 158.781 95.1176 158.77 93.9236 158.715C92.8191 158.664 92.2196 158.48 91.8199 158.325C91.2913 158.119 90.9137 157.874 90.5172 157.478C90.1207 157.081 89.8753 156.704 89.6695 156.176C89.5144 155.777 89.3297 155.177 89.2794 154.073C89.2251 152.878 89.2142 152.52 89.2142 149.495C89.2142 146.47 89.2251 146.113 89.2794 144.919C89.3299 143.814 89.5144 143.215 89.6695 142.815C89.8749 142.287 90.1207 141.909 90.5173 141.513C90.9139 141.116 91.2913 140.871 91.82 140.665C92.2193 140.509 92.8191 140.325 93.9236 140.274C94.9686 140.227 95.3736 140.213 97.4848 140.21V140.213ZM104.548 142.094C103.797 142.094 103.189 142.703 103.189 143.453C103.189 144.204 103.797 144.813 104.548 144.813C105.298 144.813 105.907 144.204 105.907 143.453C105.907 142.703 105.298 142.094 104.548 142.094V142.094ZM98.501 143.683C95.2884 143.683 92.6836 146.287 92.6836 149.5C92.6836 152.713 95.2884 155.316 98.501 155.316C101.714 155.316 104.318 152.713 104.318 149.5C104.318 146.287 101.714 143.683 98.5008 143.683H98.501ZM98.501 145.724C100.586 145.724 102.277 147.414 102.277 149.5C102.277 151.586 100.586 153.276 98.501 153.276C96.4156 153.276 94.725 151.586 94.725 149.5C94.725 147.414 96.4155 145.724 98.501 145.724Z"
          fill="white"
        />
      </g>
      <g filter={`url(#${idPrefix}_filter5_drop)`}>
        <circle
          cx="29.5"
          cy="29.5"
          r="29.5"
          transform="matrix(-1 0 0 1 487 120)"
          fill="white"
        />
      </g>
      <g clipPath={`url(#${idPrefix}_clip2)`}>
        <path
          d="M465.203 135H449.797C446.043 135 443 138.043 443 141.797V157.203C443 160.957 446.043 164 449.797 164H465.203C468.957 164 472 160.957 472 157.203V141.797C472 138.043 468.957 135 465.203 135Z"
          fill="white"
        />
        <path
          d="M465.203 135H449.797C446.043 135 443 138.043 443 141.797V157.203C443 160.957 446.043 164 449.797 164H465.203C468.957 164 472 160.957 472 157.203V141.797C472 138.043 468.957 135 465.203 135Z"
          fill="#0A66C2"
        />
        <path
          d="M463.925 159.66H467.24C467.361 159.66 467.476 159.612 467.561 159.527C467.646 159.442 467.694 159.327 467.694 159.207L467.695 152.201C467.695 148.539 466.906 145.725 462.627 145.725C461.001 145.665 459.467 146.503 458.639 147.903C458.635 147.91 458.629 147.915 458.622 147.918C458.614 147.921 458.606 147.922 458.598 147.92C458.591 147.918 458.584 147.913 458.579 147.907C458.574 147.901 458.572 147.893 458.572 147.885V146.516C458.572 146.396 458.524 146.281 458.439 146.196C458.354 146.111 458.239 146.063 458.119 146.063H454.972C454.852 146.063 454.736 146.111 454.651 146.196C454.567 146.281 454.519 146.396 454.519 146.516V159.206C454.519 159.326 454.567 159.441 454.651 159.526C454.736 159.611 454.852 159.659 454.972 159.659H458.287C458.408 159.659 458.523 159.611 458.608 159.526C458.693 159.441 458.741 159.326 458.741 159.206V152.933C458.741 151.16 459.077 149.442 461.276 149.442C463.444 149.442 463.472 151.471 463.472 153.048V159.207C463.472 159.327 463.519 159.442 463.604 159.527C463.689 159.612 463.805 159.66 463.925 159.66ZM447.305 141.755C447.305 143.099 448.411 144.205 449.755 144.205C451.099 144.204 452.205 143.098 452.205 141.754C452.204 140.41 451.099 139.305 449.755 139.305C448.411 139.305 447.305 140.411 447.305 141.755ZM448.093 159.66H451.413C451.533 159.66 451.648 159.612 451.733 159.527C451.818 159.442 451.866 159.327 451.866 159.207V146.516C451.866 146.396 451.818 146.281 451.733 146.196C451.648 146.111 451.533 146.063 451.413 146.063H448.093C447.973 146.063 447.858 146.111 447.773 146.196C447.688 146.281 447.64 146.396 447.64 146.516V159.207C447.64 159.327 447.688 159.442 447.773 159.527C447.858 159.612 447.973 159.66 448.093 159.66Z"
          fill="white"
        />
      </g>
      <g filter={`url(#${idPrefix}_filter6_drop)`}>
        <circle
          cx="29.5"
          cy="29.5"
          r="29.5"
          transform="matrix(-1 0 0 1 494 268)"
          fill="white"
        />
      </g>
      <path
        d="M470.058 290.033C469.232 289.089 468.777 287.879 468.777 286.625H465.043V301.608C465.015 302.419 464.673 303.188 464.089 303.751C463.505 304.315 462.725 304.63 461.914 304.629C460.198 304.629 458.772 303.228 458.772 301.488C458.772 299.409 460.778 297.85 462.844 298.491V294.673C458.676 294.117 455.026 297.355 455.026 301.488C455.026 305.511 458.361 308.375 461.902 308.375C465.696 308.375 468.777 305.294 468.777 301.488V293.887C470.291 294.974 472.109 295.558 473.973 295.555V291.821C473.973 291.821 471.701 291.93 470.058 290.033Z"
        fill="black"
      />
      <g filter={`url(#${idPrefix}_filter7_d)`}>
        <path
          d="M278.905 204.239C277.095 204.476 273.712 205.577 271.967 206.461C267.701 208.618 263.736 212.543 261.624 216.706C259.599 220.718 258.413 227.102 259.383 228.785C260.245 230.23 262.033 230.51 263.262 229.367C264.016 228.677 264.059 228.59 264.253 226.52C265.029 218.108 270.006 212.026 277.936 209.761C280.349 209.071 284.702 209.071 287.115 209.761C293.752 211.659 298.342 216.232 300.238 222.896C300.927 225.29 300.927 229.669 300.238 232.085C297.997 240 291.856 245.026 283.517 245.802C281.577 245.975 281.34 246.04 280.759 246.622C279.552 247.851 279.767 249.771 281.233 250.655C282.375 251.324 286.21 250.979 289.636 249.879C304.785 245.026 310.839 226.951 301.682 213.902C297.307 207.669 289.96 203.916 282.31 204.002C281.19 204.024 279.66 204.131 278.905 204.239Z"
          fill="white"
        />
        <path
          d="M281.34 225.247C280.995 225.419 276.987 229.28 272.462 233.81L264.209 242.049V238.727C264.209 235.061 264.015 234.327 262.938 233.68C261.71 232.947 259.986 233.4 259.361 234.608C258.866 235.578 258.887 248.843 259.383 249.706C260.137 250.978 260.266 251 267.873 251C275.457 251 275.738 250.957 276.384 249.706C277.052 248.433 276.621 246.902 275.414 246.169C274.919 245.888 274.165 245.823 271.406 245.823H267.98L276.19 237.563C280.715 233.033 284.572 229.086 284.766 228.784C285.757 227.274 284.443 224.902 282.59 224.902C282.267 224.902 281.706 225.053 281.34 225.247Z"
          fill="white"
        />
      </g>
      <defs>
        <filter
          id={`${idPrefix}_filter0_shadow`}
          x="216.315"
          y="175.32"
          width="143.943"
          height="193.941"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="3" />
          <feGaussianBlur stdDeviation="3" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.478431 0 0 0 0 0.717647 0 0 0 0 0.498039 0 0 0 0.98 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="2" dy="11" />
          <feGaussianBlur stdDeviation="5.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.478431 0 0 0 0 0.717647 0 0 0 0 0.498039 0 0 0 0.85 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="4" dy="25" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.478431 0 0 0 0 0.717647 0 0 0 0 0.498039 0 0 0 0.5 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="8" dy="45" />
          <feGaussianBlur stdDeviation="9" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.478431 0 0 0 0 0.717647 0 0 0 0 0.498039 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="12" dy="71" />
          <feGaussianBlur stdDeviation="10" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.478431 0 0 0 0 0.717647 0 0 0 0 0.498039 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow"
            result="effect5_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect5_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter1_inner`}
          x="236"
          y="286"
          width="92"
          height="45"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.38 0"
          />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0726701 0 0 0 0 0.629808 0 0 0 0 0.269038 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow"
            result="effect2_innerShadow"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter2_drop`}
          x="236"
          y="16"
          width="83"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow"
            result="effect5_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect5_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter3_drop`}
          x="53"
          y="254"
          width="83"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow"
            result="effect5_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect5_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter4_drop`}
          x="57"
          y="106"
          width="83"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow"
            result="effect5_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect5_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter5_drop`}
          x="416"
          y="106"
          width="83"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow"
            result="effect5_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect5_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter6_drop`}
          x="423"
          y="254"
          width="83"
          height="102"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="1" />
          <feGaussianBlur stdDeviation="1.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="5" />
          <feGaussianBlur stdDeviation="2.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"
          />
          <feBlend
            mode="normal"
            in2="effect1_dropShadow"
            result="effect2_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="12" />
          <feGaussianBlur stdDeviation="3.5" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="effect2_dropShadow"
            result="effect3_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="21" />
          <feGaussianBlur stdDeviation="4" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"
          />
          <feBlend
            mode="normal"
            in2="effect3_dropShadow"
            result="effect4_dropShadow"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-2" />
          <feGaussianBlur stdDeviation="6" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"
          />
          <feBlend
            mode="normal"
            in2="effect4_dropShadow"
            result="effect5_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect5_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={`${idPrefix}_filter7_d`}
          x="248"
          y="197"
          width="69"
          height="69"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.380547 0 0 0 0 0.706731 0 0 0 0 0.495865 0 0 0 0.81 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <linearGradient
          id={`${idPrefix}_paint0_linear`}
          x1="281.71"
          y1="188.078"
          x2="281.71"
          y2="272.947"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#66CC8A" />
          <stop offset="1" stopColor="#EDFFF3" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint1_linear`}
          x1="282.011"
          y1="183.863"
          x2="284.95"
          y2="221.532"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8FEBAF" />
          <stop offset="1" stopColor="#EDFFF3" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint2_linear`}
          x1="328.089"
          y1="211.696"
          x2="294.682"
          y2="227.167"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8FEBAF" />
          <stop offset="1" stopColor="#EDFFF3" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint3_linear`}
          x1="49.9583"
          y1="0"
          x2="52.897"
          y2="37.6691"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8FEBAF" />
          <stop offset="1" stopColor="#EDFFF3" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint4_linear`}
          x1="324.939"
          y1="331.871"
          x2="324.939"
          y2="349.121"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#A3FFC3" />
          <stop offset="1" stopColor="#21AA51" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint5_linear`}
          x1="278.5"
          y1="96"
          x2="278.5"
          y2="174"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="white" />
          <stop offset="0.259239" stopColor="#53CA7D" />
          <stop offset="0.60958" stopColor="#C9E8D4" />
          <stop offset="1" stopColor="#4BC677" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint6_linear`}
          x1="131"
          y1="142.5"
          x2="276"
          y2="183.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0118042" stopColor="white" />
          <stop offset="0.159814" stopColor="#4FC97A" />
          <stop offset="0.461538" stopColor="#C9E8D4" />
          <stop offset="1" stopColor="#4BC677" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint7_linear`}
          x1="425"
          y1="142.5"
          x2="280"
          y2="183.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0118042" stopColor="white" />
          <stop offset="0.159814" stopColor="#4FC97A" />
          <stop offset="0.461538" stopColor="#C9E8D4" />
          <stop offset="1" stopColor="#4BC677" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint8_linear`}
          x1="229.5"
          y1="208.5"
          x2="119.5"
          y2="285.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FC97A" />
          <stop offset="0.244232" stopColor="#C9E8D4" />
          <stop offset="0.728977" stopColor="#4BC677" />
          <stop offset="0.990183" stopColor="white" />
        </linearGradient>
        <linearGradient
          id={`${idPrefix}_paint9_linear`}
          x1="329.5"
          y1="208.5"
          x2="439.5"
          y2="285.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#4FC97A" />
          <stop offset="0.244232" stopColor="#C9E8D4" />
          <stop offset="0.728977" stopColor="#4BC677" />
          <stop offset="0.990183" stopColor="white" />
        </linearGradient>
        <radialGradient
          id={`${idPrefix}_paint10_radial`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(91.7031 166.234) rotate(-90) scale(28.7412 26.7315)"
        >
          <stop stopColor="#FFDD55" />
          <stop offset="0.1" stopColor="#FFDD55" />
          <stop offset="0.5" stopColor="#FF543E" />
          <stop offset="1" stopColor="#C837AB" />
        </radialGradient>
        <radialGradient
          id={`${idPrefix}_paint11_radial`}
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(79.1424 137.089) rotate(78.681) scale(12.8475 52.9576)"
        >
          <stop stopColor="#3771C8" />
          <stop offset="0.128" stopColor="#3771C8" />
          <stop offset="1" stopColor="#6600FF" stopOpacity="0" />
        </radialGradient>
        <clipPath id={`${idPrefix}_clip0`}>
          <rect width="29" height="29" fill="white" transform="translate(80 283)" />
        </clipPath>
        <clipPath id={`${idPrefix}_clip1`}>
          <rect width="29" height="29" fill="white" transform="translate(84 135)" />
        </clipPath>
        <clipPath id={`${idPrefix}_clip2`}>
          <rect width="29" height="29" fill="white" transform="translate(443 135)" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default function CrossPostingSection() {
  return (
    <section className="w-full flex justify-center p-4 md:p-8">
      {/* Main Card */}
      <div className="relative w-full max-w-[1068px] min-h-[428px] overflow-hidden rounded-[20px] bg-gradient-to-r from-brand-white to-[#E8FBF0] border border-[#F0F0F0] shadow-sm flex flex-col lg:flex-row">
        
        {/* Left Column: Content */}
        <div className="flex-1 p-8 lg:p-[48px] flex flex-col justify-center items-start relative z-10">
          
          {/* Badge */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-[50px] h-[46px] rounded-xl bg-[#F8FFFA] flex items-center justify-center border border-[#E9F8ED] shadow-[0px_2px_4px_rgba(102,204,138,0.1),0px_7px_7px_rgba(102,204,138,0.09)]">
              <Zap className="w-6 h-6 text-brand-700 fill-brand-700" />
            </div>
            <span className="text-brand-700 font-semibold tracking-wide text-[15px] uppercase">
              Cross-posting
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-[32px] md:text-[37px] leading-[1.2] font-bold text-[#333c4d] tracking-tight mb-6">
            Post to all platforms <br />
            <span className="text-brand-700">instantly</span>
          </h2>

          {/* Description */}
          <p className="text-[#333c4d] text-base leading-[1.8] text-justify md:text-left max-w-[480px] mb-8 opacity-90">
            Publish everywhere in 30 seconds, not 30 minutes. Manage all your
            personal and brand accounts without switching back and forth.
            Connect your social media accounts and publish your content across
            all platforms with a single click - no learning curve required.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mt-2">
            <button className="h-[46px] px-8 rounded-full bg-brand-700 text-brand-white font-medium text-[16px] border border-transparent flex justify-center items-center gap-2 hover:bg-brand-800 transition-all duration-300 relative overflow-hidden group shadow-md shadow-brand-700/20 active:scale-95">
              <span>Start posting</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>

            <button className="h-[46px] px-8 rounded-full bg-brand-white text-[#4b5362] font-medium text-[16px] border border-[#bbbbbb] hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 shadow-sm active:scale-95">
              View platforms
            </button>
          </div>
        </div>

        {/* Right Column: Visualization */}
        <div className="flex-1 w-full lg:w-[562px] min-h-[300px] lg:h-auto relative flex justify-center items-center p-6 lg:p-0 lg:pr-[18px] lg:py-[18px]">
          <div className="relative w-full max-w-[562px] bg-brand-white rounded-[14px] shadow-sm overflow-hidden border border-[#f0f0f0] flex items-center justify-center">
            <CrossPostingVisualization />
          </div>
        </div>
      </div>
    </section>
  );
}