'use client';

import { TypeAnimation } from 'react-type-animation';
import React from 'react';

export default function TypeWriter() {
  return (
    <TypeAnimation
      sequence={[
        'Mohamad Lutfi',
        1000,
        'Web Developer',
        1000,
        'Front-End Developer',
        1000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
      className="text-yellow-300"
    />
  );
}
