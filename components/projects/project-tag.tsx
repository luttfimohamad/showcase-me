import React from 'react';

interface ProjectCardProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

export default function ProjectCard({
  name,
  onClick,
  isSelected,
}: ProjectCardProps) {
  const buttonStyles = isSelected
    ? 'text-white border-rose-500'
    : 'text-[#ADB7BE] border-slate-600 hover:border-white';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
}
