import React from 'react';
import './css/Projects.style.css';
import Card from './cards/Card';
import Card2 from './cards/Card2';
import Card3 from './cards/Card3';
import Card4 from './cards/Card4';
import Card5 from './cards/Card5';
import Card6 from './cards/Card6';

export default function Projects() {
   return (
      <div className='projects'>
         <h1 className='title'>Projects</h1>
         <div className='middle_line'></div>
         <div className='cards'>
            <Card />
            <Card4 />
            <Card2 />
            <Card3 />
            <Card5 />
            <Card6 />
         </div>
      </div>
   );
}
