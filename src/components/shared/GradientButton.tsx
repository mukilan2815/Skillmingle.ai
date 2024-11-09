import React from 'react';
import { motion } from 'framer-motion';

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export default function GradientButton({ 
  children, 
  onClick, 
  className = '',
  variant = 'primary'
}: GradientButtonProps) {
  const baseClasses = "relative px-6 py-3 rounded-lg font-medium text-white overflow-hidden transition-all duration-300";
  const gradientClasses = variant === 'primary' 
    ? "bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 hover:scale-105"
    : "bg-gradient-to-r from-gray-800 to-gray-900 hover:scale-105";

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseClasses} ${gradientClasses} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-white opacity-0 hover:opacity-20 transition-opacity" />
    </motion.button>
  );
}