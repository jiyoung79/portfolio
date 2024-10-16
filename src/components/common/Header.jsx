import { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/Header.style.css';

export default function Header() {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const toggleModal = () => {
      setIsModalOpen(!isModalOpen);
   };

   return (
      <header className='header'>
         <Link to='/' className='header_name'>
            KJY's PortFolio
         </Link>
         <button className='modal_btn' onClick={toggleModal}>
            <div></div>
            <div></div>
            <div></div>
         </button>
         <div className={`modal ${isModalOpen ? 'slide-in' : ''}`}>
            <ul>
               <Link to='/'>
                  <li>About Me</li>
               </Link>
               <Link to='/'>
                  <li>Skills</li>
               </Link>
               <Link to='/'>
                  <li>Archiving</li>
               </Link>
               <Link to='/'>
                  <li>Projects</li>
               </Link>
            </ul>
         </div>
      </header>
   );
}
