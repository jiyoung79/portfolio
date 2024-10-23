import React from 'react';
import './css/Projects.style.css';
import Card from './cards/Card';

export default function Projects() {
   return (
      <div className='projects'>
         <h1 className='title'>Projects</h1>
         <div className='middle_line'></div>
         <div className='cards'>
            <Card />
         </div>
      </div>
   );
}
