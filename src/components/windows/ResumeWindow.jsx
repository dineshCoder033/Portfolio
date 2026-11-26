import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';

export const ResumeWindow = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
  initialOffset,
}) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);

  const fileId = '1sJYcLXBMhgXliBodYIbUQVALSCtgj4Dz';
  const previewUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  const viewUrl = `https://drive.google.com/file/d/${fileId}/view?usp=sharing`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${fileId}`;

  const handlePrint = () => {
    playFolderClick();
    window.print();
  };

  return (
    <RetroWindow
      id="resume"
      path="C:\DINESH\resume.pdf"
      title="Dinesh Kumar - Resume PDF"
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="max-w-4xl lg:max-w-5xl"
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
    >
      <div className="flex flex-col h-full space-y-4">
        {/* Header Action Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b-2 border-dashed border-[#d4cbba] pb-3">
          <div>
            <h2 className="font-mono text-lg sm:text-xl font-bold tracking-wider text-[#353c2f] uppercase flex items-center gap-2">
              <span>📄</span>
              <span>DINESH KUMAR - RESUME</span>
            </h2>
            <p className="text-xs font-mono text-[#616858]">
              Software Developer & Web Designer • Live Drive Document
            </p>
          </div>

          {/* Action Buttons: Download PDF, Open in Drive, Print */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Direct Download Button */}
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playFolderClick}
              className="px-3.5 py-1.5 bg-[#c77843] hover:bg-[#b56936] text-white font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm flex items-center gap-1.5 transition-all cursor-pointer active:translate-y-0.5"
              title="Download PDF to computer"
            >
              <span>📥 Download PDF</span>
            </a>

            {/* Open in Google Drive */}
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={playFolderClick}
              className="px-3.5 py-1.5 bg-[#f4cf65] hover:bg-[#ebbe46] text-[#2c3327] font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm flex items-center gap-1.5 transition-all cursor-pointer active:translate-y-0.5"
              title="Open full file in Google Drive"
            >
              <span>↗ Open in Drive</span>
            </a>

            {/* Print */}
            <button
              type="button"
              onClick={handlePrint}
              className="px-3 py-1.5 bg-[#faf6ee] hover:bg-[#eae3d2] text-[#2c3327] font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm flex items-center gap-1 transition-all cursor-pointer"
              title="Print document"
            >
              <span>🖨️ Print</span>
            </button>
          </div>
        </div>

        {/* Embedded Google Drive PDF Viewer Container */}
        <div className="relative w-full flex-1 min-h-[55vh] sm:min-h-[68vh] rounded-xl overflow-hidden border-2 border-[#2c3327] bg-[#eef1e6] shadow-retro-sm flex flex-col">
          {/* Loading indicator */}
          {!iframeLoaded && (
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-[#faf7f0] p-6 text-center">
              <div className="w-10 h-10 border-4 border-[#c77843] border-t-transparent rounded-full animate-spin mb-3" />
              <p className="font-mono text-sm font-bold text-[#2c3327]">
                Loading Resume Document...
              </p>
              <p className="text-xs font-mono text-[#68705f] mt-1">
                Connecting to Google Drive
              </p>
            </div>
          )}

          {/* Google Drive PDF Preview Frame */}
          <iframe
            src={previewUrl}
            title="Dinesh Kumar Resume"
            className="w-full h-full flex-1 border-0 rounded-xl"
            onLoad={() => setIframeLoaded(true)}
            allow="autoplay"
          />
        </div>

        {/* Footer fallback info bar */}
        <div className="p-3 bg-[#faf7f0] rounded-xl border-2 border-[#2c3327] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-mono">
          <span className="text-[#555d4d]">
            📧 dinesh.dev033@gmail.com • 📱 +91 9080410549
          </span>

          <div className="flex items-center gap-3">
            <a
              href={downloadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#c77843] hover:underline"
            >
              Direct Download Link ↗
            </a>
            <span className="text-[#a59d8d]">|</span>
            <a
              href={viewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#5c6753] hover:underline"
            >
              View on Google Drive ↗
            </a>
          </div>
        </div>
      </div>
    </RetroWindow>
  );
};
