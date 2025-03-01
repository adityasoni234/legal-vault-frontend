import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Documents from './pages/Documents';
import GenerateDocument from './pages/GenerateDocument';
import Auth from './pages/Auth';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated') === 'true';
    setIsAuthenticated(authStatus);
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/auth" element={<Auth setIsAuthenticated={setIsAuthenticated} />} />
        
        {isAuthenticated ? (
          <Route path="/*" element={<Layout><Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/documents" element={<Documents />} />
            <Route path="/generate-document/:docType" element={<GenerateDocument />} />
          </Routes></Layout>} />
        ) : (
          <Route path="/*" element={<Navigate to="/auth" replace />} />
        )}
      </Routes>
    </Router>
  );
};

export default App;
