import React from 'react';
import './css/NotFound.style.css';

export default function NotFound() {
   return (
      <div className='flex flex-col items-center justify-center'>
         <h1 className='text-4xl font-bold mb-4'>404</h1>
         <p className='text-xl'>페이지를 찾을 수 없습니다.</p>
      </div>
   );
}
