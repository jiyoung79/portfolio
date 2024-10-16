import React from 'react';
import './css/Aboutme.style.css';
import {
   faPhone,
   faUser,
   faCalendarDays,
   faLocationArrow,
   faEnvelope,
   faIdCard,
   faPen,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Aboutme() {
   return (
      <div className='aboutme'>
         <h1 className='title'>About Me</h1>
         <div className='middle_line'></div>
         <div className='boxes'>
            <div className='box'>
               <FontAwesomeIcon icon={faUser} className='icon' />
               <div>
                  <h3>이름</h3>
                  <p>강지영</p>
               </div>
            </div>
            <div className='box'>
               <FontAwesomeIcon icon={faCalendarDays} className='icon' />
               <div>
                  <h3>생년월일</h3>
                  <p>98. 07. 09</p>
               </div>
            </div>
            <div className='box'>
               <FontAwesomeIcon icon={faLocationArrow} className='icon' />
               <div>
                  <h3>주소</h3>
                  <p>서울특별시 금천구</p>
               </div>
            </div>
            <div className='box'>
               <FontAwesomeIcon icon={faPhone} className='icon' />
               <div>
                  <h3>연락처</h3>
                  <p>010-5665-7219</p>
               </div>
            </div>
            <div className='box'>
               <FontAwesomeIcon icon={faEnvelope} className='icon' />
               <div>
                  <h3>이메일</h3>
                  <p>kangjiyoung9879@gmail.com</p>
               </div>
            </div>
            <div className='box'>
               <FontAwesomeIcon icon={faPen} className='icon' />
               <div>
                  <h3>학력</h3>
                  <p>대구가톨릭대학교</p>
                  <p>- 생명공학과(중퇴)</p>
                  <p>코리아IT아카데미</p>
                  <p>- 임베디드 풀스택 개발자과정 수료</p>
               </div>
            </div>
            <div className='box'>
               <FontAwesomeIcon icon={faIdCard} className='icon' />
               <div>
                  <h3>자격증</h3>
                  <p>- 정보처리산업기사(필기)</p>
                  <p>- SQL개발자(SQLD자격) </p>
                  <p>- 리눅스마스터 2급(1차)</p>
               </div>
            </div>
         </div>
      </div>
   );
}
