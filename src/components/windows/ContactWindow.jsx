import React, { useState } from 'react';
import { RetroWindow } from '../RetroWindow';
import { playFolderClick } from '../../utils/sound';

export const ContactWindow = ({
  isOpen,
  onClose,
  zIndex,
  onFocus,
  initialOffset,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSending(true);
    playFolderClick();

    setTimeout(() => {
      setIsSending(false);
      setSubmitted(true);
    }, 800);
  };

  const handleReset = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setSubmitted(false);
  };

  return (
    <RetroWindow
      id="contact"
      path="C:\DINESH\contact"
      title="Contact Dinesh"
      isOpen={isOpen}
      onClose={onClose}
      zIndex={zIndex}
      onFocus={onFocus}
      initialOffset={initialOffset}
    >
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Contact Info Sidebar */}
        <div className="md:col-span-2 space-y-4">
          <div className="p-4 rounded-xl bg-[#faf6ee] border-2 border-[#2c3327] shadow-retro-sm">
            <h3 className="font-mono text-sm font-bold text-[#2c3327] uppercase tracking-wider mb-2">
              GET IN TOUCH
            </h3>
            <p className="text-xs text-[#525a49] leading-relaxed">
              Have a project, job opportunity, or tech discussion in mind? Feel free to call, email, or message me directly on WhatsApp!
            </p>
          </div>

          {/* Quick Info Cards with Dinesh's actual details */}
          <div className="space-y-2.5">
            {/* Email */}
            <div className="p-3 bg-[#fdfbf7] rounded-xl border-2 border-[#2c3327] flex items-center gap-3">
              <span className="text-xl">✉️</span>
              <div className="overflow-hidden">
                <p className="text-[10px] font-mono text-[#68705f] uppercase font-bold">Email</p>
                <a
                  href="mailto:dinesh.dev033@gmail.com"
                  className="text-xs font-mono font-semibold text-[#2c3327] hover:underline truncate block"
                >
                  dinesh.dev033@gmail.com
                </a>
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="p-3 bg-[#fdfbf7] rounded-xl border-2 border-[#2c3327] flex items-center gap-3">
              <span className="text-xl">📱</span>
              <div>
                <p className="text-[10px] font-mono text-[#68705f] uppercase font-bold">Phone / WhatsApp</p>
                <a
                  href="tel:+919080410549"
                  className="text-xs font-mono font-semibold text-[#2c3327] hover:underline"
                >
                  +91 9080410549
                </a>
                <div className="mt-1">
                  <a
                    href="https://wa.me/919080410549"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 hover:underline"
                  >
                    <span>Chat on WhatsApp ↗</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="p-3 bg-[#fdfbf7] rounded-xl border-2 border-[#2c3327] flex items-center gap-3">
              <span className="text-xl">⚡</span>
              <div>
                <p className="text-[10px] font-mono text-[#68705f] uppercase font-bold">Status</p>
                <div className="flex items-center gap-1.5 mt-0.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono font-bold text-emerald-800">
                    Open for Opportunities
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="md:col-span-3">
          {submitted ? (
            <div className="p-8 bg-[#faf7f0] rounded-2xl border-2 border-[#2c3327] shadow-retro text-center space-y-4 animate-pop-in">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#f4cf65] border-2 border-[#2c3327] flex items-center justify-center text-3xl shadow-retro-sm">
                ✉️
              </div>
              <h3 className="font-display font-bold text-2xl text-[#2c3327]">
                Message Delivered!
              </h3>
              <p className="font-mono text-xs text-[#555d4d] max-w-sm mx-auto">
                Thank you, <span className="font-bold text-[#c77843]">{formData.name}</span>! 
                Your message has been sent to <span className="font-bold text-[#2c3327]">dinesh.dev033@gmail.com</span>.
              </p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={handleReset}
                  className="px-4 py-2 bg-[#5c6753] hover:bg-[#4d5745] text-white font-mono text-xs font-bold rounded-xl border-2 border-[#2c3327] shadow-retro-sm transition-all cursor-pointer"
                >
                  Send Another Message
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-bold text-[#3d4237] mb-1">
                  NAME *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your Name or Company"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2 text-sm font-sans bg-[#faf7f0] border-2 border-[#2c3327] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5c6753] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#3d4237] mb-1">
                  EMAIL *
                </label>
                <input
                  type="email"
                  required
                  placeholder="your.email@domain.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 text-sm font-sans bg-[#faf7f0] border-2 border-[#2c3327] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5c6753] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#3d4237] mb-1">
                  SUBJECT
                </label>
                <input
                  type="text"
                  placeholder="Project Inquiry / Job Opportunity / Greeting"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-3 py-2 text-sm font-sans bg-[#faf7f0] border-2 border-[#2c3327] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5c6753] transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold text-[#3d4237] mb-1">
                  MESSAGE *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2 text-sm font-sans bg-[#faf7f0] border-2 border-[#2c3327] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5c6753] transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full py-2.5 px-4 bg-[#c77843] hover:bg-[#b56936] active:translate-y-0.5 text-white font-mono text-sm font-bold rounded-xl border-2 border-[#2c3327] shadow-retro flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isSending ? (
                  <span>TRANSMITTING MESSAGE...</span>
                ) : (
                  <>
                    <span>SEND MESSAGE</span>
                    <span>✉️</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </RetroWindow>
  );
};
