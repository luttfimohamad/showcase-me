import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  default: { width: 0 },
  active: { width: 'calc(100% - 0.75rem)' },
};

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

export default function TabButton({
  active,
  selectTab,
  children,
}: TabButtonProps) {
  const buttonClasses = active ? 'text-white' : 'text-[#ADB7BE]';

  return (
    <button onClick={selectTab}>
      <p
        className={`mr-3 font-semibold text-base lg:text-xl hover:text-white ${buttonClasses}`}
      >
        {children}
      </p>
      <motion.div
        animate={active ? 'active' : 'default'}
        variants={variants}
        className="h-1 bg-rose-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
}
