import React from 'react';
import '../modal/Modal.style.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal6({ isOpen, closeModal }) {
   if (!isOpen) return null;

   return (
      <div className='modal_overlay'>
         <div className='modal_content'>
            <div className='modal_title'>
               <h1>프로젝트 세부사항</h1>
            </div>
            <div className='text'>
               <h2 className='project_title'>프로젝트명: 날씨 앱</h2>
               <div className='skill_stack'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPowerOff} className='modal_icon' />
                     기술 스택
                  </h2>
                  <p>HTML, CSS, React</p>
               </div>
               <div className='second_line'></div>
               <div className='purpose'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPenToSquare} className='modal_icon' />
                     개발동기 및 목적
                  </h2>
                  <p>
                     날씨 앱은 일상생활에서 유용하며, API를 통한 데이터 가져오기와 UI 상태 관리를 학습할 수 있는
                     프로젝트로 적합하다고 생각해 개발하게 되었습니다. 이 프로젝트를 통해 React에서의 API 호출 및 상태
                     관리, 특히 useEffect를 활용한 비동기 데이터 호출을 연습할 수 있었습니다.
                  </p>
               </div>

               <div className='second_line'></div>
               <div className='frontend_skill'>
                  <h2 className='skill_title'>😎 주요 구현</h2>
                  <div className='f_first'>
                     <h3>📌 현재 위치 기반 날씨 표시</h3>
                     <p>
                        앱 실행 시 getCurrentLocation 함수를 통해 사용자의 위도와 경도를 가져와 useEffect에서
                        호출합니다. 이를 통해 현재 위치의 날씨 정보를 표시합니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 로딩 스피너</h3>
                     <p>날씨 데이터를 불러오는 동안 로딩 스피너를 추가하여 사용자 경험을 개선했습니다.</p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 온도 변환 기능</h3>
                     <p>섭씨, 화씨, 도씨 등 온도를 선택해 볼 수 있도록 구현했습니다.</p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='closing'>
                  <h3>💡 느낀점</h3>
                  <p>
                     날씨 앱 프로젝트를 통해 비동기 처리와 위치 기반 API 활용에 대한 이해를 할 수 있었습니다. useEffect의
                     의존성 배열을 이용해 상태가 변경될 때만 데이터를 호출함으로써 효율적인 렌더링을 구현했고 이를 통해
                     불필요한 API 호출을 줄일 수 있었습니다. 그리고 navigator.geolocation을 사용해 위치 정보를 받아오는
                     과정에서 오류 처리 같은 실무적인 부분을 다뤄볼 수 있었습니다. 온도 변환 기능을
                     구현하며 연산과 컴포넌트 렌더링을 분리하는 최적화의 중요성을 깨달았고 로딩 스피너로 사용자에게
                     데이터 로딩 상태를 피드백하여 사용자 경험을 개선하였습니다. 이를 통해 React의 상태
                     관리와 생명 주기를 보다 효과적으로 다룰 수 있는 능력을 키울 수 있었습니다.
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
