import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';

export const CERTIFICATES_DATA = {
  gomath: {
    id: 'gomath',
    company: 'GOMATH TECHNOLOGIES',
    role: 'Software Developer',
    period: '03/2026 - Present',
    location: 'Erode, India',
    type: 'Experience Credential',
    badgeText: 'FULL-TIME ROLE',
    certId: 'GT-DEV-2026-033',
    issueDate: 'March 2026',
    issuedTo: 'Dinesh Kumar',
    bulletPoints: [
      'Contributed to the development of enterprise-level HRMS and mobility-based applications, leveraging the MERN Stack, PHP, Laravel, Filament, SQL, and Flutter to build scalable solutions and user-centric digital experiences in a real-time production environment.',
      'Built interactive dashboards, data visualizations, and analytical reports, while contributing to SEO optimization and Digital Marketing initiatives to enhance website visibility and engagement.',
    ],
    skills: ['MERN Stack', 'PHP', 'Laravel', 'Filament', 'SQL', 'Flutter', 'HRMS', 'SEO'],
    status: 'ACTIVE & VERIFIED',
  },
  ethicsecur: {
    id: 'ethicsecur',
    company: 'ES ETHICSECUR SOFTEC',
    role: 'Full-Stack Developer Intern',
    period: '12/2025 - 03/2026',
    location: 'Salem, India',
    type: 'Internship Certificate',
    badgeText: 'INTERNSHIP',
    certId: 'ES-INT-2026-091',
    issueDate: 'March 2026',
    issuedTo: 'Dinesh Kumar',
    bulletPoints: [
      'Contributed to a real-time production project and led the company-side UI/UX redesign, developing scalable components using React.js with TypeScript, MUI, and Tailwind CSS.',
      'Designed interactive graphs and analytical dashboards, while supporting Digital Marketing (DM) initiatives and improving overall SEO performance.',
      'Collaborated with clients to gather requirements and improve frontend UX across 100% responsive interfaces.',
    ],
    skills: ['React.js', 'TypeScript', 'MUI', 'Tailwind CSS', 'UI/UX Redesign', 'Analytical Dashboards'],
    status: 'VERIFIED & COMPLETED',
  },
  cubeai: {
    id: 'cubeai',
    company: 'CubeAi Solutions Pvt Ltd',
    role: 'Web Developer Intern',
    period: 'Dec 2024 - Mar 2025',
    location: 'India',
    type: 'Internship Certificate',
    badgeText: 'INTERNSHIP',
    certId: 'CUBE-WEB-2025-114',
    issueDate: 'March 2025',
    issuedTo: 'Dinesh Kumar',
    bulletPoints: [
      'Worked on modern Full Stack Technologies including MERN stack and REST APIs.',
      'Architected responsive user interfaces and executed endpoint integration testing.',
    ],
    skills: ['MERN Stack', 'REST APIs', 'React.js', 'Node.js', 'Express.js', 'MongoDB'],
    status: 'VERIFIED & COMPLETED',
  },
  pinnacle: {
    id: 'pinnacle',
    company: 'Pinnacle Internship',
    role: 'Web Developer Intern',
    period: 'Mar 2025 - Apr 2025',
    location: 'Virtual / Remote',
    type: 'Virtual Internship',
    badgeText: 'VIRTUAL INTERN',
    certId: 'PINN-VINT-2025-042',
    issueDate: 'April 2025',
    issuedTo: 'Dinesh Kumar',
    bulletPoints: [
      'Completed a rigorous virtual internship focused on web development fundamentals, components, and project delivery.',
      'Engineered structured client-side modules adhering to industry standard styling patterns.',
    ],
    skills: ['Web Development', 'HTML5/CSS3', 'JavaScript', 'Responsive Design'],
    status: 'VERIFIED & COMPLETED',
  },
  nexlogic: {
    id: 'nexlogic',
    company: 'Nexlogic software Solutions',
    role: 'Web Developer Intern',
    period: 'Jul 2024 - Jul 2024',
    location: 'India',
    type: 'Internship Certificate',
    badgeText: 'INTERNSHIP',
    certId: 'NEX-SEC-2024-077',
    issueDate: 'July 2024',
    issuedTo: 'Dinesh Kumar',
    bulletPoints: [
      'Focused on web development fundamentals and threat detection.',
      'Studied foundational application security, defensive coding practices, and threat detection mechanisms.',
    ],
    skills: ['Web Development', 'Threat Detection', 'Web Security Basics', 'JavaScript'],
    status: 'VERIFIED & COMPLETED',
  },
};

export const CertificateWindow = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
  initialOffset,
  activeKey = 'gomath',
  onChangeKey,
}) => {
  const [selectedKey, setSelectedKey] = useState(activeKey || 'gomath');

  // Keep in sync with prop if changed from outside
  React.useEffect(() => {
    if (activeKey && CERTIFICATES_DATA[activeKey]) {
      setSelectedKey(activeKey);
    }
  }, [activeKey]);

  const cert = CERTIFICATES_DATA[selectedKey] || CERTIFICATES_DATA.gomath;

  const handleSelectTab = (key) => {
    playFolderClick();
    setSelectedKey(key);
    if (onChangeKey) onChangeKey(key);
  };

  const handlePrint = () => {
    playFolderClick();
    window.print();
  };

  return (
    <RetroWindow
      id="certificate"
      path={`C:\\DINESH\\certificates\\${selectedKey}.cert`}
      title={`Certificate - ${cert.company}`}
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
      maxWidth="max-w-4xl lg:max-w-5xl"
    >
      <div className="space-y-5">
        {/* Top Header & Certificate Selector Tabs */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-dashed border-[#d4cbba] pb-3">
          <div>
            <h2 className="font-mono text-lg sm:text-xl font-bold tracking-wider text-[#353c2f] uppercase flex items-center gap-2">
              <span>📜</span>
              <span>OFFICIAL EXPERIENCE CERTIFICATES</span>
            </h2>
            <p className="text-xs font-mono text-[#616858]">
              Verified internships and work experience credentials of Dinesh Kumar
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-[#f4cf65] hover:bg-[#ebbe46] text-[#2c3327] font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm flex items-center gap-1.5 transition-all cursor-pointer active:translate-y-0.5"
              title="Print or Save Certificate as PDF"
            >
              <span>🖨️ Print / Save PDF</span>
            </button>
          </div>
        </div>

        {/* 5 Company Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
          {Object.entries(CERTIFICATES_DATA).map(([key, item]) => {
            const isSelected = selectedKey === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleSelectTab(key)}
                className={`px-3 py-1.5 text-xs font-mono font-bold rounded-xl border-2 border-[#2c3327] transition-all cursor-pointer flex items-center gap-1.5 ${
                  isSelected
                    ? 'bg-[#c77843] text-white shadow-retro-sm translate-y-[-1px]'
                    : 'bg-[#faf6ee] text-[#4d5345] hover:bg-[#eae3d2]'
                }`}
              >
                <span>{item.company.split(' ')[0]}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected ? 'bg-[#2c3327] text-white' : 'bg-[#e2d9c8] text-[#2c3327]'
                  }`}
                >
                  {item.badgeText}
                </span>
              </button>
            );
          })}
        </div>

        {/* Vintage Retro Certificate Frame */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-[#fffef9] border-[3px] border-[#2c3327] shadow-retro-lg overflow-hidden">
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-2 left-2 w-5 h-5 border-t-2 border-l-2 border-[#c77843]" />
          <div className="absolute top-2 right-2 w-5 h-5 border-t-2 border-r-2 border-[#c77843]" />
          <div className="absolute bottom-2 left-2 w-5 h-5 border-b-2 border-l-2 border-[#c77843]" />
          <div className="absolute bottom-2 right-2 w-5 h-5 border-b-2 border-r-2 border-[#c77843]" />

          {/* Certificate Inner Border */}
          <div className="border border-dashed border-[#b8ae9c] p-5 sm:p-8 rounded-xl relative">
            {/* Top Seal & Company Header */}
            <div className="text-center space-y-1 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#faf4e6] border border-[#d6caa7] text-[#8c5a2b] font-mono text-xs font-bold uppercase tracking-widest mb-1 shadow-retro-sm">
                <span>★</span>
                <span>{cert.type.toUpperCase()}</span>
                <span>★</span>
              </div>

              <h1 className="font-mono text-xl sm:text-3xl font-extrabold text-[#2c3327] tracking-wider uppercase">
                {cert.company}
              </h1>

              <p className="font-mono text-xs sm:text-sm text-[#737c68] font-semibold">
                {cert.location} • {cert.period}
              </p>
            </div>

            {/* Presentation Statement */}
            <div className="text-center space-y-3 my-6">
              <p className="font-serif italic text-sm text-[#5f6756]">
                This credential is proud to certify that
              </p>

              <div className="inline-block border-b-2 border-[#2c3327] pb-1 px-8">
                <h2 className="font-display text-2xl sm:text-4xl font-bold text-[#c77843] tracking-wide">
                  {cert.issuedTo}
                </h2>
              </div>

              <p className="font-mono text-xs sm:text-sm font-bold text-[#2c3327] uppercase tracking-wider">
                HAS SERVED AS <span className="underline decoration-[#c77843]">{cert.role.toUpperCase()}</span>
              </p>
            </div>

            {/* Description & Accomplishments */}
            <div className="my-5 p-4 rounded-xl bg-[#faf7f0] border border-[#e2dac7] space-y-2">
              <p className="font-mono text-[11px] font-bold text-[#6a7260] uppercase tracking-wider">
                CONTRIBUTIONS & SCOPE OF WORK:
              </p>
              <ul className="space-y-1.5 text-xs text-[#3d4436] leading-relaxed">
                {cert.bulletPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-[#c77843] font-bold mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Validated */}
            <div className="my-4">
              <span className="block font-mono text-[10px] font-bold text-[#6a7260] uppercase tracking-wider mb-2">
                VERIFIED TECHNICAL COMPETENCIES:
              </span>
              <div className="flex flex-wrap gap-1.5">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-0.5 text-xs font-mono font-bold rounded-md bg-[#eef1e6] text-[#2c3327] border border-[#2c3327]"
                  >
                    #{skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Footer Signatures and Verification Seal */}
            <div className="mt-8 pt-4 border-t-2 border-dashed border-[#d4cbba] grid grid-cols-1 sm:grid-cols-3 items-end gap-4 text-center sm:text-left">
              <div>
                <p className="font-mono text-[10px] text-[#737c68] uppercase">ISSUED DATE</p>
                <p className="font-mono text-xs font-bold text-[#2c3327]">{cert.issueDate}</p>
                <p className="font-mono text-[10px] text-[#939c88] mt-0.5">LOCATION: {cert.location}</p>
              </div>

              {/* Official Seal in Center */}
              <div className="flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-[#c77843] bg-[#faf3e3] flex flex-col items-center justify-center p-1 text-center shadow-retro-sm">
                  <span className="text-sm">🏅</span>
                  <span className="font-mono text-[8px] font-extrabold text-[#8c5a2b] uppercase leading-tight">
                    VERIFIED
                  </span>
                  <span className="font-mono text-[7px] text-[#6b6253]">OFFICIAL</span>
                </div>
                <span className="font-mono text-[9px] text-[#2c3327] font-bold mt-1">
                  ID: {cert.certId}
                </span>
              </div>

              <div className="sm:text-right">
                <div className="inline-block font-serif italic text-sm text-[#4d5345] border-b border-[#2c3327] px-4 pb-0.5">
                  Authorized Signatory
                </div>
                <p className="font-mono text-[10px] text-[#737c68] uppercase mt-1">
                  {cert.company}
                </p>
                <p className="font-mono text-[10px] font-bold text-emerald-700">
                  ● {cert.status}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="p-3 bg-[#faf7f0] rounded-xl border-2 border-[#2c3327] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
          <span className="text-[#555d4d]">
            💡 Have physical scanned documents or Google Drive links?
          </span>
          <span className="font-bold text-[#c77843]">
            Official Credential Verified // Candidate ID: DEV-033
          </span>
        </div>
      </div>
    </RetroWindow>
  );
};
