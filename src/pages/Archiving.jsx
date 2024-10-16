import React from 'react';
import { Link } from 'react-router-dom';
import './css/Archiving.style.css';
import githubImage from '../images/github.png'; // 이미지 경로 가져오기
import notionImage from '../images/notion.png';

export default function Archiving() {
   return (
      <div className='archiving'>
         <h1 className='title'>Archiving</h1>
         <div className='middle_line'></div>
         <div className='archiving-content'>
            <div className='archv-wrapper'>
               <h1 className='archv-title'>GITHUB</h1>
               <Link
                  to='#'
                  onClick={() => window.open('https://github.com/jiyoung79', '_blank', 'noopener,noreferrer')}
                  className='github_archv'>
                  <img src={githubImage} alt='GitHub Archive' className='github_img' />
                  <p>소스 코드 저장소</p>
               </Link>
            </div>
            <div className='archv-wrapper'>
               <h1 className='archv-title'>NOTION</h1>
               <Link
                  to='#'
                  onClick={() =>
                     window.open(
                        'https://www.notion.so/9ab0b9f9c33640689b07920514af02fc?pvs=4',
                        '_blank',
                        'noopener,noreferrer',
                     )
                  }
                  className='notion_archv'>
                  <img src={notionImage} alt='Notion Archive' className='notion_img' />
                  <p>스터디 로그 및 오류 로그 노션 페이지</p>
               </Link>
            </div>
         </div>
      </div>
   );
}
