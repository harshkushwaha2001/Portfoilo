import React from 'react'
import AnimatedBackground from '../AnimatedBackground'
export default function Projects() {
  const projects = [
    {
      title: "Airbnb Clone",
      desc: "A full-stack Airbnb clone with Spring Boot backend and React frontend.",
      img: "/assets/airbnb.png",
      tech: ["React", "Spring Boot", "PostgreSQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "E-commerce Platform",
      desc: "MERN-based e-commerce site with payment integration.",
      img: "/assets/ecommerce.png",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio showcasing my projects and skills.",
      img: "/assets/portfolio.png",
      tech: ["React", "TailwindCSS"],
      demo: "#",
      github: "#",
    },
  ];
  return (
     <div className='text-white backdrop-blur-sm bg-blue-400/10 rounded-md w-full h-full flex justify-center items-center delay-50 overflow-y-auto hide-scrollbar'>
        
         <section id="projects" className="py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-10">🚀 Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-blue-950/40 border border-blue-400/30 shadow-lg rounded-xl overflow-hidden hover:scale-105 transform transition duration-300"
          >
            <img src={p.img} alt={p.title} className="h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-gray-200 text-sm mt-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-3">
                {p.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs bg-gray-900 px-2 py-1 rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex justify-between mt-4">
                <a
                  href={p.demo}
                  className="text-blue-600 font-medium hover:underline"
                >
                  Live Demo
                </a>
                <a
                  href={p.github}
                  className="text-white font-medium hover:underline"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
     </div>
  )
}
