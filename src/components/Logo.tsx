import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = 'w-[132px] min-[360px]:w-[142px] sm:w-[155px] lg:w-[175px] h-auto',
  variant = 'light',
  showText = true,
}) => {
  const [imageFailed, setImageFailed] = useState(false);

  // User uploaded logo URLs from the Stitch specification
  const lightLogoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1WRptootwv8iBWjQoE3xf2wLSDi-Ul2XFvCFHEizWiIAcQxG4zRr1Waor1o530FNgHy60Frx8ixw_wZF38upnlROPKbLw5fR4fOYCDz-jDVoRlIWXx_KCBixGruyaNwCuESmcQ0P-31KY58gUpUdnBFwB3JwnRiHAzJEVB3iUhtFAIOn4yM7O6kvdNPRERPvIR-MaFbYi-WNcLCyyDSLAFlIbNYU6TILzwTGhKnUyUI3wAJp7kOtAp8r34';
  
  const darkLogoUrl =
    'https://lh3.googleusercontent.com/aida/AEtjO1UcW-HlgTJ9bWI-6f-2Ey3doawzSWHk6MHT24Q7yEanT6yrdxQ4ywvguDD95yMxmtSSMgPn25SYOR4gc1siI1j1DdImp6gQdXbm2vjI7EKXIVy__aHVmQoaJCv_1SJvEJb6ouB3BaNw67NC5D5vr3WKBz1cbgHR8vx6HWyEF4PatSI3-uFo2jJWocQaI8SkccoMC6Vz9iaX_K7gWe4-dCGzio2T9Uh8GwDNSpq3HU_nC5sqdZ99JCgcgu0';

  const logoSrc = variant === 'dark' ? darkLogoUrl : lightLogoUrl;

  if (!imageFailed) {
    return (
      <div className="flex items-center">
        <img
          src={logoSrc}
          alt="Lone Star Roofing Co. | Austin, TX"
          className={`${className} object-contain`}
          referrerPolicy="no-referrer"
          onError={() => setImageFailed(true)}
        />
      </div>
    );
  }

  // Pixel-perfect SVG vector fallback matching Image 3 / Image 4 precisely
  const primaryTextColor = variant === 'dark' ? '#FFFFFF' : '#111827';
  const subtitleColor = variant === 'dark' ? '#9CA3AF' : '#4B5563';

  return (
    <div className="flex items-center gap-3 select-none">
      {/* Lone Star Roof Emblem */}
      <svg
        viewBox="0 0 54 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-9 w-auto shrink-0"
        aria-label="Lone Star Roofing Emblem"
      >
        {/* Five-point Texas Star on top apex */}
        <polygon
          points="27,1 29.5,8 37,8.2 31,12.8 33.2,20 27,15.5 20.8,20 23,12.8 17,8.2 24.5,8"
          fill={variant === 'dark' ? '#F3F4F6' : '#1F2937'}
        />
        {/* Outer Gable / Rafter (Texas Terracotta Red #B53A32) */}
        <path
          d="M6 34 L27 12 L48 34"
          stroke="#B53A32"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Inner Gable Roof Truss (Dark Slate / Charcoal) */}
        <path
          d="M14 34 L27 21 L40 34"
          stroke={variant === 'dark' ? '#9CA3AF' : '#1F2937'}
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Foundation / Center Standoff */}
        <rect
          x="25"
          y="37"
          width="4"
          height="7"
          rx="1"
          fill="#B53A32"
        />
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <div className="flex items-baseline gap-1.5">
            <span
              className="font-extrabold tracking-tight text-[18px] uppercase"
              style={{ color: primaryTextColor, fontFamily: 'Plus Jakarta Sans, sans-serif' }}
            >
              LONE STAR
            </span>
            <span
              className="text-[12px] font-medium tracking-wide uppercase"
              style={{ color: subtitleColor }}
            >
              | AUSTIN, TX
            </span>
          </div>
          <span
            className="text-[11px] font-bold tracking-[0.16em] uppercase mt-0.5"
            style={{ color: '#B53A32' }}
          >
            ROOFING CO.
          </span>
        </div>
      )}
    </div>
  );
};
