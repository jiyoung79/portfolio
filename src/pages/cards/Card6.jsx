import React, { useState } from 'react';
import '../cards/css/Card.style.css';
import { faList, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal6 from './modal/Modal6';

export default function Card6() {
   const [isModalOpen, setModalOpen] = useState(false);

   const openModal = () => setModalOpen(true);
   const closeModal = () => setModalOpen(false);

   return (
      <div className='card'>
         <div className='card_title'>
            <FontAwesomeIcon icon={faList} className='title_icon' />
            <p>날씨 앱</p>
         </div>
         <p className='time'>2024.8 (1인 개인 프로젝트)</p>
         <div className='line'></div>
         <div className='summery'>
            <h3 className='introduce'></h3>
            <p className='stack'>
               <FontAwesomeIcon icon={faComputer} className='icon_com' />
               주요 개발
            </p>
            <li>섭씨, 화씨 등의 온도 변환 기능과 데이터 로딩 중 로딩 스피너를 추가해 사용자 경험을 개선했습니다.</li>

            <li>
               getCurrentLocation과 OpenWeatherMap API를 통해 사용자의 위치 기반 날씨와 선택된 도시의 날씨를 조회하도록
               구현했습니다.
            </li>
            <div className='check'>
               <p>
                  <FontAwesomeIcon icon={faCircleCheck} className='icon_list' />
                  주요 업무 : 리액트를 사용해 프론트엔드 개발 담당
               </p>
            </div>
            <p className='url'>
               <a href='https://weatherpracticeapp.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  날씨 앱 배포 사이트 방문하기
               </a>
            </p>
            <button onClick={openModal} className='modal_button'>
               프로젝트 세부사항
            </button>
            <Modal6 isOpen={isModalOpen} closeModal={closeModal} />
         </div>
      </div>
   );
}
