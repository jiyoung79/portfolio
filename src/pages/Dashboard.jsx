import React, { useRef } from 'react';
import './css/Dashboard.style.css';
import Aboutme from './Aboutme';

export default function Dashboard() {
   const aboutMeRef = useRef(null);

   const scrollToAboutMe = () => {
      if (aboutMeRef.current) {
         aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
      }
   };

   return (
      <div>
         <div className='dashboard'>
            <div className='dash_box'>
               <div className='title'>
                  <h1>강지영</h1>
                  <h1>풀스택 개발자 포트폴리오</h1>
               </div>
               <div className='middle_line'></div>
               <div className='sub'>
                  <p>안녕하세요</p>
                  <p>배움과 도전에 두려움이 없는</p>
                  <p>풀스택 개발자 강지영입니다.</p>
               </div>
            </div>
            <button onClick={scrollToAboutMe}>More</button>
         </div>
         <div ref={aboutMeRef}>
            <Aboutme />
         </div>
      </div>
   );
}
