import React, { useState } from 'react';
import './css/Header.style.css';

export default function Header({
   scrollToDashboard,
   scrollToAboutMe,
   scrollToSkills,
   scrollToArchiving,
   scrollToProjects,
}) {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
   };


   const scrollToSection = (scrollFunction, elementId) => {
      const section = document.getElementById(elementId);
      const headerHeight = 60; 
      if (section) {
         const offset = section.offsetTop - headerHeight;
         setTimeout(() => {
            window.scrollTo({
               top: offset,
               behavior: 'smooth',
            });
         }, 100);
      }
      scrollFunction(); 
      setIsModalOpen(false); 
   };

   return (
      <header className='header'>
         <a href='#' className='header_name'>
            Kang's PortFolio
         </a>
         <button className='modal_btn' onClick={toggleModal}>
            <div></div>
            <div></div>
            <div></div>
         </button>
         <div className={`modal ${isModalOpen ? 'slide-in' : ''}`}>
            <ul>
               <li onClick={() => scrollToSection(scrollToAboutMe, 'about-me')} className='cursor'>
                  About Me
               </li>
               <li onClick={() => scrollToSection(scrollToSkills, 'skills')} className='cursor'>
                  Skills
               </li>
               <li onClick={() => scrollToSection(scrollToArchiving, 'archiving')} className='cursor'>
                  Archiving
               </li>
               <li onClick={() => scrollToSection(scrollToProjects, 'projects')} className='cursor'>
                  Projects
               </li>
            </ul>
         </div>
      </header>
   );
}
