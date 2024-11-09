import React from 'react';
import { Clock, DollarSign, Star } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start">
        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
        {project.matchScore && (
          <span className="bg-green-100 text-green-800 text-sm font-medium px-2.5 py-0.5 rounded">
            {project.matchScore}% Match
          </span>
        )}
      </div>
      
      <p className="mt-2 text-gray-600 line-clamp-2">{project.description}</p>
      
      <div className="mt-4 flex items-center space-x-4">
        <div className="flex items-center text-gray-700">
          <DollarSign className="h-4 w-4 mr-1" />
          <span>${project.budget}</span>
        </div>
        <div className="flex items-center text-gray-700">
          <Clock className="h-4 w-4 mr-1" />
          <span>{new Date(project.deadline).toLocaleDateString()}</span>
        </div>
      </div>
      
      <div className="mt-4 flex flex-wrap gap-2">
        {project.skills.map((skill) => (
          <span
            key={skill}
            className="bg-indigo-50 text-indigo-700 text-sm px-2.5 py-0.5 rounded"
          >
            {skill}
          </span>
        ))}
      </div>
      
      <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors">
        View Details
      </button>
    </div>
  );
}