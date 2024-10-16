import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './css/Footer.style.css'; // 일반 CSS 파일을 import

export default function Footer() {
   return (
      <footer className='footer'>
         <div className='footer-content'>
            <div className='social-icons'>
               <Link to='#' aria-label='Instagram'>
                  <FaInstagram className='icon' />
               </Link>
               <Link to='#' aria-label='Facebook'>
                  <FaFacebook className='icon' />
               </Link>
               <Link to='#' aria-label='Twitter'>
                  <FaTwitter className='icon' />
               </Link>
            </div>
         </div>
      </footer>
   );
}
