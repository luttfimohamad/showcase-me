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
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 list-disc list-inside pl-4">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>React.js</li>
        <li>Next.js</li>
        <li>Tailwind CSS</li>
        <li>Git & GitHub</li>
        <li>API Integration</li>
        <li>Figma (UI/UX Collaboration)</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-4 list-inside">
        <li>
          <strong>Universitas Telkom</strong> – Bandung (Jul 2020 – Sep 2024)
          <br />
          Bachelor of Software Engineering, GPA: 3.60/4.00
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <ul className="list-disc pl-4 list-inside text-justify">
        <li>
          Teaching Factory – Frontend Developer (Telkom DBT Talent Nurturing
          Program 2023)
        </li>
        <li>
          Junior Network Administrator – BNSP (Digital Talent Scholarship 2019)
        </li>
      </ul>
    ),
  },
  {
    title: 'Experience',
    id: 'experience',
    content: (
      <ul className="list-disc pl-4 list-inside space-y-3 text-justify">
        <li>
          <strong>Front-End Developer – SIABDes TAXion</strong> (Sep 2023 – Sep
          2024)
          <br />
          Mengembangkan aplikasi web akuntansi berbasis Next.js, TypeScript, dan
          Tailwind CSS dengan pendekatan Clean Architecture.
        </li>
        <li>
          <strong>Internship – RC HUMIC</strong> (Jul 2023 – Sep 2023)
          <br />
          Merancang dan membangun backend Laravel untuk aplikasi pendeteksi
          kanker kulit serta integrasi REST API.
        </li>
        <li>
          <strong>PKL – CV Kurnia Komputer</strong> (Feb 2018 – Apr 2018)
          <br />
          Instalasi OS, perbaikan hardware, dan troubleshooting perangkat
          komputer & printer.
        </li>
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
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/lutfi.jpg"
          alt="about me"
          width={400}
          height={400}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-justify">
            Saya adalah fresh graduate dari Telkom University dengan IPK 3.6,
            yang memiliki minat besar dalam pengembangan Front End. Fokus utama
            saya adalah menggunakan teknologi modern seperti Next.js,
            TypeScript, dan Tailwind CSS. Saya antusias dalam menulis clean code
            dan selalu terbuka untuk belajar hal baru.
          </p>
          <div className="flex flex-wrap gap-2 sm:gap-4 justify-start mt-8">
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
            <TabButton
              selectTab={() => handleTabChange('experience')}
              active={tab === 'experience'}
            >
              {' '}
              Experience{' '}
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
