import HeroSection from '@/components/hero/hero-section';
import Navbar from '@/components/header/nav-bar';
import AboutSection from '@/components/about/about-section';
import ProjectSection from '@/components/projects/project-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    </main>
  );
}
