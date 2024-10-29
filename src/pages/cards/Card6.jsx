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
            <li>React를 사용하여 UI와 상태 관리에 중점을 두고 개발하었습니다.</li>

            <li>
               각 버튼 클릭 시 선택한 값이 콜백 함수를 통해 전달되며 이후 컴퓨터의 랜덤 선택과 결과 비교가 이루어집니다.
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
