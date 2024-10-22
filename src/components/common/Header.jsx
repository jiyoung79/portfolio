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

   return (
      <header className='header'>
         <a href='#' className='header_name'>
            KJY's PortFolio
         </a>
         <button className='modal_btn' onClick={toggleModal}>
            <div></div>
            <div></div>
            <div></div>
         </button>
         <div className={`modal ${isModalOpen ? 'slide-in' : ''}`}>
            <ul>
               <li
                  onClick={() => {
                     console.log('About Me clicked');
                     scrollToAboutMe();
                  }}
                  className='cursor'>
                  About Me
               </li>
               <li
                  onClick={() => {
                     console.log('Skills clicked');
                     scrollToSkills();
                  }}
                  className='cursor'>
                  Skills
               </li>
               <li
                  onClick={() => {
                     console.log('Archiving clicked');
                     scrollToArchiving();
                  }}
                  className='cursor'>
                  Archiving
               </li>
               <li
                  onClick={() => {
                     console.log('Projects clicked');
                     scrollToProjects();
                  }}
                  className='cursor'>
                  Projects
               </li>
            </ul>
         </div>
      </header>
   );
}
