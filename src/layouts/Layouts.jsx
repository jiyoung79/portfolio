import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import './Layouts.style.css'; // 배경 이미지가 정의된 CSS 파일을 가져옵니다.
import Dashboard from '../pages/Dashboard';
import Aboutme from '../pages/Aboutme';
import Skills from '../pages/Skills';
import Projects from '../pages/Projects';
import Archiving from '../pages/Archiving';

export default function Layout({ children }) {
   return (
      <div className='layout-container flex flex-col min-h-screen'>
         <Header />
         <Dashboard />
         <Aboutme />
         <Skills />
         <Archiving />
         <Projects />
         {/* <Footer /> */}
      </div>
   );
}
