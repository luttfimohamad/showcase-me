'use client';

import React from 'react';
import { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './tab-button';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-2">
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/about-me.png"
          alt="about me"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            {
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
            }
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('skills')}
              active={tab === 'skills'}
            >
              {' '}
              Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('certifications')}
              active={tab === 'certifications'}
            >
              {' '}
              Certifications{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.map((item) => (
              <div
                key={item.id}
                className={`${
                  tab === item.id ? 'block' : 'hidden'
                } transition-all duration-300`}
              >
                {isPending ? (
                  <p>Loading...</p>
                ) : (
                  <div className="text-base lg:text-lg">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
