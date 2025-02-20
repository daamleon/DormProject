import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div
      style={{
        backgroundImage:
          'url("https://images.unsplash.com/photo-1593642634315-48f5414c3ad9")',
      }}
      className="flex flex-col justify-center items-center text-white min-h-screen w-full"
    >
      <div className="text-center rounded-lg">
        <h1 className="text-4xl font-bold sm:text-5xl md:text-6xl">
          Welcome to EduInstitute
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-white sm:text-lg md:mt-5 md:text-xl">
          Transform your future with our cutting-edge educational programs
        </p>
        <div className="mt-5 flex flex-col sm:flex-row sm:justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <Link
            to="/register"
            className="px-8 py-3 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-md"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="px-8 py-3 text-lg font-medium text-blue-600 bg-white hover:bg-gray-50 rounded-md"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
