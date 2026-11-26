import React from 'react';

// Profile "h" Icon exactly matching image
export const ProfileAppIcon = ({ className = "w-16 h-16" }) => (
  <svg viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect x="3" y="3" width="66" height="66" rx="18" fill="#58634f" stroke="#2c3327" strokeWidth="4" />
    <rect x="8" y="8" width="56" height="56" rx="14" fill="none" stroke="#e7ebd4" strokeWidth="2" strokeDasharray="4 4" opacity="0.85" />
    <path
      d="M26 22V50M26 35.5C28.5 31.5 33 29.5 38 29.5C44 29.5 47 33.5 47 40V50"
      stroke="#ffffff"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// Retro Folder Icon exactly matching image
export const RetroFolderIcon = ({ className = "w-16 h-14" }) => (
  <svg viewBox="0 0 84 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path
      d="M5 20C5 15.5817 8.58172 12 13 12H30C33.5 12 36 15 39 18L44 22H71C75.4183 22 79 25.5817 79 30V56C79 60.4183 75.4183 64 71 64H13C8.58172 64 5 60.4183 5 56V20Z"
      fill="#e3bc49"
      stroke="#2c3327"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <rect x="18" y="8" width="46" height="24" rx="3" fill="#ffffff" stroke="#2c3327" strokeWidth="3" />
    <rect x="22" y="14" width="22" height="6" rx="1.5" fill="#6bb7e9" stroke="#2c3327" strokeWidth="1.5" />
    <path
      d="M5 28C5 24 8 22 13 22H71C76 22 79 25 79 29L75 58C75 62 71 65 67 65H13C8.5 65 5 62 5 58V28Z"
      fill="#f6d365"
      stroke="#2c3327"
      strokeWidth="3.5"
      strokeLinejoin="round"
    />
    <rect x="15" y="34" width="22" height="11" rx="2" fill="#6bb7e9" stroke="#2c3327" strokeWidth="2.5" />
    <line x1="43" y1="39" x2="68" y2="39" stroke="#dfb43d" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

// Social Media Icons
export const LinkedInIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="44" height="44" rx="12" fill="#0077B5" stroke="#1d2b38" strokeWidth="2.5" />
    <path d="M14 18V32M14 12V13M22 32V23.5C22 20 24.5 18 28 18C31.5 18 33 20.5 33 24.5V32M22 18V32" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export const GitHubIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="44" height="44" rx="12" fill="#24292E" stroke="#101418" strokeWidth="2.5" />
    <path fillRule="evenodd" clipRule="evenodd" d="M22 10C15.37 10 10 15.37 10 22C10 27.31 13.44 31.81 18.21 33.39C18.81 33.5 19.03 33.13 19.03 32.81C19.03 32.53 19.02 31.62 19.01 30.61C15.67 31.33 14.97 29.17 14.97 29.17C14.42 27.79 13.64 27.42 13.64 27.42C12.55 26.68 13.73 26.7 13.73 26.7C14.93 26.78 15.57 27.93 15.57 27.93C16.64 29.76 18.37 29.23 19.05 28.92C19.16 28.14 19.47 27.62 19.82 27.31C17.16 27.01 14.36 25.98 14.36 21.39C14.36 20.08 14.83 19.01 15.6 18.17C15.47 17.86 15.07 16.64 15.72 14.99C15.72 14.99 16.73 14.67 19.01 16.22C19.97 15.95 20.99 15.82 22 15.81C23.01 15.82 24.03 15.95 24.99 16.22C27.27 14.67 28.28 14.99 28.28 14.99C28.93 16.64 28.53 17.86 28.4 18.17C29.18 19.01 29.64 20.08 29.64 21.39C29.64 25.99 26.83 27.01 24.16 27.3C24.6 27.68 25 28.43 25 29.58C25 31.23 24.98 32.55 24.98 32.81C24.98 33.13 25.2 33.51 25.8 33.39C30.56 31.8 34 27.31 34 22C34 15.37 28.63 10 22 10Z" fill="white"/>
  </svg>
);

export const LeetCodeIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="44" height="44" rx="12" fill="#282828" stroke="#101418" strokeWidth="2.5" />
    <path d="M26 13L18 20.5C16.8 21.5 16.8 23.5 18 24.5L26 31" stroke="#FFA116" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 22.5H32" stroke="white" strokeWidth="3.2" strokeLinecap="round"/>
    <path d="M24.5 15L30 20" stroke="#B0B0B0" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const InstagramIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="44" height="44" rx="12" fill="url(#ig-grad)" stroke="#1d2019" strokeWidth="2.5" />
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#f09433"/>
        <stop offset="25%" stopColor="#e6683c"/>
        <stop offset="50%" stopColor="#dc2743"/>
        <stop offset="75%" stopColor="#cc2366"/>
        <stop offset="100%" stopColor="#bc1888"/>
      </linearGradient>
    </defs>
    <rect x="12" y="12" width="20" height="20" rx="6" stroke="white" strokeWidth="2.8" />
    <circle cx="22" cy="22" r="4.8" stroke="white" strokeWidth="2.8" />
    <circle cx="27.5" cy="16.5" r="1.3" fill="white" />
  </svg>
);

export const WhatsAppIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="44" height="44" rx="12" fill="#25D366" stroke="#12592a" strokeWidth="2.5" />
    <path
      d="M22 11C16.48 11 12 15.48 12 21C12 22.86 12.52 24.6 13.42 26.1L12.5 32.5L19.12 31.6C20.02 32.22 21 32.5 22 32.5C27.52 32.5 32 28.02 32 22.5C32 16.98 27.52 11 22 11Z"
      fill="white"
      stroke="#12592a"
      strokeWidth="1.5"
    />
    <path
      d="M18.5 16.8C18.2 16 17.8 16 17.4 16C17 16 16.6 16.2 16.4 16.5C16.1 16.8 15.3 17.6 15.3 19.2C15.3 20.8 16.5 22.3 16.7 22.5C16.9 22.7 19.2 26.3 22.6 27.8C25.5 29 26.1 28.8 26.7 28.7C27.3 28.6 28.7 27.8 29 26.9C29.3 26 29.3 25.2 29.2 25C29.1 24.8 28.8 24.7 28.3 24.5C27.8 24.2 25.6 23.1 25.2 23C24.8 22.8 24.5 22.7 24.2 23.2C23.9 23.7 23.1 24.7 22.8 25C22.6 25.2 22.3 25.3 21.9 25C21.4 24.8 20.1 24.3 18.5 22.9C17.3 21.8 16.5 20.5 16.2 20.1C16 19.7 16.2 19.4 16.4 19.2C16.6 19 16.9 18.7 17.1 18.4C17.3 18.2 17.4 18 17.5 17.7C17.6 17.4 17.6 17.2 17.4 17C17.3 16.8 18.8 17.6 18.5 16.8Z"
      fill="#25D366"
    />
  </svg>
);

export const EmailIcon = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <rect width="44" height="44" rx="12" fill="#EA4335" stroke="#7e1a12" strokeWidth="2.5" />
    <rect x="11" y="14" width="22" height="16" rx="3" fill="white" stroke="#7e1a12" strokeWidth="1.5" />
    <path d="M12 15L22 22.5L32 15" stroke="#EA4335" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// ==========================================
// 1. CORE TECH STACK & FRAMEWORKS
// ==========================================

export const ToolIconJavaScript = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="32" height="32" rx="8" fill="#F7DF1E" stroke="#2c3327" strokeWidth="2" />
    <text x="26" y="27" textAnchor="middle" fill="#000" fontFamily="sans-serif" fontSize="13" fontWeight="bold">JS</text>
  </svg>
);

export const ToolIconTypeScript = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="32" height="32" rx="8" fill="#3178C6" stroke="#2c3327" strokeWidth="2" />
    <text x="20" y="26" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontSize="14" fontWeight="bold">TS</text>
  </svg>
);

export const ToolIconReact = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#20232A" stroke="#2c3327" strokeWidth="2" />
    <ellipse cx="20" cy="20" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="11" ry="4.5" transform="rotate(60 20 20)" stroke="#61DAFB" strokeWidth="1.5" />
    <ellipse cx="20" cy="20" rx="11" ry="4.5" transform="rotate(120 20 20)" stroke="#61DAFB" strokeWidth="1.5" />
    <circle cx="20" cy="20" r="2.2" fill="#61DAFB" />
  </svg>
);

export const ToolIconNodeJS = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#182318" stroke="#2c3327" strokeWidth="2" />
    <path d="M20 9L29 14.2V24.8L20 30L11 24.8V14.2L20 9Z" fill="#339933" stroke="#2c3327" strokeWidth="1.5"/>
    <text x="20" y="23" textAnchor="middle" fill="white" fontFamily="sans-serif" fontSize="9" fontWeight="bold">node</text>
  </svg>
);

export const ToolIconExpress = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="32" height="32" rx="8" fill="#202020" stroke="#2c3327" strokeWidth="2" />
    <text x="20" y="25" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontSize="11" fontWeight="bold">ex</text>
  </svg>
);

export const ToolIconMongoDB = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#eaf7ee" stroke="#2c3327" strokeWidth="2" />
    <path d="M20 8C20 8 13 14 13 21C13 26 17 29 20 32C23 29 27 26 27 21C27 14 20 8 20 8Z" fill="#47A248" stroke="#2c3327" strokeWidth="1.5"/>
    <line x1="20" y1="12" x2="20" y2="28" stroke="#2c3327" strokeWidth="1.5"/>
  </svg>
);

export const ToolIconSQL = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#e8f2f8" stroke="#2c3327" strokeWidth="2" />
    <ellipse cx="20" cy="14" rx="8" ry="3" fill="#00758F" stroke="#2c3327" strokeWidth="1.5"/>
    <path d="M12 14V26C12 27.6 15.6 29 20 29C24.4 29 28 27.6 28 26V14" stroke="#2c3327" strokeWidth="1.5" fill="none"/>
    <path d="M12 20C12 21.6 15.6 23 20 23C24.4 23 28 21.6 28 20" stroke="#2c3327" strokeWidth="1.5"/>
  </svg>
);

export const ToolIconFlutter = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#e8f5fb" stroke="#2c3327" strokeWidth="2" />
    <path d="M23 10L14 19L17 22L29 10H23Z" fill="#02569B"/>
    <path d="M23 24L17 30H23L27 26L23 24Z" fill="#0175C2"/>
    <path d="M19 24L16 27L20 31H26L19 24Z" fill="#29B6F6"/>
  </svg>
);

export const ToolIconRestAPI = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="32" height="32" rx="8" fill="#4B5563" stroke="#2c3327" strokeWidth="2" />
    <text x="20" y="24" textAnchor="middle" fill="#67E8F9" fontFamily="monospace" fontSize="9" fontWeight="bold">REST</text>
    <text x="20" y="32" textAnchor="middle" fill="#fff" fontFamily="monospace" fontSize="8" fontWeight="bold">API</text>
  </svg>
);

export const ToolIconTailwind = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#eefcff" stroke="#2c3327" strokeWidth="2" />
    <path d="M20 16C18 16 16.5 17 15.5 19C16.5 18 17.5 17.5 18.5 17.5C19.7 17.5 20.3 18.3 21 19.3C22.1 20.9 23.5 23 26.5 23C28.5 23 30 22 31 20C30 21 29 21.5 28 21.5C26.8 21.5 26.2 20.7 25.5 19.7C24.4 18.1 23 16 20 16ZM13.5 21C11.5 21 10 22 9 24C10 23 11 22.5 12 22.5C13.2 22.5 13.8 23.3 14.5 24.3C15.6 25.9 17 28 20 28C22 28 23.5 27 24.5 25C23.5 26 22.5 26.5 21.5 26.5C20.3 26.5 19.7 25.7 19 24.7C17.9 23.1 16.5 21 13.5 21Z" fill="#38BDF8"/>
  </svg>
);

export const ToolIconMUI = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#eef5fc" stroke="#2c3327" strokeWidth="2" />
    <path d="M12 14L20 9L28 14V24L20 29L12 24V14Z" fill="#007FFF" stroke="#2c3327" strokeWidth="1.5"/>
    <text x="20" y="22" textAnchor="middle" fill="#fff" fontFamily="sans-serif" fontSize="8" fontWeight="bold">MUI</text>
  </svg>
);

export const ToolIconGSAP = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <rect x="4" y="4" width="32" height="32" rx="8" fill="#0ae448" stroke="#2c3327" strokeWidth="2" />
    <text x="20" y="25" textAnchor="middle" fill="#000" fontFamily="sans-serif" fontSize="10" fontWeight="bold">GSAP</text>
  </svg>
);

// ==========================================
// 2. SOFTWARE & DEV TOOLS
// ==========================================

export const ToolIconVSCode = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#eef7fc" stroke="#2c3327" strokeWidth="2" />
    <path d="M28 11L21 16.5L16 12.5L12 15.5L15.5 20L12 24.5L16 27.5L21 23.5L28 29V11Z" fill="#007ACC" />
    <path d="M28 11L21 16.5V23.5L28 29V11Z" fill="#1F8AD2" />
    <path d="M28 29L21 23.5L16 27.5L12 24.5V15.5L16 12.5L21 16.5L28 11" stroke="#0065A9" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const ToolIconGitHubBadge = () => (
  <div className="w-10 h-10 flex items-center justify-center bg-[#24292e] rounded-full border-2 border-[#2c3327]">
    <GitHubIcon className="w-6 h-6" />
  </div>
);

export const ToolIconFirebase = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#fff9ec" stroke="#2c3327" strokeWidth="2" />
    <path d="M12.5 27L14.5 13.5L18.5 20L12.5 27Z" fill="#FFA000"/>
    <path d="M27.5 27L22 17.5L18.5 20L27.5 27Z" fill="#F57C00"/>
    <path d="M20 9L18.5 20L22 17.5L20 9Z" fill="#FFCA28"/>
    <path d="M12.5 27L20 31L27.5 27L22 17.5L18.5 20L14.5 13.5L12.5 27Z" stroke="#2c3327" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);

export const ToolIconAndroidStudio = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#eaf7ed" stroke="#2c3327" strokeWidth="2" />
    <path d="M14 20C14 16.6863 16.6863 14 20 14C23.3137 14 26 16.6863 26 20H14Z" fill="#3DDC84" stroke="#2c3327" strokeWidth="1.8"/>
    <circle cx="17.5" cy="18" r="1.2" fill="#2c3327"/>
    <circle cx="22.5" cy="18" r="1.2" fill="#2c3327"/>
    <line x1="16" y1="14" x2="14" y2="11.5" stroke="#3DDC84" strokeWidth="1.8" strokeLinecap="round"/>
    <line x1="24" y1="14" x2="26" y2="11.5" stroke="#3DDC84" strokeWidth="1.8" strokeLinecap="round"/>
    <circle cx="20" cy="25" r="3.5" fill="#4285F4" stroke="#2c3327" strokeWidth="1.5"/>
  </svg>
);

export const ToolIconVercel = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#18181b" stroke="#2c3327" strokeWidth="2" />
    <path d="M20 12L28 26H12L20 12Z" fill="white" stroke="#2c3327" strokeWidth="1.2" />
  </svg>
);

export const ToolIconRender = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#e8f8f5" stroke="#2c3327" strokeWidth="2" />
    <path d="M14 13H22C24.2 13 26 14.8 26 17C26 19.2 24.2 21 22 21H17V27H14V13Z" fill="#00D2B4" stroke="#2c3327" strokeWidth="1.5" />
    <path d="M21 21L26 27H22L18 21H21Z" fill="#008F7A" stroke="#2c3327" strokeWidth="1.5" />
  </svg>
);

export const ToolIconPostman = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#FF6C37" stroke="#2c3327" strokeWidth="2" />
    <circle cx="20" cy="18" r="5" fill="white" stroke="#2c3327" strokeWidth="1.5"/>
    <path d="M14 26C14 23 17 21 20 21C23 21 26 23 26 26" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M17 14L15 11M23 14L25 11" stroke="white" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ToolIconThunderClient = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#1e222d" stroke="#2c3327" strokeWidth="2" />
    <path d="M22 10L13 22H20L18 30L27 18H20L22 10Z" fill="#7C3AED" stroke="#C4B5FD" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);

export const ToolIconPlaywright = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#2EAD4A" stroke="#2c3327" strokeWidth="2" />
    <ellipse cx="17" cy="18" rx="5" ry="7" fill="#E65337" stroke="#2c3327" strokeWidth="1.5"/>
    <ellipse cx="23" cy="22" rx="5" ry="7" fill="#2EAD4A" stroke="#2c3327" strokeWidth="1.5"/>
    <circle cx="16" cy="17" r="1.2" fill="white"/>
    <circle cx="24" cy="21" r="1.2" fill="white"/>
    <path d="M15 21C16 22 18 22 19 21" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
    <path d="M22 25C23 26 25 26 26 25" stroke="white" strokeWidth="1.2" strokeLinecap="round"/>
  </svg>
);

// ==========================================
// 3. DESIGNING TOOLS
// ==========================================

export const ToolIconFigma = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#fdf4f4" stroke="#2c3327" strokeWidth="2" />
    <g transform="translate(13, 9) scale(0.65)">
      <path d="M0 3.75C0 1.67893 1.67893 0 3.75 0H11.25V7.5H3.75C1.67893 7.5 0 5.82107 0 3.75Z" fill="#F24E1E"/>
      <path d="M11.25 0H18.75C20.8211 0 22.5 1.67893 22.5 3.75C22.5 5.82107 20.8211 7.5 18.75 7.5H11.25V0Z" fill="#FF7262"/>
      <path d="M0 11.25C0 9.17893 1.67893 7.5 3.75 7.5H11.25V15H3.75C1.67893 15 0 13.3211 0 11.25Z" fill="#A259FF"/>
      <circle cx="15" cy="11.25" r="3.75" fill="#1ABCFE"/>
      <path d="M0 18.75C0 16.6789 1.67893 15 3.75 15H7.5C9.57107 15 11.25 16.6789 11.25 18.75C11.25 20.8211 9.57107 22.5 7.5 22.5C5.42893 22.5 3.75 20.8211 3.75 18.75H0Z" fill="#0ACF83"/>
    </g>
  </svg>
);

export const ToolIconFramer = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#141414" stroke="#2c3327" strokeWidth="2" />
    <path d="M14 12H26V18H20L26 24H20V28L14 22H20V18H14V12Z" fill="#0055FF" stroke="white" strokeWidth="1.2" strokeLinejoin="round"/>
  </svg>
);

export const ToolIconCanva = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#00C4CC" stroke="#2c3327" strokeWidth="2" />
    <text x="20" y="24" textAnchor="middle" fill="white" fontFamily="cursive, 'Brush Script MT', sans-serif" fontSize="13" fontStyle="italic" fontWeight="bold">Canva</text>
  </svg>
);

export const ToolIconStitch = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#fff5ea" stroke="#2c3327" strokeWidth="2" />
    <path d="M24 14C24 14 16 13 16 18C16 23 24 21 24 26C24 30 16 29 16 29" stroke="#E05638" strokeWidth="3" strokeLinecap="round"/>
    <line x1="14" y1="20" x2="26" y2="20" stroke="#5c6753" strokeWidth="1.5" strokeDasharray="2 2"/>
  </svg>
);

// ==========================================
// 4. AI TOOLS
// ==========================================

export const ToolIconAntigravity = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#1e241c" stroke="#2c3327" strokeWidth="2" />
    <path d="M20 10L28 20L20 30L12 20L20 10Z" fill="#76856c" stroke="#d2d8cb" strokeWidth="1.8"/>
    <circle cx="20" cy="20" r="3" fill="#f4cf65" stroke="#2c3327" strokeWidth="1"/>
  </svg>
);

export const ToolIconClaude = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#f5ede3" stroke="#2c3327" strokeWidth="2" />
    <g transform="translate(14, 14)">
      <path d="M6 0L8 4L12 6L8 8L6 12L4 8L0 6L4 4L6 0Z" fill="#D97706" stroke="#2c3327" strokeWidth="1.2"/>
    </g>
  </svg>
);

export const ToolIconChatGPT = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#10A37F" stroke="#2c3327" strokeWidth="2" />
    <circle cx="20" cy="20" r="7" fill="none" stroke="white" strokeWidth="2.5" strokeDasharray="3 3"/>
    <circle cx="20" cy="20" r="2.5" fill="white"/>
  </svg>
);

export const ToolIconGemini = () => (
  <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
    <circle cx="20" cy="20" r="18" fill="#1a1c29" stroke="#2c3327" strokeWidth="2" />
    <path d="M20 10C20 15 25 20 30 20C25 20 20 25 20 30C20 25 15 20 10 20C15 20 20 15 20 10Z" fill="url(#gemini-grad)" stroke="#2c3327" strokeWidth="1"/>
    <defs>
      <linearGradient id="gemini-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4E8BF5"/>
        <stop offset="50%" stopColor="#9B72CF"/>
        <stop offset="100%" stopColor="#D96570"/>
      </linearGradient>
    </defs>
  </svg>
);
