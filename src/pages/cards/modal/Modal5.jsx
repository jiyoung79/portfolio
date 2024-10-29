import React from 'react';
import '../modal/Modal.style.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal5({ isOpen, closeModal }) {
   if (!isOpen) return null;

   return (
      <div className='modal_overlay'>
         <div className='modal_content'>
            <div className='modal_title'>
               <h1>프로젝트 세부사항</h1>
            </div>
            <div className='text'>
               <h2 className='project_title'>프로젝트명: 가위바위보 앱</h2>
               <div className='skill_stack'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPowerOff} className='modal_icon' />
                     기술 스택
                  </h2>
                  <p>HTML, CSS, JavaScript, React</p>
                  <button
                     className='code'
                     onClick={() =>
                        window.open(
                           'https://github.com/jiyoung79/React_RockPaperScissor.git',
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
                     이 프로젝트는 React 학습을 목적으로 간단한 게임을 통해 React의 상태 관리와 이벤트 처리를 연습하기
                     위해 개발되었습니다. React의 콜백 함수와 조건부 렌더링을 이해하고 오류 처리를 통해 예외 상황을
                     효과적으로 다루는 방법을 배우는 데 중점을 두었습니다.
                  </p>
               </div>

               <div className='second_line'></div>
               <div className='frontend_skill'>
                  <h2 className='skill_title'>😎 주요 구현</h2>
                  <div className='f_first'>
                     <h3>📌 버튼 클릭을 통한 사용자 선택</h3>
                     <p>사용자는 버튼을 클릭해 ‘가위’, ‘바위’, ‘보’ 중 하나를 선택합니다.</p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 랜덤 컴퓨터 선택</h3>
                     <p>Math.random()을 활용해 컴퓨터가 무작위로 선택합니다.</p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 결과 판단 및 출력</h3>
                     <p>선택된 값들을 비교하여 ‘승’, ‘패’, ‘무승부’의 결과를 화면에 출력합니다.</p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 에러 방지를 위한 조건부 렌더링</h3>
                     <p>props 값이 null일 때 발생하는 에러를 조건부 렌더링으로 해결했습니다.</p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='closing'>
                  <h3>💡 느낀점</h3>
                  <p>
                     이 프로젝트를 통해 React의 이벤트 처리와 상태 관리의 중요성을 체감했습니다. 콜백 함수를 이해하고
                     적용하는 과정에서 React가 컴포넌트를 렌더링하는 방식과 이벤트가 동작하는 순서를 명확히 알게
                     되었습니다. 또한 랜덤 값을 통한 컴퓨터 선택 기능을 구현하며 JavaScript의 다양한 내장 함수 사용법을
                     더욱 깊이 이해하게 되었습니다.
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
