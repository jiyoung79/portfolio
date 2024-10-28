import React from 'react';
import '../modal/Modal.style.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal3({ isOpen, closeModal }) {
   if (!isOpen) return null;

   return (
      <div className='modal_overlay'>
         <div className='modal_content'>
            <div className='modal_title'>
               <h1>프로젝트 세부사항</h1>
            </div>
            <div className='text'>
               <h2 className='project_title'>프로젝트명: H&M 클론코딩</h2>
               <div className='skill_stack'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPowerOff} className='modal_icon' />
                     기술 스택
                  </h2>
                  <h3>프론트엔드:</h3>
                  <li>HTML, CSS, JavaScript, Axios, React, ReactRouter, React Router Dom</li>
               </div>
               <div className='second_line'></div>
               <div className='purpose'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPenToSquare} className='modal_icon' />
                     개발동기 및 목적
                  </h2>
                  <p>
                     h&m 클론코딩에서는 로그인 상태에 따라 특정 페이지 접근을 제한하고 Redux와 thunk를 통해 데이터를
                     관리하는 실무 경험을 쌓기 위한 프로젝트입니다. 로그인 상태에서는 상품의 상세 페이지에 접근이
                     가능하지만 로그아웃 시에는 제한이 걸리도록 해 보안과 접근 제어를 구현했습니다. 또한 Redux를 사용해
                     상품 목록을 효율적으로 관리하고 thunk를 통해 비동기 API 호출을 처리하여 로딩, 성공, 실패 상태를
                     관리하는 방법을 익힐 수 있었습니다. 이 과정에서 상태 관리와 데이터 흐름의 일관성을 유지하는 방법을
                     배울 수 있었고 확장 가능한 구조 설계를 경험할 수 있었습니다.
                  </p>
               </div>

               <div className='second_line'></div>
               <div className='frontend_skill'>
                  <h2 className='skill_title'>😎 주요 구현</h2>
                  <div className='f_first'>
                     <h3>📌 로그인 로그아웃</h3>
                     <p>
                        redux와 action을 사용하여 로그인과 로그아웃을 구현하였고 권한을 주어 로그인을 했을 시에만 상품
                        상세 페이지를 볼 수 있도록 하였습니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 키워드 검색</h3>
                     <p>
                        키워드로 상품을 검색할 수 있는 기능으로 검색 시 상품 키워드가 없을 때에는 없다는 메세지가 뜨게
                        하였습니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 상품 목록 구분</h3>
                     <p>
                        Conscious choice와 신제품 카테고리로 분류하여 해당되는 제품은 전체 상품 페이지에서 해당 키워드가
                        보이도록 하였습니다.
                     </p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='backend_skill'>
                  <h2 className='skill_title'>🧐 추가할 사항</h2>
                  <div className='b_first'>
                     <h3>📌 메뉴</h3>
                     <p>
                        메뉴를 구분만 해두고 상세로 나누지 않아서 해당 메뉴를 누르면 그 카테고리에 맞는 상품들을
                        보이도록 한다.
                     </p>
                  </div>
                  <div className='b_second'>
                     <h3>📌 장바구니</h3>
                     <p>상품 상세 페이지에서 상품을 선택하여 장바구니로 이동하도록 구현한다.</p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='closing'>
                  <h2>💡 느낀점</h2>
                  <p>
                     H&M 클론 코딩 프로젝트는 리액트를 처음 사용한 클론 코딩 프로젝트로 기초적인 리액트 구조와 Redux를
                     통한 전역 상태 관리에 집중하며 많은 것을 배웠습니다. 제품 관리와 비동기 API 호출을 위해
                     Redux와 thunk를 활용하면서 데이터의 흐름을 통제하는 법과 비동기 처리를 안정적으로 구현하는 것을
                     배우고 적용시켜보았습니다. 그리고 로그인/로그아웃 기능 구현을 통해 사용자 인증을 경험하면서 제품
                     상세 페이지에 접근을 제한하는 인증 로직을 적용해 보안의 중요성도 실감할 수 있었습니다. 다양한
                     컴포넌트 간의 데이터를 연결하며 리액트의 컴포넌트 구조와 Redux 상태 관리의 조화를 이해하게 되었고
                     UI 스타일링과 반응형 디자인을 통해 사용자 경험을 개선하는 방법을 익혔습니다.
                  </p>
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
