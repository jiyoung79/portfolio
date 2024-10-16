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
                <div className='java'>Java</div>
                <div className='js'>JavaScript</div>
                <div className='sql'>SQL</div>
             </div>
             <div className='frontend'>
                <p>Frontend</p>
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
             <div className='backend'>
                <p>Backend</p>
                <div>Spring</div>
                <div>Spring Boot</div>
                <div>Spring Security</div>
                <div>MySQL</div>
                <div>RESTful API</div>
                <div>MyBatis</div>
                <div>JSP</div>
             </div>
             <div className='devops'>
                <p>DevOps</p>
                <div>Vercel</div>
                <div>Netlify</div>
             </div>
          </div>
       </div>
    );
}
