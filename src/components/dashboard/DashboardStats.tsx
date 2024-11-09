import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, DollarSign, Star } from 'lucide-react';

const stats = [
  {
    name: 'Active Projects',
    value: '12',
    icon: TrendingUp,
    change: '+23%',
    changeType: 'increase',
  },
  {
    name: 'Total Earnings',
    value: '$24,500',
    icon: DollarSign,
    change: '+12%',
    changeType: 'increase',
  },
  {
    name: 'Client Rating',
    value: '4.9',
    icon: Star,
    change: '+0.2',
    changeType: 'increase',
  },
  {
    name: 'Completed Jobs',
    value: '47',
    icon: Users,
    change: '+8',
    changeType: 'increase',
  },
];

export default function DashboardStats() {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="relative overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:px-6 sm:py-6"
        >
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-r from-indigo-600/10 via-purple-600/10 to-pink-500/10 h-1" />
          
          <dt>
            <div className="absolute rounded-md bg-gradient-to-r from-indigo-600 to-purple-600 p-3">
              <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <p className="ml-16 truncate text-sm font-medium text-gray-500">
              {stat.name}
            </p>
          </dt>
          <dd className="ml-16 flex items-baseline">
            <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
            <p
              className={`ml-2 flex items-baseline text-sm font-semibold ${
                stat.changeType === 'increase' ? 'text-green-600' : 'text-red-600'
              }`}
            >
              {stat.change}
            </p>
          </dd>
        </motion.div>
      ))}
    </div>
  );
}