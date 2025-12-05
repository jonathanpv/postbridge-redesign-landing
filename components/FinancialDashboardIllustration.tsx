import { useId } from 'react'
import { cn } from '@/lib/utils'

interface FinancialDashboardIllustrationProps {
  className?: string
}

export function FinancialDashboardIllustration({ className }: FinancialDashboardIllustrationProps) {
  const id = useId()

  return (
    <svg
      viewBox="0 0 531 392"
      width="100%"
      height="100%"
      className={cn("", className)}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
    >
      <defs>
        {/* FILTERS */}
        <filter id={`filter0-dddd-${id}`} x="19" y="92" width="173" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="14"/>
          <feGaussianBlur stdDeviation="7"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="30"/>
          <feGaussianBlur stdDeviation="9"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="6" dy="54"/>
          <feGaussianBlur stdDeviation="11"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter1-ddddd-${id}`} x="30" y="87" width="50" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="12"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-2"/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter2-dddd-${id}`} x="19" y="137" width="173" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="14"/>
          <feGaussianBlur stdDeviation="7"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="30"/>
          <feGaussianBlur stdDeviation="9"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="6" dy="54"/>
          <feGaussianBlur stdDeviation="11"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter3-ddddd-${id}`} x="30" y="132" width="50" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="12"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-2"/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter4-dddd-${id}`} x="19" y="182" width="173" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="14"/>
          <feGaussianBlur stdDeviation="7"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="30"/>
          <feGaussianBlur stdDeviation="9"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="6" dy="54"/>
          <feGaussianBlur stdDeviation="11"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter5-ddddd-${id}`} x="30" y="177" width="50" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="12"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-2"/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter6-dddd-${id}`} x="19" y="227" width="173" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="14"/>
          <feGaussianBlur stdDeviation="7"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="30"/>
          <feGaussianBlur stdDeviation="9"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="6" dy="54"/>
          <feGaussianBlur stdDeviation="11"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter7-ddddd-${id}`} x="30" y="222" width="50" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="12"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-2"/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter8-dddd-${id}`} x="19" y="272" width="173" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="14"/>
          <feGaussianBlur stdDeviation="7"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="30"/>
          <feGaussianBlur stdDeviation="9"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="6" dy="54"/>
          <feGaussianBlur stdDeviation="11"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter9-ddddd-${id}`} x="30" y="267" width="50" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="12"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-2"/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter10-dddd-${id}`} x="19" y="317" width="173" height="117" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="3"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.1 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="1" dy="14"/>
          <feGaussianBlur stdDeviation="7"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.09 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="3" dy="30"/>
          <feGaussianBlur stdDeviation="9"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.05 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dx="6" dy="54"/>
          <feGaussianBlur stdDeviation="11"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.431373 0 0 0 0 0.831373 0 0 0 0 0.568627 0 0 0 0.01 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter11-ddddd-${id}`} x="30" y="312" width="50" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="1.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="5"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="12"/>
          <feGaussianBlur stdDeviation="3.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="4"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.447059 0 0 0 0 0.811765 0 0 0 0 0.568627 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-2"/>
          <feGaussianBlur stdDeviation="6"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.913725 0 0 0 0 0.972549 0 0 0 0 0.929412 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter12-f-${id}`} x="173.849" y="30" width="108.151" height="136.355" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="3.5" result="effect1_foregroundBlur"/>
        </filter>

        <filter id={`filter13-f-${id}`} x="383" y="163" width="10" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur"/>
        </filter>

        <filter id={`filter14-dddd-${id}`} x="256" y="18" width="263" height="213" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="2"/>
          <feGaussianBlur stdDeviation="2.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.380392 0 0 0 0 0.709804 0 0 0 0 0.431373 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="10"/>
          <feGaussianBlur stdDeviation="5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.380392 0 0 0 0 0.709804 0 0 0 0 0.431373 0 0 0 0.13 0"/>
          <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="21"/>
          <feGaussianBlur stdDeviation="6.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.380392 0 0 0 0 0.709804 0 0 0 0 0.431373 0 0 0 0.08 0"/>
          <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="38"/>
          <feGaussianBlur stdDeviation="7.5"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.380392 0 0 0 0 0.709804 0 0 0 0 0.431373 0 0 0 0.02 0"/>
          <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect4_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter15-d-${id}`} x="451" y="33" width="43" height="25" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="out"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
        </filter>

        <filter id={`filter16-ii-${id}`} x="316" y="102" width="143" height="45" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.38 0"/>
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="-4"/>
          <feGaussianBlur stdDeviation="2"/>
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0.0726701 0 0 0 0 0.629808 0 0 0 0 0.269038 0 0 0 1 0"/>
          <feBlend mode="normal" in2="effect1_innerShadow" result="effect2_innerShadow"/>
        </filter>

        {/* GRADIENTS */}
        <linearGradient id={`paint0-linear-${id}`} x1="100" y1="-1" x2="100" y2="372" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-green-lightest))"/>
        </linearGradient>
        <linearGradient id={`paint1-linear-${id}`} x1="56" y1="75" x2="143" y2="75" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-700))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-gray-light))"/>
        </linearGradient>
        <radialGradient id={`paint2-radial-${id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(50.9844 122.155) rotate(-90) scale(14.8661 13.8267)">
          <stop stopColor="hsl(var(--illustration-yellow))"/>
          <stop offset="0.1" stopColor="hsl(var(--illustration-yellow))"/>
          <stop offset="0.5" stopColor="hsl(var(--illustration-orange))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-pink))"/>
        </radialGradient>
        <radialGradient id={`paint3-radial-${id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.4874 107.081) rotate(78.681) scale(6.64523 27.3919)">
          <stop stopColor="hsl(var(--illustration-blue))"/>
          <stop offset="0.128" stopColor="hsl(var(--illustration-blue))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-purple))" stopOpacity="0"/>
        </radialGradient>
        <linearGradient id={`paint4-linear-${id}`} x1="100" y1="-1" x2="100" y2="372" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--illustration-gray-text))" stopOpacity="0"/>
          <stop offset="1" stopColor="hsl(var(--brand-700))"/>
        </linearGradient>
        <linearGradient id={`paint5-linear-${id}`} x1="101" y1="-19" x2="101" y2="64.2315" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))" stopOpacity="0"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))" stopOpacity="0.76"/>
        </linearGradient>
        <linearGradient id={`paint6-linear-${id}`} x1="281.078" y1="36.0692" x2="210.17" y2="173.416" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.235577" stopColor="hsl(var(--brand-800))"/>
          <stop offset="0.615385" stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.822115" stopColor="hsl(var(--brand-800))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))"/>
        </linearGradient>
        <linearGradient id={`paint7-linear-${id}`} x1="281.078" y1="36.7137" x2="210.17" y2="174.061" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.235577" stopColor="hsl(var(--brand-800))"/>
          <stop offset="0.615385" stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.822115" stopColor="hsl(var(--brand-800))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))"/>
        </linearGradient>
        <linearGradient id={`paint8-linear-${id}`} x1="389.065" y1="166.102" x2="385.487" y2="166.26" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.235577" stopColor="hsl(var(--brand-800))"/>
          <stop offset="0.615385" stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.822115" stopColor="hsl(var(--brand-800))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))"/>
        </linearGradient>
        <linearGradient id={`paint9-linear-${id}`} x1="388" y1="174.147" x2="384.747" y2="174.318" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.235577" stopColor="hsl(var(--brand-800))"/>
          <stop offset="0.615385" stopColor="hsl(var(--brand-white))"/>
          <stop offset="0.822115" stopColor="hsl(var(--brand-800))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))"/>
        </linearGradient>
        <linearGradient id={`paint10-linear-${id}`} x1="387.5" y1="21" x2="387.5" y2="178" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--brand-white))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-green-lightest))"/>
        </linearGradient>
        <linearGradient id={`paint11-linear-${id}`} x1="387.5" y1="21" x2="387.5" y2="178" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--illustration-gray-text))" stopOpacity="0"/>
          <stop offset="1" stopColor="hsl(var(--brand-700))"/>
        </linearGradient>
        <linearGradient id={`paint12-linear-${id}`} x1="446.939" y1="148.871" x2="446.939" y2="166.121" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--illustration-green-soft))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-green-vibrant))"/>
        </linearGradient>
        <linearGradient id={`paint13-linear-${id}`} x1="388" y1="240" x2="384.5" y2="360" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--illustration-green-soft))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={`paint14-linear-${id}`} x1="390.5" y1="261" x2="394" y2="345.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--illustration-green-soft))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id={`paint15-linear-${id}`} x1="390.5" y1="279" x2="391" y2="357" gradientUnits="userSpaceOnUse">
          <stop stopColor="hsl(var(--illustration-green-soft))"/>
          <stop offset="1" stopColor="hsl(var(--brand-white))" stopOpacity="0"/>
        </linearGradient>
        <radialGradient id={`paint16-radial-${id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(350.984 278.155) rotate(-90) scale(14.8661 13.8267)">
          <stop stopColor="hsl(var(--illustration-yellow))"/>
          <stop offset="0.1" stopColor="hsl(var(--illustration-yellow))"/>
          <stop offset="0.5" stopColor="hsl(var(--illustration-orange))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-pink))"/>
        </radialGradient>
        <radialGradient id={`paint17-radial-${id}`} cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(344.487 263.081) rotate(78.681) scale(6.64523 27.3919)">
          <stop stopColor="hsl(var(--illustration-blue))"/>
          <stop offset="0.128" stopColor="hsl(var(--illustration-blue))"/>
          <stop offset="1" stopColor="hsl(var(--illustration-purple))" stopOpacity="0"/>
        </radialGradient>

        {/* CLIP PATHS */}
        <clipPath id={`clip0-${id}`}>
          <rect width="531" height="392" rx="14" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip1-${id}`}>
          <rect x="20" y="-1" width="160" height="373" rx="18" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip2-${id}`}>
          <rect x="35" y="96" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip3-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(47 106)"/>
        </clipPath>
        <clipPath id={`clip4-${id}`}>
          <rect x="35" y="141" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip5-${id}`}>
          <rect x="35" y="186" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip6-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(47 197)"/>
        </clipPath>
        <clipPath id={`clip7-${id}`}>
          <rect x="35" y="231" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip8-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(47 241)"/>
        </clipPath>
        <clipPath id={`clip9-${id}`}>
          <rect x="35" y="276" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip10-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(47 286)"/>
        </clipPath>
        <clipPath id={`clip11-${id}`}>
          <rect x="35" y="321" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
        </clipPath>
        <clipPath id={`clip12-${id}`}>
          <rect width="16" height="11" fill="hsl(var(--brand-white))" transform="translate(47 334)"/>
        </clipPath>
        <clipPath id={`clip13-${id}`}>
          <rect width="14" height="14" fill="hsl(var(--brand-white))" transform="translate(471 71)"/>
        </clipPath>
        <clipPath id={`clip14-${id}`}>
          <rect width="51" height="51" fill="hsl(var(--brand-white))" transform="translate(362 303)"/>
        </clipPath>
        <clipPath id={`clip15-${id}`}>
          <rect width="16" height="11" fill="hsl(var(--brand-white))" transform="translate(380 234)"/>
        </clipPath>
        <clipPath id={`clip16-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(379 274)"/>
        </clipPath>
        <clipPath id={`clip17-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(413 260)"/>
        </clipPath>
        <clipPath id={`clip18-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(334 300)"/>
        </clipPath>
        <clipPath id={`clip19-${id}`}>
          <rect width="15" height="15" fill="hsl(var(--brand-white))" transform="translate(347 262)"/>
        </clipPath>
      </defs>

      <g clipPath={`url(#clip0-${id})`}>
        <rect width="531" height="392" rx="14" fill="hsl(var(--brand-white))"/>
        <g clipPath={`url(#clip1-${id})`}>
          <rect x="20" y="-1" width="160" height="373" rx="18" fill={`url(#paint0-linear-${id})`}/>
          <rect x="30" y="34" width="130" height="10" rx="5" fill="hsl(var(--brand-200))"/>
          <rect x="30" y="50" width="88" height="7" rx="3.5" fill="hsl(var(--brand-200))"/>
          <path d="{{SVG_WORKLOAD_PATH_ID_0}}" fill={`url(#paint1-linear-${id})`}/>
          <g filter={`url(#filter0-dddd-${id})`}>
            <g clipPath={`url(#clip2-${id})`}>
              <rect x="35" y="96" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
              <path d="{{SVG_WORKLOAD_PATH_ID_1}}" fill="hsl(var(--illustration-gray-text))"/>
              <g filter={`url(#filter1-ddddd-${id})`}>
                <circle cx="55" cy="114" r="13" fill="hsl(var(--brand-white))"/>
              </g>
              <g clipPath={`url(#clip3-${id})`}>
                <path d="{{SVG_WORKLOAD_PATH_ID_2}}" fill={`url(#paint2-radial-${id})`}/>
                <path d="{{SVG_WORKLOAD_PATH_ID_3}}" fill={`url(#paint3-radial-${id})`}/>
                <path d="{{SVG_WORKLOAD_PATH_ID_4}}" fill="hsl(var(--brand-white))"/>
              </g>
            </g>
            <rect x="35.5" y="96.5" width="128" height="36" rx="18" stroke="hsl(var(--brand-300))"/>
          </g>
          <g filter={`url(#filter2-dddd-${id})`}>
            <g clipPath={`url(#clip4-${id})`}>
              <rect x="35" y="141" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
              <path d="{{SVG_WORKLOAD_PATH_ID_5}}" fill="hsl(var(--illustration-gray-text))"/>
              <g filter={`url(#filter3-ddddd-${id})`}>
                <circle cx="55" cy="159" r="13" fill="hsl(var(--brand-white))"/>
              </g>
              <path d="{{SVG_WORKLOAD_PATH_ID_6}}" fill="currentColor"/>
            </g>
            <rect x="35.5" y="141.5" width="128" height="36" rx="18" stroke="hsl(var(--brand-300))"/>
          </g>
          <g filter={`url(#filter4-dddd-${id})`}>
            <g clipPath={`url(#clip5-${id})`}>
              <rect x="35" y="186" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
              <path d="{{SVG_WORKLOAD_PATH_ID_7}}" fill="hsl(var(--illustration-gray-text))"/>
              <g filter={`url(#filter5-ddddd-${id})`}>
                <circle cx="55" cy="204" r="13" fill="hsl(var(--brand-white))"/>
              </g>
              <g clipPath={`url(#clip6-${id})`}>
                <path d="{{SVG_WORKLOAD_PATH_ID_8}}" fill="currentColor"/>
              </g>
            </g>
            <rect x="35.5" y="186.5" width="128" height="36" rx="18" stroke="hsl(var(--brand-300))"/>
          </g>
          <g filter={`url(#filter6-dddd-${id})`}>
            <g clipPath={`url(#clip7-${id})`}>
              <rect x="35" y="231" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
              <path d="{{SVG_WORKLOAD_PATH_ID_9}}" fill="hsl(var(--illustration-gray-text))"/>
              <g filter={`url(#filter7-ddddd-${id})`}>
                <circle cx="55" cy="249" r="13" fill="hsl(var(--brand-white))"/>
              </g>
              <g clipPath={`url(#clip8-${id})`}>
                <path d="{{SVG_WORKLOAD_PATH_ID_10}}" fill="hsl(var(--illustration-brand-red))"/>
              </g>
            </g>
            <rect x="35.5" y="231.5" width="128" height="36" rx="18" stroke="hsl(var(--brand-300))"/>
          </g>
          <g filter={`url(#filter8-dddd-${id})`}>
            <g clipPath={`url(#clip9-${id})`}>
              <rect x="35" y="276" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
              <path d="{{SVG_WORKLOAD_PATH_ID_11}}" fill="hsl(var(--illustration-gray-text))"/>
              <g filter={`url(#filter9-ddddd-${id})`}>
                <circle cx="55" cy="294" r="13" fill="hsl(var(--brand-white))"/>
              </g>
              <g clipPath={`url(#clip10-${id})`}>
                <path fillRule="evenodd" clipRule="evenodd" d="{{SVG_WORKLOAD_PATH_ID_12}}" fill="hsl(var(--illustration-slate-dark))"/>
              </g>
            </g>
            <rect x="35.5" y="276.5" width="128" height="36" rx="18" stroke="hsl(var(--brand-300))"/>
          </g>
          <g filter={`url(#filter10-dddd-${id})`}>
            <g clipPath={`url(#clip11-${id})`}>
              <rect x="35" y="321" width="129" height="37" rx="18.5" fill="hsl(var(--brand-white))"/>
              <path d="{{SVG_WORKLOAD_PATH_ID_13}}" fill="hsl(var(--illustration-gray-text))"/>
              <g filter={`url(#filter11-ddddd-${id})`}>
                <circle cx="55" cy="339" r="13" fill="hsl(var(--brand-white))"/>
              </g>
              <g clipPath={`url(#clip12-${id})`}>
                <path d="{{SVG_WORKLOAD_PATH_ID_14}}" fill="hsl(var(--illustration-red-pure))"/>
                <path d="{{SVG_WORKLOAD_PATH_ID_15}}" fill="hsl(var(--brand-white))"/>
              </g>
            </g>
            <rect x="35.5" y="321.5" width="128" height="36" rx="18" stroke="hsl(var(--brand-300))"/>
          </g>
        </g>
        <rect x="20.5" y="-0.5" width="159" height="372" rx="17.5" stroke={`url(#paint4-linear-${id})`}/>
        <rect x="22" y="-19" width="158" height="89" fill={`url(#paint5-linear-${id})`}/>
        <g filter={`url(#filter12-f-${id})`}>
          <path d="{{SVG_WORKLOAD_PATH_ID_16}}" stroke={`url(#paint6-linear-${id})`} strokeWidth="2"/>
        </g>
        <g style={{ mixBlendMode: 'darken' }}>
          <path d="{{SVG_WORKLOAD_PATH_ID_17}}" stroke={`url(#paint7-linear-${id})`}/>
        </g>
        <g filter={`url(#filter13-f-${id})`}>
          <path d="{{SVG_WORKLOAD_PATH_ID_18}}" stroke={`url(#paint8-linear-${id})`} strokeWidth="2"/>
        </g>
        <path d="{{SVG_WORKLOAD_PATH_ID_19}}" stroke={`url(#paint9-linear-${id})`} strokeWidth="2"/>
        <g filter={`url(#filter14-dddd-${id})`}>
          <rect x="271" y="21" width="233" height="157" rx="18" fill={`url(#paint10-linear-${id})`}/>
          <rect x="271.5" y="21.5" width="232" height="156" rx="17.5" stroke={`url(#paint11-linear-${id})`} strokeOpacity="0.36"/>
          <path d="{{SVG_WORKLOAD_PATH_ID_20}}" fill="hsl(var(--illustration-moss-dark))"/>
          <g filter={`url(#filter15-d-${id})`}>
            <rect x="455" y="33" width="35" height="17" rx="8.5" fill="hsl(var(--brand-white))"/>
            <rect x="455.5" y="33.5" width="34" height="16" rx="8" stroke="hsl(var(--illustration-white-off))"/>
          </g>
          <circle cx="481.5" cy="41.5" r="6.5" fill="hsl(var(--brand-800))"/>
          <rect x="281.5" y="64.5" width="105" height="27" rx="4.5" fill="hsl(var(--brand-white))"/>
          <rect x="281.5" y="64.5" width="105" height="27" rx="4.5" stroke="hsl(var(--illustration-border-light))"/>
          <path d="{{SVG_WORKLOAD_PATH_ID_21}}" fill="hsl(var(--illustration-gray-medium))"/>
          <path d="{{SVG_WORKLOAD_PATH_ID_22}}" fill="hsl(var(--illustration-moss-medium))"/>
          <rect x="398.5" y="64.5" width="91" height="27" rx="4.5" fill="hsl(var(--brand-white))"/>
          <rect x="398.5" y="64.5" width="91" height="27" rx="4.5" stroke="hsl(var(--illustration-border-light))"/>
          <path d="{{SVG_WORKLOAD_PATH_ID_23}}" fill="hsl(var(--illustration-gray-medium))"/>
          <g clipPath={`url(#clip13-${id})`}>
            <path d="{{SVG_WORKLOAD_PATH_ID_24}}" stroke="hsl(var(--illustration-moss-medium))" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="{{SVG_WORKLOAD_PATH_ID_25}}" stroke="hsl(var(--illustration-moss-medium))" strokeLinecap="round" strokeLinejoin="round"/>
          </g>
          <g filter={`url(#filter16-ii-${id})`}>
            <rect x="316" y="106" width="143" height="37" rx="18.5" fill="hsl(var(--brand-800))"/>
            <path d="{{SVG_WORKLOAD_PATH_ID_26}}" fill="hsl(var(--brand-white))"/>
          </g>
          <path d="{{SVG_WORKLOAD_PATH_ID_27}}" fill={`url(#paint12-linear-${id})`}/>
        </g>
        <circle cx="388" cy="338" r="97.5" stroke={`url(#paint13-linear-${id})`}/>
        <circle cx="390.5" cy="337.5" r="76" stroke={`url(#paint14-linear-${id})`}/>
        <circle cx="390.5" cy="337.5" r="58" stroke={`url(#paint15-linear-${id})`}/>
        <path d="{{SVG_WORKLOAD_PATH_ID_28}}" fill="hsl(var(--illustration-green-medium))"/>
        <g clipPath={`url(#clip14-${id})`}>
          <path fillRule="evenodd" clipRule="evenodd" d="{{SVG_WORKLOAD_PATH_ID_29}}" fill="hsl(var(--brand-800))" fillOpacity="0.24"/>
        </g>
        <g clipPath={`url(#clip15-${id})`}>
          <path d="{{SVG_WORKLOAD_PATH_ID_30}}" fill="hsl(var(--illustration-red-pure))"/>
          <path d="{{SVG_WORKLOAD_PATH_ID_31}}" fill="hsl(var(--brand-white))"/>
        </g>
        <g clipPath={`url(#clip16-${id})`}>
          <path fillRule="evenodd" clipRule="evenodd" d="{{SVG_WORKLOAD_PATH_ID_32}}" fill="hsl(var(--illustration-slate-dark))"/>
        </g>
        <g clipPath={`url(#clip17-${id})`}>
          <path d="{{SVG_WORKLOAD_PATH_ID_33}}" fill="hsl(var(--illustration-brand-red))"/>
        </g>
        <g clipPath={`url(#clip18-${id})`}>
          <path d="{{SVG_WORKLOAD_PATH_ID_34}}" fill="currentColor"/>
        </g>
        <path d="{{SVG_WORKLOAD_PATH_ID_35}}" fill="currentColor"/>
        <g clipPath={`url(#clip19-${id})`}>
          <path d="{{SVG_WORKLOAD_PATH_ID_36}}" fill={`url(#paint16-radial-${id})`}/>
          <path d="{{SVG_WORKLOAD_PATH_ID_37}}" fill={`url(#paint17-radial-${id})`}/>
          <path d="{{SVG_WORKLOAD_PATH_ID_38}}" fill="hsl(var(--brand-white))"/>
        </g>
      </g>
    </svg>
  )
}