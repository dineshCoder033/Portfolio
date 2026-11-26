import React from 'react';
import {
  LinkedInIcon,
  GitHubIcon,
  LeetCodeIcon,
  InstagramIcon,
  WhatsAppIcon,
  EmailIcon,
} from './Icons';
import { playFolderClick } from '../utils/sound';

export const SocialDock = () => {
  const socials = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/dineshkumar93/',
      icon: (
        <LinkedInIcon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md transition-transform duration-200 group-hover:scale-110" />
      ),
    },
    {
      name: 'GitHub',
      url: 'https://github.com/dineshCoder033',
      icon: (
        <GitHubIcon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md transition-transform duration-200 group-hover:scale-110" />
      ),
    },
    {
      name: 'LeetCode',
      url: 'https://leetcode.com/u/DINESHKUAMR-11/',
      icon: (
        <LeetCodeIcon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md transition-transform duration-200 group-hover:scale-110" />
      ),
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/itz.dkehh.x/',
      icon: (
        <InstagramIcon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md transition-transform duration-200 group-hover:scale-110" />
      ),
    },
    {
      name: 'WhatsApp',
      url: 'https://wa.me/919080410549',
      icon: (
        <WhatsAppIcon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md transition-transform duration-200 group-hover:scale-110" />
      ),
    },
    {
      name: 'Email',
      url: 'mailto:dinesh.dev033@gmail.com',
      icon: (
        <EmailIcon className="w-9 h-9 sm:w-11 sm:h-11 drop-shadow-md transition-transform duration-200 group-hover:scale-110" />
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={playFolderClick}
          className="group transition-all duration-200 transform hover:-translate-y-1.5 focus:outline-none cursor-pointer"
          aria-label={social.name}
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
