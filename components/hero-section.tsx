import React from 'react';
import Image from 'next/image';

export default function HeroSection() {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            {"Hello, I'm Mohamad Lutfi"}
          </h1>
          <p className="text-[#ADB7BE] text-lg mb-6 lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptatum.
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 rounded-full bg-transparent hover:bg-slate-800 text-white border border-white mt-3">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="relative rounded-full overflow-hidden bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
            <Image
              src="/hero-image.png"
              alt="hero image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
