import React from 'react'
import NavLink from './nav-link'

interface LinkItem {
  title: string;
  path: string;
}

interface MenuOverlayProps {
  links: LinkItem[];
}

export default function MenuOverlay({links}: MenuOverlayProps) {
  return (
      <ul className="flex flex-col py-4 items-center">
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.path} title={link.title} />
        </li>
      ))}
    </ul>
  )
}
