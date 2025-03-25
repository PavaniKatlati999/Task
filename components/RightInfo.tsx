'use client';

import React from 'react';

interface RightInfoProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function RightInfo({ isOpen, onClose }: RightInfoProps) {
  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      <div
        className={`fixed lg:fixed right-0 top-0 h-full w-[280px] lg:w-[15%] bg-gray-100 p-4 transform transition-transform duration-300 ease-in-out z-50
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold">Additional Info</h2>
            <button
              onClick={onClose}
              className="lg:hidden p-2 hover:bg-gray-200 rounded-md"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="space-y-4 overflow-y-auto">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-blue-600 hover:underline">Documentation</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">Support</a></li>
                <li><a href="#" className="text-blue-600 hover:underline">FAQ</a></li>
              </ul>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-semibold mb-2">Contact Info</h3>
              <p className="text-sm">Email: support@example.com</p>
              <p className="text-sm">Phone: (555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 