import React from 'react';
import Link from 'next/link';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  gitUrl: string;
  previewUrl: string;
}

export default function ProjectCard({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
}: ProjectCardProps) {
  return (
    <div>
      <div className="h-52 md:h-72 rounded-t-xl relative group overflow-hidden">
        {/* Background image with dark overlay on hover */}
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500 group-hover:scale-105 relative"
          style={{ backgroundImage: `url(${imgUrl})` }}
        >
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
        </div>

        {/* Hover icons */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-rose-500 hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-rose-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-rose-500 hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-rose-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white" />
          </Link>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
}
