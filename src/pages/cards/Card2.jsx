import React, { useState } from 'react';
import '../cards/css/Card.style.css';
import { faList, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal2 from './modal/Modal2';

export default function Card2() {
   const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리

   const openModal = () => setModalOpen(true); // 모달 열기 함수
   const closeModal = () => setModalOpen(false); // 모달 닫기 함수

   return (
      <div className='card'>
         <div className='card_title'>
            <FontAwesomeIcon icon={faList} className='title_icon' />
            <p>Netflix 클론코딩</p>
         </div>
         <p className='time'>2024.09~ (1인 프론트엔드 프로젝트)</p>
         <div className='line'></div>
         <div className='summery'>
            <h3 className='introduce'>리액트를 이용한 넷플릭스 클론코딩</h3>
            <p className='stack'>
               <FontAwesomeIcon icon={faComputer} className='icon_com' />
               사용 기술 스택
            </p>
            <li>
               기존 넷플릭스 영문 사이트를 클론코딩
               <p>(hook을 이용하여 코드의 재사용, 컴포넌트를 비즈니스 로직과 UI를 분류(코드의 세분화))</p>
               <p>
                  (state를 사용하여 동적인 데이터를 관리하고, 그 데이터를 기반으로 한 UI의 자동적인 업데이트를 쉽게 처리)                 
               </p>
            </li>
            <li>키워드로 영화를 검색할 수 있다.</li>
            <li>TMDB를 이용하여 인기영화, 개봉할 영화 API 호출</li>

            <div className='check'>
               <p>
                  <FontAwesomeIcon icon={faCircleCheck} className='icon_list' />
                  주요 업무 : 리덕스, 리액트, 리액트쿼리, 리액트 라우터 돔, 리액트 훅을 사용한 클론코딩
               </p>
            </div>
            <p className='url'>
               <a href='https://netcloneflixkangjiyeong.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  NetFlix 클론코딩 배포 사이트 방문하기
               </a>
            </p>
            <button onClick={openModal} className='modal_button'>
               프로젝트 세부사항
            </button>
            <Modal2 isOpen={isModalOpen} closeModal={closeModal} />
         </div>
      </div>
   );
}
