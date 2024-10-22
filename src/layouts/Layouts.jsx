import React, { useRef } from 'react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Layouts.style.css';
import Dashboard from '../pages/Dashboard';
import Aboutme from '../pages/Aboutme';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Archiving from '../pages/Archiving';

export default function Layout() {
   const dashboardRef = useRef(null);
   const aboutMeRef = useRef(null);
   const skillsRef = useRef(null);
   const archivingRef = useRef(null);
   const projectsRef = useRef(null);

   const scrollToSection = ref => {
      if (ref.current) {
         ref.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <div className='layout-container flex flex-col min-h-screen'>
         <Header
            scrollToDashboard={() => scrollToSection(dashboardRef)}
            scrollToAboutMe={() => scrollToSection(aboutMeRef)}
            scrollToSkills={() => scrollToSection(skillsRef)}
            scrollToArchiving={() => scrollToSection(archivingRef)}
            scrollToProjects={() => scrollToSection(projectsRef)}
         />
         <div ref={dashboardRef}>
            <Dashboard />
         </div>
         {/* <div ref={aboutMeRef}>
            <Aboutme />
         </div> */}
         <div ref={skillsRef}>
            <Skills />
         </div>
         <div ref={archivingRef}>
            <Archiving />
         </div>
         <div ref={projectsRef}>
            <Projects />
         </div>
         <Footer />
      </div>
   );
}
