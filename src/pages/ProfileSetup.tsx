import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, Plus, X } from 'lucide-react';
import { storage } from '../utils/localStorage';
import { User } from '../types';
import GradientButton from '../components/shared/GradientButton';

const availableSkills = [
  'React', 'Node.js', 'Python', 'JavaScript', 'TypeScript', 'UI/UX',
  'Blockchain', 'Smart Contracts', 'AI/ML', 'DevOps', 'AWS', 'Docker'
];

export default function ProfileSetup() {
  const [step, setStep] = useState(1);
  const [profile, setProfile] = useState<Partial<User>>({
    type: 'freelancer',
    skills: [],
    verified: false,
    completedProjects: 0,
  });

  const handleSkillToggle = (skill: string) => {
    setProfile(prev => ({
      ...prev,
      skills: prev.skills?.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...(prev.skills || []), skill]
    }));
  };

  const handleSubmit = () => {
    if (profile.name && profile.type) {
      const newUser: User = {
        id: Date.now().toString(),
        name: profile.name,
        type: profile.type,
        avatar: profile.avatar || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
        rating: 0,
        verified: false,
        skills: profile.skills,
        completedProjects: 0,
      };

      storage.addUser(newUser);
      storage.setCurrentUser(newUser);
      // Redirect to dashboard
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="px-6 py-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Complete Your Profile</h2>

          <div className="space-y-8">
            {step === 1 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Profile Picture
                  </label>
                  <div className="mt-2 flex items-center space-x-4">
                    <div className="h-24 w-24 rounded-full bg-gray-200 flex items-center justify-center">
                      {profile.avatar ? (
                        <img
                          src={profile.avatar}
                          alt="Profile"
                          className="h-24 w-24 rounded-full object-cover"
                        />
                      ) : (
                        <Upload className="h-8 w-8 text-gray-400" />
                      )}
                    </div>
                    <button className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50">
                      Change
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={profile.name || ''}
                    onChange={(e) => setProfile(prev => ({ ...prev, name: e.target.value }))}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">
                    I am a
                  </label>
                  <div className="mt-2 grid grid-cols-2 gap-4">
                    {['freelancer', 'client'].map((type) => (
                      <button
                        key={type}
                        onClick={() => setProfile(prev => ({ ...prev, type: type as 'freelancer' | 'client' }))}
                        className={`px-4 py-3 border rounded-lg text-sm font-medium ${
                          profile.type === type
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-600'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                <GradientButton
                  onClick={() => setStep(2)}
                  className="w-full"
                >
                  Continue
                </GradientButton>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-4">
                    Select your skills
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {availableSkills.map((skill) => (
                      <button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`px-4 py-2 rounded-lg text-sm font-medium ${
                          profile.skills?.includes(skill)
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {skill}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={() => setStep(1)}
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                  <GradientButton
                    onClick={handleSubmit}
                    className="flex-1"
                  >
                    Complete Profile
                  </GradientButton>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}