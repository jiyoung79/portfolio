import React from 'react';
import '../modal/Modal.style.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal2({ isOpen, closeModal }) {
   if (!isOpen) return null;

   return (
      <div className='modal_overlay'>
         <div className='modal_content'>
            <div className='modal_title'>
               <h1>프로젝트 세부사항</h1>
            </div>
            <div className='text'>
               <h2 className='project_title'>프로젝트명: Netflix 클론코딩</h2>
               <div className='skill_stack'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPowerOff} className='modal_icon' />
                     기술 스택
                  </h2>
                  <h3>프론트엔드:</h3>
                  <li>HTML, CSS, JavaScript, Axios, React, ReactRouter, React Hooks, ReactQuery, React Router Dom</li>
               </div>
               <div className='second_line'></div>
               <div className='purpose'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPenToSquare} className='modal_icon' />
                     개발동기 및 목적
                  </h2>
                  <p>
                     넷플릭스 클론 코딩 프로젝트에서는 React를 사용하여 프론트엔드를 구현하였으며 TMDB API를 호출하여
                     영화 데이터를 불러오는 작업을 진행했습니다. 이 과정에서 React Hooks를 사용해 컴포넌트의 상태와
                     생명주기를 관리하고 Redux를 통해 전역 상태 관리를 효율적으로 처리했습니다. 이를 통해 대규모
                     애플리케이션에서의 데이터 흐름과 상태 관리의 중요성을 배우고 실제 서비스 수준의 API 연동 및 데이터
                     처리를 경험할 수 있었습니다.
                  </p>
               </div>

               <div className='second_line'></div>
               <div className='frontend_skill'>
                  <h2 className='skill_title'>😎 주요 구현</h2>
                  <div className='f_first'>
                     <h3>📌 장르 구분</h3>
                     <p>
                        TMDB를 이용해 장르를 불러와서 처음 홈 화면에서 페이지네이션 되어 나오는 영화에 마우스를 올렸을
                        시, 해당 영화의 장르를 표시해주었습니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 키워드 검색</h3>
                     <p>
                        영화를 검색할 때 키워드를 사용하여 원하는 영화를 검색할 수 있도록 하였습니다. 그리고 검색을 하는
                        동안 로딩 스피너를 추가하였습니다.
                     </p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='backend_skill'>
                  <h2 className='skill_title'>🧐 추가할 사항</h2>
                  <div className='b_first'>
                     <h3>📌 필터</h3>
                     <p>필터 기능을 사용해 원하는 영화를 세분화하여 검색할 수 있도록 한다.</p>
                  </div>
                  <div className='b_second'>
                     <h3>📌 상세페이지 디자인</h3>
                     <p>클릭한 영화에 대한 상세 정보를 나타낼 수 있게 한다.</p>
                  </div>
                  <div className='b_third'>
                     <h3>📌 리뷰</h3>
                     <p>리뷰도 TMDB를 통해 api를 호출하여 불러온 후 상세페이지에서 보여주도록 한다.</p>
                  </div>
                  <div className='b_fourth'>
                     <h3>📌 예고편 보여주기</h3>
                     <p>react-youtube를 다운받아서 modal을 띄우고 예고편을 불러온다.</p>
                  </div>
               </div>
            </div>
            <div className='btn_box'>
               <button onClick={closeModal} className='close_btn'>
                  닫기
               </button>
            </div>
         </div>
      </div>
   );
}
