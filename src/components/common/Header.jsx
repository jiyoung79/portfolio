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

   // 특정 섹션으로 스크롤할 때 헤더의 높이를 고려해 스크롤 위치를 조정하는 함수
   const scrollToSection = (scrollFunction, elementId) => {
      const section = document.getElementById(elementId);
      const headerHeight = 120; // 고정된 헤더의 높이
      if (section) {
         const offset = section.offsetTop - headerHeight; // 스크롤 위치 조정
         window.scrollTo({
            top: offset,
            behavior: 'smooth', // 부드러운 스크롤
         });
      }
      scrollFunction(); // 스크롤을 트리거하는 콜백 실행
      setIsModalOpen(false); // 메뉴 클릭 후 모달 닫기
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
