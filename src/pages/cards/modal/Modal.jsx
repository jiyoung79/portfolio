import React from 'react';
import '../modal/Modal.style.css';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Modal({ isOpen, closeModal }) {
   if (!isOpen) return null;

   return (
      <div className='modal_overlay'>
         <div className='modal_content'>
            <div className='modal_title'>
               <h1>프로젝트 세부사항</h1>
            </div>
            <div className='text'>
               <h2 className='project_title'>프로젝트명: Stay Connect</h2>
               <div className='skill_stack'>
                  <h2 className='skill_title'>
                     <FontAwesomeIcon icon={faPowerOff} className='modal_icon' />
                     기술 스택
                  </h2>
                  <h3>
                     프론트엔드:
                     <li>HTML, CSS, JavaScript, Axios, jQuery, Thymeleaf</li>
                  </h3>
                  <h3>
                     백엔드:
                     <li> Spring Boot, Spring Security, Gradle, MySQL</li>
                  </h3>
                  <h3>
                     웹 서버:
                     <li> Nginx</li>
                  </h3>
                  <h3>
                     웹 어플리케이션 서버:
                     <li>Apache Tomcat</li>
                  </h3>
                  <h3>
                     DevOps:
                     <li>Docker, Docker Hub, Git, GitHub, Docker Compose, Dependabot, Github Actions</li>
                  </h3>
                  <button
                     className='code'
                     onClick={() =>
                        window.open(
                           'https://github.com/caterpillar-team/STAY_CONNECT.git',
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
                     저희는 기존 숙박업소 웹에 관리자와의 실시간 채팅 기능을 추가하고자 했습니다.
                     이는 고객 서비스 향상, 예약 전환율 증가, 데이터 수집 및 분석, 그리고 비용 절감을 목적으로 했습니다.
                     주소 검색을 통해 지도 좌표로 근처 숙소를 추천하는 기능도 추가했습니다. 또한, 그간의
                     학습과 기술 습득을 위해 진행되었습니다.
                  </p>
               </div>
               <div className='second_line'></div>
               <div className='design'>
                  <h2 className='skill_title'>🎨 웹 페이지 이름과 로고</h2>
                  <p>
                     웹 페이지 이름은 “StayConnect”로, 머무르다의 의미를 가진 ‘Stay’와 연결되다의 의미를 가진 ‘Connect’를 합친 것입니다. 로고는 Stay의 S와 Connect의 C가 겹쳐진 형태로, 연결을 상징하는 직관적인 디자인입니다.
                  </p>
               </div>
               <div className='second_line'></div>
               <div className='frontend_skill'>
                  <h2 className='skill_title'>😎 프론트엔드 구현</h2>
                  <div className='f_first'>
                     <h3>📌 홀리 그레일 레이아웃</h3>
                     <p>
                        화면을 left aside, main, right aside로 나누어 통일된 레이아웃을 구현했습니다. 각 부분을 프래그먼트로 구조화하여 유지보수성을 높였습니다.
                     </p>
                  </div>
                  <div className='f_second'>
                     <h3>📌 CSS</h3>
                     <p>
                        공통적으로 사용하는 헤더, 푸터, CDN, JavaScript는 레이아웃에 모아 한꺼번에 적용하여 유지보수를 쉽게 하였습니다.
                     </p>
                  </div>
                  <p>그리고 CSS와 HTML 폴더 및 파일을 동일한 구조로 만들어 유지보수를 관리하기 용이하게 하였습니다.</p>
               </div>
               <div className='second_line'></div>
               <div className='backend_skill'>
                  <h2 className='skill_title'>🤓 백엔드 구현</h2>
                  <div className='b_first'>
                     <h3>📌 보안</h3>
                     <p>
                         API key 또는 secret key와 같은 값들은 .env 파일에 분리 후 .gitignore 파일에 추가하여 GitHub 레파지토리에서 확인하지 못하게 하였습니다.
                     </p>
                  </div>
                  <div className='b_second'>
                     <h3>📌 환경 분리</h3>
                     <p>
                        개발환경과 배포환경을 분리하기 위해 application-dev.properties와 application-prod.properties로 나누었습니다.
                     </p>
                  </div>
                  <div className='b_third'>
                     <h3>📌 Docker-compose</h3>
                     <p>개발환경, 테스트 로컬 배포, AWS 배포 파일로 분리하였습니다.</p>
                  </div>
                  <div className='b_fourth'>
                     <h3>📌 Dependabot</h3>
                     <p>종속성 오류 시 알림 및 해결방법 제공, 또는 직접 pull request를 작성하였습니다.</p>
                  </div>
                  <div className='b_fifth'>
                     <h3>📌 CI/CD</h3>
                     <p>GitHub Action 설정 파일로 StayConnect-Action.yml을 두어 CI/CD를 구현하였습니다.</p>
                  </div>
               </div>
               <div className='second_line'></div>
               <div className='closing'>
                  <h2>💡 느낀점</h2>
                  <p>
                     이번 첫 개발 프로젝트를 통해 다양한 기술과 도구를 실습하며 큰 성장을 경험했습니다. 프론트엔드
                     구현을 담당하며 HTML, CSS, JavaScript로 사용자 인터페이스를 설계했고 와이어프레임부터 실제 화면까지
                     구현하면서 UI/UX 설계의 중요성을 체감했습니다. 결제 기능과 마이페이지의 개인정보 수정 기능을 CRUD로
                     구현하며 데이터 처리와 보안을 이해했고 Spring Boot와 Thymeleaf를 활용해 백엔드와 프론트엔드 간의
                     데이터를 연결하고 서버 로직을 통해 사용자 입력을 처리하는 흐름을 익혔습니다. 이번 프로젝트를 통해
                     특히 협업에서의 소통 중요성을 깊이 깨달았습니다. 팀원들과의 진행 상황 공유가 미흡할 경우 작은
                     문제가 큰 오류로 이어질 수 있다는 점을 경험했습니다. 예를 들어 프론트엔드 UI가 백엔드 API와 맞지
                     않아 디버깅에 시간을 소요했는데 사전 소통이 있었다면 시간을 절약할 수 있었을 것입니다. 이후
                     주기적인 스크럼 회의를 통해 진행 상황을 점검하고 협력하며 문제 해결 속도와 효율성이 크게
                     향상되었습니다. 이를 통해 협업에서 소통은 필수적이며 프로젝트의 성공적 완료를 위해 반드시 신경 써야
                     한다는 점을 깨달았습니다.
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
