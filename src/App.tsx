import { useState, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { CoursesSection } from './components/CoursesSection';
import { WhyChooseSection } from './components/WhyChooseSection';
import { GallerySection } from './components/GallerySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preselectedCourse, setPreselectedCourse] = useState('');

  const scrollToContact = useCallback(() => {
    const contactEl = document.getElementById('contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      const nameInput = document.getElementById('enquiry-name');
      if (nameInput) {
        nameInput.focus({ preventScroll: true });
      }
    }, 350);
  }, []);

  const handleSelectCourseForEnquiry = useCallback(
    (courseTitle: string) => {
      setPreselectedCourse(courseTitle);
      scrollToContact();
    },
    [scrollToContact]
  );

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:rounded-lg focus:bg-[#0F294A] focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to main content
      </a>

      <Navbar onEnquireClick={scrollToContact} />

      <main id="main-content" className="flex-1">
        <HeroSection onEnquireClick={scrollToContact} />
        <AboutSection />
        <CoursesSection onSelectCourseForEnquiry={handleSelectCourseForEnquiry} />
        <WhyChooseSection />
        <GallerySection />
        <ContactSection preselectedCourse={preselectedCourse} />
      </main>

      <Footer />
    </div>
  );
}
