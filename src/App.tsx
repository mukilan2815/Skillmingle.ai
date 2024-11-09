import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectCard from './components/ProjectCard';
import ComparisonTable from './components/pricing/ComparisonTable';
import AuthModal from './components/auth/AuthModal';
import DashboardStats from './components/dashboard/DashboardStats';
import Footer from './components/Footer';
import TalentSearch from './pages/TalentSearch';
import ProjectListing from './pages/ProjectListing';
import ProfileSetup from './pages/ProfileSetup';
import { storage } from './utils/localStorage';
import { mockProjects, mockUsers, mockNotifications } from './data/mockData';

// Initialize mock data in localStorage
if (!localStorage.getItem('freelance_projects')) {
  localStorage.setItem('freelance_projects', JSON.stringify(mockProjects));
}
if (!localStorage.getItem('freelance_users')) {
  localStorage.setItem('freelance_users', JSON.stringify(mockUsers));
}

function App() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');
  const currentUser = storage.getCurrentUser();

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar onAuthClick={() => setIsAuthOpen(true)} />
        
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ComparisonTable />
            </>
          } />
          
          <Route 
            path="/dashboard" 
            element={
              currentUser ? (
                <div className="pt-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                  <h1 className="text-3xl font-bold text-gray-900 mb-8">Dashboard</h1>
                  <DashboardStats />
                </div>
              ) : (
                <Navigate to="/profile-setup" replace />
              )
            } 
          />

          <Route path="/talents" element={<TalentSearch />} />
          <Route path="/projects" element={<ProjectListing />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
        </Routes>

        <AuthModal
          isOpen={isAuthOpen}
          onClose={() => setIsAuthOpen(false)}
          mode={authMode}
        />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;