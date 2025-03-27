"use client";

import { useState } from "react";
import Image from "next/image";

export default function Task() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [isChatInfoOpen, setChatInfoOpen] = useState(false);
  const [name,setName] = useState('John Doe')
  

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar (Chat List) */}
      {isSidebarOpen && (
        <aside className="w-1/4 min-w-[150px] lg:min-w-[300px] bg-gray-900 text-white p-4 transition-all">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl text-center font-semibold">Chats</h2>
            <div className="lg:hidden">
              <button
                onClick={() => setSidebarOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                ✖
              </button>
            </div>
          </div>
          <ul className="space-y-3">
            <li
              className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => setName("John Doe")}
            >
              John Doe
            </li>
            <li
              className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => setName("Jane Smith")}
            >
              Jane Smith
            </li>
            <li
              className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => setName("Alex Johnson")}
            >
              Alex Johnson
            </li>
            <li
              className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => setName("John Sean")}
            >
              John Sean
            </li>
            <li
              className="p-3 bg-gray-800 rounded-lg cursor-pointer hover:bg-gray-700"
              onClick={() => setName("Smith Gold")}
            >
              Smith Gold
            </li>
          </ul>
        </aside>
      )}

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col bg-white border-l border-r">
        {/* Header */}
        <div className="flex justify-start gap-4 items-center p-4 border-b bg-gray-100">
          <div className="lg:hidden" onClick={() => setSidebarOpen(true)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 cursor-pointer"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </div>

          <div onClick={() => setChatInfoOpen(!isChatInfoOpen)}>
            <Image
              src={require("./profile.jpg")}
              className="h-[30] w-[30] rounded-full"
              alt="loading"
            />
          </div>
          <h1 className="text-lg font-bold">Chat with {name}</h1>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          <div className="self-start bg-gray-200 p-3 rounded-lg max-w-xs">
            Hey, how are you?
          </div>
          <div className="self-end bg-blue-500 text-white p-3 rounded-lg max-w-xs ml-auto">
            I am good! How about you?
          </div>
          <div className="self-start bg-gray-200 p-3 rounded-lg max-w-xs">
            Lets catch up later!
          </div>
        </div>

        {/* Message Input */}
        <div className="p-4 border-t bg-gray-100 flex items-center">
          <input
            type="text"
            placeholder="Type a message..."
            className="flex-1 px-4 py-2 border rounded-lg"
          />
          <button className="ml-2 bg-green-500 text-white px-4 py-2 rounded-lg">
            Send
          </button>
        </div>
      </main>

      {/* Right Sidebar (Chat Info) */}
      {isChatInfoOpen && (
        <aside className="w-1/4 min-w-[300px] bg-gray-900 text-white p-4 transition-all">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">Chat Info</h2>

            <button
              onClick={() => setChatInfoOpen(false)}
              className="text-gray-400 hover:text-white transition"
            >
              ✖
            </button>
          </div>
          <ul className="space-y-3">
            <div className="flex justify-center">
              <Image
                src={require("./profile.jpg")}
                className="h-30 w-30 rounded-full"
                alt="loading"
              />
            </div>
            <p className="text-center">{name}</p>
            <li className="p-3 bg-gray-800 rounded-lg">Media, links & docs</li>
            <li className="p-3 bg-gray-800 rounded-lg">Mute Notifications</li>
            <li className="p-3 bg-gray-800 rounded-lg">Delete Chat</li>
          </ul>
        </aside>
      )}
    </div>
  );
}
