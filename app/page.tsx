import HeroSection from '@/components/hero/hero-section';
import Navbar from '../components/header/nav-bar';
import AboutSection from '@/components/about/about-section';
import ProjectSection from '@/components/projects/project-section';
import EmailSection from '@/components/email/email-section';
import Footer from '@/components/footer/footer';
import AchievementsSection from '@/components/achievements/achievements-section';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
