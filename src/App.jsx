import Navbar from './components/NavBar';

import AboutPage from './pages/AboutPage';
import ProjectsPage from './pages/ProjectsPage';
import ErrorPage from './pages/ErrorPage';
import HomePageWithNavigate from './pages/HomePageWithNavigate';
import ProjectDetailsPage from './pages/ProjectDetailsPage';

import { Routes, Route } from 'react-router-dom';

import projectsData from './projects-data.json'; // <== IMPORT

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        {/* <Route  path="/" element={<HomePage />} /> */}
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />} />

        <Route
          path="/projects"
          element={<ProjectsPage projects={projectsData} />}
        />
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
