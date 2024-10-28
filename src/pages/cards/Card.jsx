import React, { useState } from 'react';
import '../cards/css/Card.style.css';
import { faList, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal from './modal/Modal';

export default function Card_1() {
   const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리

   const openModal = () => setModalOpen(true); // 모달 열기 함수
   const closeModal = () => setModalOpen(false); // 모달 닫기 함수

   return (
      <div className='card'>
         <div className='card_title'>
            <FontAwesomeIcon icon={faList} className='title_icon' />
            <p>Stay Connect</p>
         </div>
         <p className='time'>2024.03~2024.07 (4인 풀스텍 프로젝트)</p>
         <div className='line'></div>
         <div className='summery'>
            <h3 className='introduce'>숙박업소 예약 웹개발 프로젝트</h3>
            <p className='stack'>
               <FontAwesomeIcon icon={faComputer} className='icon_com' />
               주요 개발
            </p>
            <li>
               숙박업소와 실시간 채팅이 가능한 소켓 통신 기능을 추가하여 개발
               <p>(고객 서비스 향상과 예약 전환율 증가, 데이터 수집 및 분석 기대)</p>
            </li>
            <li>
               지도 좌표로 그 근처에 위치한 숙소를 추천해주는 기능을 추가하여 개발
               <p>(소비자가 원하는 좌표의 숙소 추천)</p>
            </li>
            <li>소셜 로그인 추가 및 KG이니시스 결제 API 기능 개발</li>
            <div className='check'>
               <p>
                  <FontAwesomeIcon icon={faCircleCheck} className='icon_list' />
                  주요 업무 : 백엔드 및 프론트엔드 담당
               </p>
               <p>
                  <FontAwesomeIcon icon={faCircleCheck} className='icon_list' />
                  담당 역할 : index, MyPage, 전반적인 CSS, 결제API CRUD, MyPage 개인정보수정 CRUD
               </p>
            </div>
            <p className='url'>
               <a href='https://stayconnect.shop/' target='_blank' rel='noopener noreferrer'>
                  Stay Connect 배포 사이트 방문하기
               </a>
            </p>
            <button onClick={openModal} className='modal_button'>
               프로젝트 세부사항
            </button>
            <Modal isOpen={isModalOpen} closeModal={closeModal} />
         </div>
      </div>
   );
}
