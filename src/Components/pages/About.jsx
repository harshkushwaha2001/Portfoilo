import React from 'react'
import AnimatedBackground from '../AnimatedBackground'

export default function About() {
  return (
    <div className='text-white backdrop-blur-sm bg-blue-400/10 font-medium rounded-md w-full h-full flex justify-center items-center delay-50 overflow-y-auto hide-scrollbar'>
      <section className="w-full max-w-3xl mx-auto text-center p-6 space-y-6">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-blue-400">About Me</h2>

        {/* Short Intro */}
        <p className="text-gray-300 text-lg">
          Hi, I'm <span className="text-amber-300 font-semibold">Harsh Kushwaha</span>, 
          a passionate <span className="text-white">Full Stack Java Developer</span> and tech enthusiast.
        </p>

        {/* Detailed Description */}
        <p className="text-gray-300 leading-relaxed">
          I love building scalable and user-friendly web applications. 
          With a strong foundation in <span className="text-white">Java, Spring Boot, React, and SQL</span>, 
          I enjoy turning ideas into real-world products.  
          My focus is always on writing clean, efficient, and maintainable code.  
          Apart from coding, I’m constantly exploring new technologies to stay ahead in the ever-evolving tech world.
        </p>

        {/* Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-gray-200">
          <div className="p-4 bg-blue-400/10 rounded-lg hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">1+</h3>
            <p className="text-sm">Years Experience</p>
          </div>
          <div className="p-4 bg-blue-400/10 rounded-lg hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">10+</h3>
            <p className="text-sm">Projects</p>
          </div>
          <div className="p-4 bg-blue-400/10 rounded-lg hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">5+</h3>
            <p className="text-sm">Tech Skills</p>
          </div>
          <div className="p-4 bg-blue-400/10 rounded-lg hover:shadow-lg hover:scale-105 transition">
            <h3 className="text-xl font-bold">∞</h3>
            <p className="text-sm">Learning Attitude</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="pt-6">
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Experience</h3>
          <div className="bg-blue-400/10 p-5 rounded-lg text-left space-y-2 hover:shadow-lg transition">
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center">
              <h4 className="text-lg font-semibold text-white">
                Aarti Industries Ltd.
              </h4>
              <span className="text-sm text-gray-200">
                Graduate Engineer Trainee | Aug 2024 – Feb 2025
              </span>
            </div>
            <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
              <li>IT Infrastructure Management — managing KPIs and Cloud Infrastructure.</li>
              <li>System Administration and Troubleshooting — provided technical support for hardware, software, and enterprise IT operations.</li>
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="pt-4">
          <a 
            href="/contact" 
            className="px-6 py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
          >
            Let’s Connect 🚀
          </a>
        </div>
      </section>
    </div>
  )
}

