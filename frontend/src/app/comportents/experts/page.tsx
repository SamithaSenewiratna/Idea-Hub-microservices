'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaLightbulb, FaTools, FaUsers } from 'react-icons/fa';

const expertise = [
  {
    icon: <FaCode size={30} className="text-blue-600" />,
    title: 'Full Stack Development',
    description: 'Proficient in React, Next.js, Spring Boot, and Node.js for building modern web applications.',
  },
  {
    icon: <FaLightbulb size={30} className="text-yellow-500" />,
    title: 'Idea Validation',
    description: 'Skilled at shaping raw ideas into viable products using user feedback, design thinking, and MVP strategies.',
  },
  {
    icon: <FaTools size={30} className="text-green-600" />,
    title: 'Tool Mastery',
    description: 'Hands-on with tools like Git, Docker, Swagger, Postman, Figma, Jira, and more.',
  },
  {
    icon: <FaUsers size={30} className="text-purple-600" />,
    title: 'Team Collaboration',
    description: 'Experienced in working with cross-functional teams using Agile methodologies and clear communication.',
  },
];

export default function ExpertisePage() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-6">
      <motion.h1
        className="text-4xl font-bold text-center text-indigo-700 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        My Expertise
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {expertise.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-xl shadow-md p-6 flex gap-4 items-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mt-1">{item.icon}</div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-1">{item.title}</h2>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
