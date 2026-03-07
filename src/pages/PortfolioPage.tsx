import { HeroSection } from '../components/HeroSection';
import { AboutSection } from '../components/AboutSection';
import { ExperienceSection } from '../components/ExperienceSection';
import { ProjectsCompactSection } from '../components/ProjectsCompactSection';
import { EducationSection } from '../components/EducationSection';
import { SkillsSection } from '../components/SkillsSection';
import { ContactSection } from '../components/ContactSection';
export function PortfolioPage({ toggleDark, isDark }: { toggleDark: () => void; isDark: boolean }) {
  return (
    <main className="w-full min-h-screen bg-bg dark:bg-bg text-text dark:text-text overflow-hidden">
      <HeroSection toggleDark={toggleDark} isDark={isDark} />
      <AboutSection />
      <div className="grid md:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-12 md:py-16 bg-text/5">
        <div className="flex-1">
          <ExperienceSection />
        </div>
        {/* <div className="w-px bg-gray-100 dark:bg-gray-600"></div> */}
        <div className="flex-1">
          <EducationSection />
        </div>
      </div>
      <ProjectsCompactSection />
      <SkillsSection />
      <ContactSection />
    </main>);

}