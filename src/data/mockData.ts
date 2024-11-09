import { Project, User, Notification } from '../types';

export const mockProjects: Project[] = [
  {
    id: '1',
    title: 'AI-Powered E-commerce Platform Development',
    description: 'Looking for a skilled developer to build a modern e-commerce platform with AI-driven product recommendations.',
    budget: 5000,
    deadline: '2024-05-01',
    skills: ['React', 'Node.js', 'AI/ML', 'MongoDB'],
    status: 'open',
    matchScore: 95,
    clientId: 'client1'
  },
  {
    id: '2',
    title: 'Blockchain Wallet Integration',
    description: 'Need expertise in integrating multiple blockchain wallets into an existing web application.',
    budget: 3000,
    deadline: '2024-04-15',
    skills: ['Blockchain', 'Web3.js', 'React', 'Solidity'],
    status: 'in-progress',
    matchScore: 88,
    clientId: 'client2'
  }
];

export const mockUsers: User[] = [
  {
    id: 'freelancer1',
    name: 'Sarah Chen',
    type: 'freelancer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    rating: 4.9,
    verified: true,
    skills: ['React', 'Node.js', 'AI/ML'],
    completedProjects: 47
  },
  {
    id: 'client1',
    name: 'Tech Innovations Inc.',
    type: 'client',
    avatar: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623',
    rating: 4.8,
    verified: true,
    completedProjects: 12
  }
];

export const mockNotifications: Notification[] = [
  {
    id: 'n1',
    type: 'payment',
    message: 'Payment of $2,500 processed successfully',
    timestamp: '2024-03-10T10:00:00Z',
    read: false
  },
  {
    id: 'n2',
    type: 'application',
    message: 'New application received for AI Platform project',
    timestamp: '2024-03-09T15:30:00Z',
    read: true
  }
];