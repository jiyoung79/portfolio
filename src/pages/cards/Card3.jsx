import React, { useState } from 'react';
import '../cards/css/Card.style.css';
import { faList, faComputer } from '@fortawesome/free-solid-svg-icons';
import { faCircleCheck } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Modal3 from './modal/Modal3';

export default function Card3() {
   const [isModalOpen, setModalOpen] = useState(false); // 모달 상태 관리

   const openModal = () => setModalOpen(true); // 모달 열기 함수
   const closeModal = () => setModalOpen(false); // 모달 닫기 함수

   return (
      <div className='card'>
         <div className='card_title'>
            <FontAwesomeIcon icon={faList} className='title_icon' />
            <p>H&M 클론코딩</p>
         </div>
         <p className='time'>2024.09 (1인 프론트엔드 프로젝트)</p>
         <div className='line'></div>
         <div className='summery'>
            <h3 className='introduce'>리액트를 이용한 H&M 클론코딩</h3>
            <p className='stack'>
               <FontAwesomeIcon icon={faComputer} className='icon_com' />
               주요 개발
            </p>
            <li>기존 H&M 사이트를 클론코딩</li>
            <li>전체상품페이지, 로그인, 상품상세페이지로 구성</li>
            <li>키워드로 상품을 검색할 수 있다.</li>
            <li>상품 디테일을 눌렀으나, 로그인이 되어있지 않은 경우에는 로그인 페이지가 먼저 나온다.</li>
            <li>로그인이 되어있을 경우에는 상품 디테일 페이지를 볼 수 있다.</li>

            <div className='check'>
               <p>
                  <FontAwesomeIcon icon={faCircleCheck} className='icon_list' />
                  주요 업무 : 리액트, 리액트쿼리, 리액트 라우터 돔을 사용한 클론코딩
               </p>
            </div>
            <p className='url'>
               <a href='https://hnmclonecoding.netlify.app/' target='_blank' rel='noopener noreferrer'>
                  H&M 클론코딩 배포 사이트 방문하기
               </a>
            </p>
            <button onClick={openModal} className='modal_button'>
               프로젝트 세부사항
            </button>
            <Modal3 isOpen={isModalOpen} closeModal={closeModal} />
         </div>
      </div>
   );
}
