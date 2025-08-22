import React from 'react'
import AnimatedBackground from '../AnimatedBackground'
import { FaCode, FaAward, FaCertificate } from "react-icons/fa";
import { SiLeetcode, SiGeeksforgeeks, SiHackerrank, SiHackerearth, SiCodeforces, SiCodechef } from "react-icons/si";
export default function Personal() {
  
  return (
     <div className='text-white backdrop-blur-sm bg-blue-400/10 rounded-md w-full h-full flex justify-center items-center delay-50 overflow-y-auto hide-scrollbar'>
   <div className="min-h-screen  p-10">
      <div className="max-w-5xl mx-auto">
        {/* About Me */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            I am a passionate <span className="text-yellow-400 font-semibold">Full Stack Developer</span> 
            with expertise in building scalable web applications using 
            <span className="text-green-400"> Java, Spring Boot</span> and 
            <span className="text-blue-400"> React.js</span>.  
            I enjoy solving Data Structures and Algorithms problems on various platforms 
            and have achieved multiple coding badges and certifications.  
            My goal is to keep learning and contribute to impactful projects.
          </p>
        </section>

        {/* Coding Profiles */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4 flex items-center gap-2">
            <FaCode /> Coding Profiles
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="https://leetcode.com/yourusername" target="_blank" className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <SiLeetcode className="text-yellow-400 text-2xl" /> LeetCode
            </a>
            <a href="https://auth.geeksforgeeks.org/user/yourusername" target="_blank" className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <SiGeeksforgeeks className="text-green-500 text-2xl" /> GeeksforGeeks
            </a>
            <a href="https://www.hackerrank.com/yourusername" target="_blank" className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <SiHackerrank className="text-green-400 text-2xl" /> HackerRank
            </a>
            <a href="https://www.hackerearth.com/@yourusername" target="_blank" className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <SiHackerearth className="text-blue-400 text-2xl" /> HackerEarth
            </a>
            <a href="https://codeforces.com/profile/yourusername" target="_blank" className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <SiCodeforces className="text-red-400 text-2xl" /> Codeforces
            </a>
            <a href="https://www.codechef.com/users/yourusername" target="_blank" className="flex items-center gap-3 bg-gray-800 p-4 rounded-xl hover:bg-gray-700 transition">
              <SiCodechef className="text-orange-400 text-2xl" /> CodeChef
            </a>
          </div>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4">Skills & Technologies</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-300">
            <span className="bg-gray-800 p-2 rounded-lg text-center">Java</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">Spring Boot</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">React.js</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">Node.js</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">MongoDB</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">PostgreSQL</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">Docker</span>
            <span className="bg-gray-800 p-2 rounded-lg text-center">AWS</span>
          </div>
        </section>

        {/* Badges & Achievements */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4 flex items-center gap-2">
            <FaAward /> Badges & Achievements
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>⭐ 500+ DSA problems solved on LeetCode</li>
            <li>🏆 4 Star on CodeChef</li>
            <li>🥇 5 Star in Problem Solving on HackerRank</li>
            <li>🚀 Specialist Rank on Codeforces</li>
          </ul>
        </section>

        {/* Certificates */}
        <section>
          <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4 flex items-center gap-2">
            <FaCertificate /> Certificates
          </h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            <li>Java Programming Masterclass – Udemy (2024)</li>
            <li>Spring Boot & Microservices – Coursera (2024)</li>
            <li>AWS Cloud Practitioner – AWS (2023)</li>
            <li>Data Structures & Algorithms – GeeksforGeeks (2023)</li>
          </ul>
        </section>
      </div>
    </div>
     </div>
  )
}
