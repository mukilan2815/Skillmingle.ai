export interface Project {
  id: string;
  title: string;
  description: string;
  budget: number;
  deadline: string;
  skills: string[];
  status: 'open' | 'in-progress' | 'completed';
  matchScore?: number;
  clientId: string;
}

export interface User {
  id: string;
  name: string;
  type: 'freelancer' | 'client';
  avatar: string;
  rating: number;
  verified: boolean;
  skills?: string[];
  completedProjects: number;
}

export interface Notification {
  id: string;
  type: 'payment' | 'milestone' | 'application' | 'message';
  message: string;
  timestamp: string;
  read: boolean;
}