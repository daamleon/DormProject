import React from 'react';
import { useAuthStore } from '../store/authStore';

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h2 className="text-lg font-medium text-gray-900">Welcome to your Dashboard</h2>
          <div className="mt-3 text-sm text-gray-500">
            <p>Email: {user?.email}</p>
          </div>
          
          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">My Courses</h3>
                <p className="mt-1 text-sm text-gray-500">View your enrolled courses</p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Progress</h3>
                <p className="mt-1 text-sm text-gray-500">Track your learning progress</p>
              </div>
            </div>

            <div className="bg-white overflow-hidden shadow rounded-lg">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900">Certificates</h3>
                <p className="mt-1 text-sm text-gray-500">View your achievements</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}