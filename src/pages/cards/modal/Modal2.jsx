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
                  <button
                     className='code'
                     onClick={() =>
                        window.open(
                           'https://github.com/jiyoung79/Netflix_clonecoding.git',
                           '_blank',
                           'noopener,noreferrer',
                        )
                     }>
                     소스코드 보러가기
                  </button>
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
               <div className='second_line'></div>
               <div className='closing'>
                  <h2>💡 느낀점</h2>
                  <p>
                     Netflix 클론 코딩 프로젝트를 1인 개발로 진행하며 리액트 hook과 state를 활용한 프론트엔드 개발
                     경험을 쌓았습니다. TMDB API를 통해 데이터를 가져오고 useState와 useEffect 같은 리액트 hook을 사용해
                     비동기 데이터 요청을 관리하며 효율적인 상태 관리를 배웠습니다. Redux를 통해 글로벌 상태를
                     관리하면서 로딩과 에러 상태를 처리하여 사용자 경험을 개선하는 방법을 익혔습니다. 컴포넌트 단위로
                     UI를 나누어 코드 재사용성과 유지보수성을 높였고 영화 데이터를 필터링하고 정렬해 사용자가 원하는
                     콘텐츠를 쉽게 찾을 수 있도록 구성했습니다. 복잡한 UI를 다루며 CSS와 반응형 디자인의 필요성을 느꼈고
                     프로젝트 전반을 혼자 설계하고 개발하면서 인터페이스 설계와 데이터 흐름의 중요성을 다시 한번
                     배웠습니다. 또한 미완성이지만 꾸준히 개발할 목표와 추가할 사항을 체크하며 1인 개발로서 프로젝트를
                     체계적이고 효율적으로 관리하는 방법도 경험하게 되었습니다.
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
