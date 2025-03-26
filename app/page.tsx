"use client";

import { useState } from "react";

export default function ThreeColumnLayout() {
  const [isLeftNavVisible, setIsLeftNavVisible] = useState(true);
  const [isRightNavVisible, setIsRightNavVisible] = useState(true);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Navigation */}
      {isLeftNavVisible && (
        <nav className="w-1/6 bg-gray-800 text-white p-4 transition-all">
          <h2 className="text-xl font-semibold">App Name</h2>
          <ul className="space-y-4 mt-4">
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 9l9-7 9 7v10a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                  ></path>
                </svg>
                <span className="font-medium">Home</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 17v-4M15 17v-4M12 21V11m-7 0h14"
                  ></path>
                </svg>
                <span className="font-medium">Analytics</span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center gap-3 px-4 py-3 rounded-lg transition-all text-gray-300 hover:bg-gray-700 hover:text-white"
              >
                <svg
                  className="w-5 h-5 text-gray-400 group-hover:text-white transition"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10 6h4m-2 12v2m-4-2a4 4 0 018 0m-8 0H4m12 0h4M4 10a4 4 0 018 0m8 0a4 4 0 00-8 0"
                  ></path>
                </svg>
                <span className="font-medium">Settings</span>
              </a>
            </li>
          </ul>
        </nav>
      )}

      {/* Main Content */}
      <main className="flex-1 p-4">
       

        <h1 className="text-3xl font-bold mb-4">Welcome to our platform</h1>
        <p className="text-lg">
          Discover a world of possibilities with our innovative solutions. We
          are here to help you achieve your goals.Discover a world of
          possibilities with our innovative solutions. We are here to help you
          achieve your goals{" "}
        </p>

        <div className="mt-16">
          {/* Show/Hide Buttons */}
          <button
            onClick={() => setIsLeftNavVisible(!isLeftNavVisible)}
            className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
          >
            Toggle Left Nav
          </button>
          <button
            onClick={() => setIsRightNavVisible(!isRightNavVisible)}
            className="bg-green-500 text-white px-4 py-2 rounded"
          >
            Toggle Right Nav
          </button>
        </div>
      </main>

      {/* Right Navigation */}
      {isRightNavVisible && (
        <nav className="w-1/6 bg-gray-900 text-white p-5 shadow-lg rounded-lg transition-all">
          <div className="space-y-6 overflow-y-auto">
            {/* Quick Links Section */}
            <div className="bg-gray-800 p-5 rounded-xl shadow-lg border border-gray-700 backdrop-blur-md">
              <h3 className="text-lg font-bold text-gray-200 mb-3">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-transform transform hover:translate-x-1"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-transform transform hover:translate-x-1"
                  >
                    Support
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center gap-3 text-blue-400 hover:text-blue-300 transition-transform transform hover:translate-x-1"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}
