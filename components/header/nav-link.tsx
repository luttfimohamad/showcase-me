import React from 'react'
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  title: string;
}

export default function NavLink({href, title}: NavLinkProps) {
  return (
     <Link
      href={href}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </Link>
  );
}
