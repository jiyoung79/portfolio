import React from 'react';
import '../modal/Modal.style.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal4({ isOpen, closeModal }) {
   if (!isOpen) return null;

   return (
      <div className='modal_overlay'>
         <div className='modal_content'>
            <div className='modal_title'>
               <h1>프로젝트 세부사항</h1>
            </div>
            <div className='text'>
               <h2 className='project_title'>프로젝트명: Kang's Portfolio</h2>
               <div className='skill_stack'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPowerOff} className='modal_icon' />
                     기술 스택
                  </h2>
                  <p>HTML, CSS, JavaScript, React, ReactRouter, React Router Dom</p>
                  <button
                     className='code'
                     onClick={() =>
                        window.open('https://github.com/jiyoung79/portfolio.git', '_blank', 'noopener,noreferrer')
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
                     포트폴리오 사이트는 리액트를 독학하며 처음부터 끝까지 직접 제작한 결과물로 개발자로서의 역량과 성장
                     과정을 효과적으로 보여주기 위해 기획되었습니다. 이 사이트는 제가 습득한 다양한 기술과 프로젝트를
                     정리하였습니다. 단순한 기술 나열에 그치지 않고 각 프로젝트에 대한 구체적인 설명과 성과를
                     담아냄으로써 제 자신이 성장해 온 과정을 통해 얻은 경험과 꾸준함을 전달하려는 목표가 드러나
                     있습니다.
                  </p>
               </div>

               <div className='second_line'></div>
               <div className='frontend_skill'>
                  <h2 className='skill_title'>😎 주요 구현</h2>
                  <div className='f_first'>
                     <h3>📌 메뉴 클릭 시 스크롤 이벤트</h3>
                     <p>
                        메뉴 모달을 클릭하고 sub 메뉴를 클릭하면 해당 칸으로 스크롤이 이동하는 이벤트를 구현하였습니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 미디어쿼리</h3>
                     <p>
                        창을 1100px로 줄였을 때 부터 미디어쿼리를 적용하여 창이 줄어도 보이는데 불편함이 없도록
                        구현하였습니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 프로젝트 세부사항</h3>
                     <p>
                        프로젝트를 소개할 때 UI의 간결함을 위해 따로 모달창 버튼을 만들어 그 안에서 해당 프로젝트의
                        Readme를 볼 수 있도록 구현하였습니다.
                     </p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='closing'>
                  <h3>💡 느낀점</h3>
                  <p>
                     Kang’s Portfolio를 개발하면서 전체적인 프로젝트 구조와 UI/UX의 중요성을 깊이 체감했습니다. 각
                     섹션을 사용자에게 직관적이고 깔끔하게 전달하기 위해 HTML과 CSS로 스타일링하며 화면 전반의 일관성을
                     유지하기 위해 배경 이미지와 색상 배치를 신경 썼습니다. React의 컴포넌트 기반 구조 덕분에 각 섹션을
                     독립적으로 개발할 수 있었으며 유지보수에도 용이하게 설계할 수 있었습니다. 또한 페이지 로딩 성능을
                     최적화하고 프로젝트와 관련된 정보를 효과적으로 전달하기 위해 다양한 컴포넌트와 사용자 인터랙션을
                     고려하여 UI를 설계했습니다. 이 포트폴리오를 통해 저의 경험과 기술을 체계적으로 정리하면서
                     개발자로서 스스로를 표현하는 법을 익히게 되었고 기술 구현뿐 아니라 디자인과 사용자 경험을 함께
                     고려한 전체적인 사이트 구축 능력을 조금 더 성장시킬 수 있었습니다.
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
