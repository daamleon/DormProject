import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../lib/firebase';
import { useAuthStore } from '../store/authStore';
import { signOut } from 'firebase/auth';

export default function Navbar() {
  const { user, userRole } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-gray-800">
            EduInstitute
          </Link>
          
          <div className="flex items-center space-x-4">
            {!user ? (
              <>
                <Link to="/login" className="text-gray-600 hover:text-gray-900">
                  Login
                </Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            ) : (
              <>
                <Link
                  to={userRole?.isAdmin ? '/admin/dashboard' : '/user/dashboard'}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {userRole?.isAdmin ? 'Admin Dashboard' : 'Dashboard'}
                </Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-600 hover:text-gray-900"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}