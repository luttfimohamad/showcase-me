'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './project-card';
import ProjectTag from './project-tag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'Live Stock Feed',
    description:
      'FarmFeed Pro adalah platform penyedia pakan ternak berkualitas tinggi untuk mendukung pertumbuhan, kesehatan, dan produktivitas hewan ternak.',
    image: '/images/projects/live-stock-feed.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/livestock-feed',
    previewUrl: 'https://livestock-feed.vercel.app',
  },
  {
    id: 2,
    title: 'Balap Community',
    description:
      'Situs komunitas BALAP yang menampilkan kegiatan warga, gotong royong, olahraga, dan pelatihan untuk membangun kebersamaan di Desa Balamoa.',
    image: '/images/projects/balap-community.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/balap-community',
    previewUrl: 'https://balap-community.vercel.app',
  },
  {
    id: 3,
    title: 'Lutfi Resume',
    description:
      'Portofolio modern Mohamad Lutfi yang menampilkan profil, keahlian, pengalaman kerja, dan proyek, dibuat dengan Next.js, TypeScript, dan Tailwind.',
    image: '/images/projects/lutfi-resume.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/lutfi-resume',
    previewUrl: 'https://lutfi-resume-ten.vercel.app',
  },
  {
    id: 4,
    title: 'SIABDes TAXion',
    description:
      'SIABDes TAXion adalah startup berbasis teknologi yang mengembangkan sistem informasi akuntansi berbasis web untuk BUMDes dan BUMDesma.',
    image: '/images/projects/siabdes-taxion.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/SIABDES/siabdes-web',
    previewUrl: 'http://siabdestaxion.com',
  },
  {
    id: 5,
    title: 'APIDOG',
    description:
      'Platform API design-first yang memungkinkan perancangan, pengujian, dokumentasi, dan mocking API secara efisien dalam satu antarmuka.',
    image: '/images/projects/apidog.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/api-builder',
    previewUrl: 'https://api-builder-ten.vercel.app',
  },
  {
    id: 5,
    title: 'Unfold News',
    description:
      'Unfold News adalah situs berita modern dengan tampilan bersih, menyajikan artikel informatif dan visual menarik secara responsif dan estetis.',
    image: '/images/projects/unfold-news.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/unfold-news',
    previewUrl: 'https://unfold-news-navy.vercel.app',
  },
  {
    id: 6,
    title: 'The Foodies App',
    description:
      'Situs web resep yang menampilkan berbagai hidangan dunia lengkap dengan gambar, deskripsi singkat, dan nama pembuatnya.',
    image: '/images/projects/the-foodies-app.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/the-foodies-app',
    previewUrl: 'https://the-foodies-app-lyart.vercel.app',
  },
  {
    id: 7,
    title: 'Meetups App',
    description:
      'Situs ini menampilkan daftar acara meetup, dibuat dengan React dan Next.js, cocok untuk latihan atau proyek portofolio.',
    image: '/images/projects/meetups-app.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/luttfimohamad/meetups',
    previewUrl: 'https://meetups-rose-two.vercel.app',
  },

  // {
  //   id: 9,
  //   title: 'The Foodies App',
  //   description:
  //     'Situs web resep yang menampilkan berbagai hidangan dunia lengkap dengan gambar, deskripsi singkat, dan nama pembuatnya.',
  //   image: '/images/projects/6.png',
  //   tag: ['All', 'Web'],
  //   gitUrl: 'https://github.com/luttfimohamad/the-foodies-app',
  //   previewUrl: 'https://the-foodies-app-lyart.vercel.app/meals',
  // },
];

export default function ProjectSection() {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: React.SetStateAction<string>) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>

      {filteredProjects.length === 0 ? (
        <p className="text-white text-center text-lg mt-8">
          Belum ada proyek untuk kategori ini.
        </p>
      ) : (
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? 'animate' : 'initial'}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      )}
    </section>
  );
}
