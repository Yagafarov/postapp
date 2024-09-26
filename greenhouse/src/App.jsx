import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { auth } from './firebase';
import Dashboard from './pages/Dashboard';
import Login from './components/Auth/Login';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import NotFound from './pages/NotFound';
import Header from '../src/components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar';
import Statistics from './pages/Statistics';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    return localStorage.getItem('isAuthenticated') === 'true';
  });

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        setIsAuthenticated(false);
        localStorage.setItem('isAuthenticated', 'false');
      }
    });

    return () => unsubscribe(); // Cleanup the subscription on unmount
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <Routes>
      <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
      <Route
        path="*"
        element={
          <Layout
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
            isAuthenticated={isAuthenticated}
          />
        }
      />
    </Routes>
  );
};

const Layout = ({ darkMode, toggleDarkMode, toggleSidebar, isSidebarOpen, isAuthenticated }) => {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <div className={`${darkMode ? 'dark' : ''} font-quickSand`}>
      {!isLoginPage && <Header toggleDarkMode={toggleDarkMode} darkMode={darkMode} toggleSidebar={toggleSidebar} />}
      {!isLoginPage && <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />}
      <Routes>
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<Dashboard darkMode={darkMode} />} isAuthenticated={isAuthenticated} />}
        />

        <Route
          path="/statistics"
          element={<ProtectedRoute element={<Statistics darkMode={darkMode} />} isAuthenticated={isAuthenticated} />}
        />

        <Route path="/" element={<ProtectedRoute element={<Dashboard darkMode={darkMode} />} isAuthenticated={isAuthenticated} />} />
        <Route path="*" element={<ProtectedRoute element={<NotFound darkMode={darkMode} />} isAuthenticated={isAuthenticated} />} />
      </Routes>
    </div>
  );
};

export default App;