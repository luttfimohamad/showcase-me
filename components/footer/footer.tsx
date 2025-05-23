import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <div className="relative w-[50px] h-[20px] md:w-[50px] md:h-[20px]">
          <Image
            src="/images/logo.png"
            alt="Logo"
            fill
            className="object-contain"
          />
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
