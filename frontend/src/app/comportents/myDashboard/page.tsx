'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLightbulb, FaPlusCircle, FaEdit, FaChartBar } from 'react-icons/fa';

const mockIdeas = [
  {
    id: '1',
    title: 'AI-Powered Plant Disease Detector',
    description: 'A mobile app that uses AI to identify plant diseases and recommend treatments.',
    likes: 120,
    comments: 15,
  },
  {
    id: '2',
    title: 'Decentralized Resume Verification',
    description: 'Blockchain-based system to verify educational and work history securely.',
    likes: 98,
    comments: 8,
  },
];

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      {/* Header */}
      <header className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-indigo-600">Your Dashboard</h1>
        <Link
          href="/submit"
          className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition"
        >
          <FaPlusCircle />
          Share New Idea
        </Link>
      </header>

      {/* Stats */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <div className="bg-white shadow-md rounded-lg p-6">
          <FaLightbulb className="text-yellow-500 text-3xl mb-2" />
          <p className="text-lg font-semibold">Ideas Shared</p>
          <p className="text-2xl font-bold">2</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <FaChartBar className="text-green-500 text-3xl mb-2" />
          <p className="text-lg font-semibold">Total Likes</p>
          <p className="text-2xl font-bold">218</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <FaChartBar className="text-blue-500 text-3xl mb-2" />
          <p className="text-lg font-semibold">Comments Received</p>
          <p className="text-2xl font-bold">23</p>
        </div>
      </section>

      {/* Idea List */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Your Ideas</h2>
        <div className="space-y-4">
          {mockIdeas.map((idea) => (
            <motion.div
              key={idea.id}
              className="bg-white p-6 rounded shadow hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold text-gray-800">{idea.title}</h3>
                <Link
                  href={`/edit/${idea.id}`}
                  className="text-sm text-indigo-600 flex items-center gap-1 hover:underline"
                >
                  <FaEdit /> Edit
                </Link>
              </div>
              <p className="text-sm text-gray-600 mb-2">{idea.description}</p>
              <div className="text-sm text-gray-500">
                👍 {idea.likes} &nbsp;&nbsp; 💬 {idea.comments}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
