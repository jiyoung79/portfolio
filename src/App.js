import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import NotFound from './pages/NotFound';
import Layout from './layouts/Layouts';
import Aboutme from './pages/Aboutme';

function App() {
   return (
      <Layout>
         <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/' element={<Aboutme />} />
            <Route path='/' element={<Projects />} />
            <Route path='/' element={<ProjectDetails />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </Layout>
   );
}

export default App;
