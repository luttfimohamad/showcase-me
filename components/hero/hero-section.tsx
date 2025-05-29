'use client';

import React from 'react';
import Image from 'next/image';
import TypeWriter from './type-writer';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:leading-normal lg:text-8xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-orange-400 to-rose-700">
              {"Hello, I'm"}
            </span>
            <br />
            <TypeWriter />
          </h1>
          <p className="text-[#D6C8B2] text-base sm:text-lg mb-6 lg:text-xl">
            Passionate developer with a love for clean code and warm coffee.
          </p>
          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-amber-500 via-orange-400 to-rose-300 hover:opacity-90 text-white"
            >
              Hire Me
            </Link>
            <Link
              href="/file/mohamad-lutfi-resume.pdf"
              download="file/mohamad-lutfi-resume.pdf"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-amber-500 via-orange-400 to-rose-300 hover:opacity-90 text-white mt-3"
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="relative rounded-full overflow-hidden bg-[#3B2F2F] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
