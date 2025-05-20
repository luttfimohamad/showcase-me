import React from 'react';

export default function Footer() {
  return (
    <footer className="footer border border-t-[#33353F] z-10 border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="bg-gradient-to-r from-rose-500 to-rose-400 bg-clip-text text-transparent">
          Showcase
        </span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
}
