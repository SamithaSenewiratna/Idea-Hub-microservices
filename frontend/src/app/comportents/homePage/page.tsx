'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700 text-white flex flex-col">
      {/* Header / Nav */}
      <header className="flex justify-between items-center px-6 py-4 bg-opacity-10 backdrop-blur-md">
        <h1 className="text-2xl font-bold">IdeaHub</h1>
        <nav className="space-x-4 text-sm md:text-base">
          <Link href="/ideas" className="hover:underline">Explore Ideas</Link>
          <Link href="/submit" className="hover:underline">Share Idea</Link>
          <Link href="/login" className="hover:underline">Login</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center px-6 text-center">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold leading-tight mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Share Ideas. Spark Innovation.
        </motion.h2>

        <motion.p
          className="max-w-2xl text-lg md:text-xl mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Welcome to <strong>IdeaHub</strong> — your space to discover, share, and collaborate on brilliant ideas from people around the world.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
        >
          <Link
            href="/ideas"
            className="bg-white text-indigo-600 font-semibold py-3 px-6 rounded-full hover:bg-gray-100 transition"
          >
            Explore Ideas
          </Link>
          <Link
            href="/submit"
            className="border border-white font-semibold py-3 px-6 rounded-full hover:bg-white hover:text-indigo-600 transition"
          >
            Share Your Idea
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-white/70">
        © {new Date().getFullYear()} IdeaHub. Empowering Ideas.
      </footer>
    </div>
  );
}
