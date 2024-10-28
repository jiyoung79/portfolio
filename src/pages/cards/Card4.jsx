import React, { useState } from 'react';
import '../cards/css/Card.style.css';
import { faList, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal4 from './modal/Modal4';

export default function Card4() {
   const [isModalOpen, setModalOpen] = useState(false); 

   const openModal = () => setModalOpen(true); 
   const closeModal = () => setModalOpen(false);

   return (
      <div className='card'>
         <div className='card_title'>
            <FontAwesomeIcon icon={faList} className='title_icon' />
            <p>Kang's Portfolio</p>
         </div>
         <p className='time'>2024.10 (1인 개인 프로젝트)</p>
         <div className='line'></div>
         <div className='summery'>
            <h3 className='introduce'>리액트를 사용한 포트폴리오 사이트 프로젝트</h3>
            <p className='stack'>
               <FontAwesomeIcon icon={faComputer} className='icon_com' />
               주요 개발
            </p>
            <li>React를 이용하여 클라이언트 사이드 랜더링을 통해 웹사이트 개발</li>

            <li>프로젝트 세부사항 이라는 모달창을 만들어 Readme를 표현</li>
            <div className='check'>
               <p>
                  <FontAwesomeIcon icon={faCircleCheck} className='icon_list' />
                  주요 업무 : 리액트를 사용해 프론트엔드 개발 담당
               </p>
            </div>
            <p className='url'>
               <a href='https://kjyportfoliosite.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  Kang's Portfolio 배포 사이트 방문하기
               </a>
            </p>
            <button onClick={openModal} className='modal_button'>
               프로젝트 세부사항
            </button>
            <Modal4 isOpen={isModalOpen} closeModal={closeModal} />
         </div>
      </div>
   );
}
