import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './css/Footer.style.css'; // 일반 CSS 파일을 import

export default function Footer() {
   return (
      <footer className='footer'>
         <div className='footer-content'>
            <p>© 2024. Kang Ji yeong. All rights reserved.</p>
         </div>
      </footer>
   );
}
