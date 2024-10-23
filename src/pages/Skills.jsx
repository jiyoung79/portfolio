import React from 'react';
import './css/Skills.style.css';

export default function Skills() {
   return (
      <div className='skill'>
         <h1 className='title'>Skills</h1>
         <div className='middle_line'></div>
         <div className='box'>
            <div className='language'>
               <p>Language</p>
               <div className='language_list'>
                  <div className='java'>Java</div>
                  <div className='js'>JavaScript</div>
                  <div className='sql'>SQL</div>
               </div>
            </div>
            <div className='frontend'>
               <p>Frontend</p>
               <div className='frontend_list'>
                  <div className='html'>Html</div>
                  <div className='css'>CSS</div>
                  <div className='tail'>Tailwind CSS</div>
                  <div className='jquery'>JQuery</div>
                  <div className='ajax'>Ajax</div>
                  <div className='react'>React</div>
                  <div className='react_q'>React-Query</div>
                  <div className='react_h'>React Hook</div>
                  <div className='react_d'>React-dom</div>
               </div>
            </div>
            <div className='backend'>
               <p>Backend</p>
               <div className='backend_list'>
                  <div>Spring</div>
                  <div className='boot'>Spring Boot</div>
                  <div className='security'>Spring Security</div>
                  <div>MySQL</div>
                  <div className='api'>RESTful API</div>
                  <div>MyBatis</div>
                  <div className='jsp'>JSP</div>
               </div>
            </div>
            <div className='devops'>
               <p>DevOps</p>
               <div className='devops_list'>
                  <div>Vercel</div>
                  <div>Netlify</div>
               </div>
            </div>
         </div>
      </div>
   );
}
