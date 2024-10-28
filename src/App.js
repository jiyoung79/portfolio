import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layouts';
import Aboutme from './pages/Aboutme';
import Archiving from './pages/Archiving';
import Skills from './pages/Skills';

function App() {
   return (
      <Layout>
         <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/' element={<Aboutme />} />
            <Route path='/' element={<Skills />} />
            <Route path='/' element={<Archiving />} />
            <Route path='/' element={<Projects />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Layout>
   );
}

export default App;
