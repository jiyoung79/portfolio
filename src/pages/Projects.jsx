import React from 'react';
import './css/Projects.style.css';
import Card from './cards/Card';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';

export default function Projects() {
   return (
      <div className='projects'>
         <h1 className='title'>Projects</h1>
         <div className='middle_line'></div>
         <div className='cards'>
            <Card />
            <Card2 />
            <Card3 />
         </div>
      </div>
   );
}
