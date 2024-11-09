import React from 'react';
import { Bell, Menu, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import GradientButton from './shared/GradientButton';

interface NavbarProps {
  onAuthClick: () => void;
}

export default function Navbar({ onAuthClick }: NavbarProps) {
  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 text-transparent bg-clip-text">
              Mingle.ai
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/dashboard" className="text-gray-700 hover:text-gray-900">Dashboard</Link>
            <Link to="/projects" className="text-gray-700 hover:text-gray-900">Projects</Link>
            <Link to="/talents" className="text-gray-700 hover:text-gray-900">Find Talent</Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Bell className="h-6 w-6 text-gray-600" />
            </button>
            <GradientButton onClick={onAuthClick}>
              Sign In
            </GradientButton>
            <button className="md:hidden p-2 rounded-full hover:bg-gray-100">
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}