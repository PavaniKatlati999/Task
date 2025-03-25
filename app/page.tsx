'use client';

import React, { useState } from 'react';
import LeftNav from '../components/LeftNav';
import RightInfo from '../components/RightInfo';

export default function Home() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(false);
  const [isRightInfoOpen, setIsRightInfoOpen] = useState(false);

  const toggleRightInfo = () => {
    setIsRightInfoOpen(!isRightInfoOpen);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Mobile Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm p-4 flex items-center justify-between z-30 lg:hidden">
        <button
          onClick={() => setIsLeftNavOpen(true)}
          className="p-2 rounded-md hover:bg-gray-100"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <h1 className="text-xl font-bold">My App</h1>
      </header>

      {/* Main Layout */}
      <div className="flex min-h-screen pt-16 lg:pt-0">
        {/* Left Navigation */}
        <LeftNav isOpen={isLeftNavOpen} onClose={() => setIsLeftNavOpen(false)} />

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <section className="mb-12">
              <h1 className="text-3xl sm:text-4xl font-bold mb-4">Welcome to Our Platform</h1>
              <p className="text-gray-600 text-lg mb-8">
                Discover a world of possibilities with our innovative solutions. We are here to help you achieve your goals.
              </p>
              <div className="flex gap-4">
                <button
                  onClick={toggleRightInfo}
                  className="bg-gray-800 text-white px-6 py-3 rounded-md hover:bg-gray-800 cursor-pointer transition-colors"
                >
                  {isRightInfoOpen ? 'Hide Info' : 'View Info'}
                </button>                
              </div>
            </section>

          
          </div>
        </main>

        {/* Right Info Panel */}
        <RightInfo isOpen={isRightInfoOpen} onClose={() => setIsRightInfoOpen(false)} />
      </div>
    </div>
  );
} 
