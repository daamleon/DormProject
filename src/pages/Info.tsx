import React from "react";
import { FaChalkboardTeacher, FaLaptop, FaBriefcase } from "react-icons/fa";

export default function Info() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl text-center">
        Why Choose Us?
      </h2>
      <p className="mt-4 text-lg text-gray-600 text-center max-w-3xl mx-auto">
        We offer a world-class learning experience with expert instructors and a
        flexible curriculum.
      </p>

      <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <FaChalkboardTeacher className="text-blue-600 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-600">
            Expert Instructors
          </h3>
          <p className="text-gray-500 mt-2">
            Learn from industry-leading professionals.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <FaLaptop className="text-blue-600 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-600">
            Flexible Learning
          </h3>
          <p className="text-gray-500 mt-2">
            Study at your own pace from anywhere.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 text-center hover:shadow-xl transition">
          <FaBriefcase className="text-blue-600 text-5xl mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-blue-600">
            Career Opportunities
          </h3>
          <p className="text-gray-500 mt-2">
            Boost your career with our certifications.
          </p>
        </div>
      </div>
    </div>
  );
}
