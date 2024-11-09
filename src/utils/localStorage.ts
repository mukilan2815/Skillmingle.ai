import { Project, User, Notification } from '../types';

const STORAGE_KEYS = {
  USERS: 'freelance_users',
  PROJECTS: 'freelance_projects',
  NOTIFICATIONS: 'freelance_notifications',
  CURRENT_USER: 'freelance_current_user',
};

export const storage = {
  // User Management
  getCurrentUser: (): User | null => {
    const user = localStorage.getItem(STORAGE_KEYS.CURRENT_USER);
    return user ? JSON.parse(user) : null;
  },

  setCurrentUser: (user: User): void => {
    localStorage.setItem(STORAGE_KEYS.CURRENT_USER, JSON.stringify(user));
  },

  // Projects Management
  getProjects: (): Project[] => {
    const projects = localStorage.getItem(STORAGE_KEYS.PROJECTS);
    return projects ? JSON.parse(projects) : [];
  },

  addProject: (project: Project): void => {
    const projects = storage.getProjects();
    projects.push(project);
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  updateProject: (updatedProject: Project): void => {
    const projects = storage.getProjects();
    const index = projects.findIndex(p => p.id === updatedProject.id);
    if (index !== -1) {
      projects[index] = updatedProject;
      localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
    }
  },

  // User Profile Management
  getUsers: (): User[] => {
    const users = localStorage.getItem(STORAGE_KEYS.USERS);
    return users ? JSON.parse(users) : [];
  },

  addUser: (user: User): void => {
    const users = storage.getUsers();
    users.push(user);
    localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
  },

  updateUser: (updatedUser: User): void => {
    const users = storage.getUsers();
    const index = users.findIndex(u => u.id === updatedUser.id);
    if (index !== -1) {
      users[index] = updatedUser;
      localStorage.setItem(STORAGE_KEYS.USERS, JSON.stringify(users));
    }
  },

  // Project Matching
  getMatchingProjects: (skills: string[]): Project[] => {
    const projects = storage.getProjects();
    return projects
      .filter(project => project.status === 'open')
      .map(project => ({
        ...project,
        matchScore: calculateMatchScore(project.skills, skills),
      }))
      .sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
  },
};

// Helper function to calculate match score between project and user skills
function calculateMatchScore(projectSkills: string[], userSkills: string[]): number {
  const matchingSkills = projectSkills.filter(skill => 
    userSkills.includes(skill)
  ).length;
  
  return Math.round((matchingSkills / projectSkills.length) * 100);
}