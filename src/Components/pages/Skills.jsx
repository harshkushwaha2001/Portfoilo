import React from 'react'
import AnimatedBackground from '../AnimatedBackground'
import { FaJava, FaReact, FaNodeJs, FaDocker, FaAws, FaPython } from "react-icons/fa";
import { SiSpringboot, SiHibernate, SiPostgresql, SiMongodb,SiMysql, SiRedis, SiExpress, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";
import SkillCard from '../SkillCard';

export default function Skills() {
  const skills = [
    { name: "Core Java", level: "Expert", percent: 90, icon: <FaJava /> },
    { name: "Spring Boot", level: "Intermediate", percent: 80, icon: <SiSpringboot /> },
    { name: "Hibernate", level: "Intermediate", percent: 80, icon: <SiHibernate /> },
    { name: "JSP & Servlets", level: "Intermediate", percent: 70, icon: <FaJava /> },
    { name: "React", level: "Advanced", percent: 85, icon: <FaReact /> },
    { name: "Node.js", level: "Intermediate", percent: 75, icon: <FaNodeJs /> },
    { name: "Python", level: "Intermediate", percent: 70, icon: <FaPython /> },
    { name: "Express.js", level: "Intermediate", percent: 75, icon: <SiExpress /> },
    { name: "MongoDB", level: "Intermediate", percent: 75, icon: <SiMongodb /> },
    { name: "PostgreSQL", level: "Intermediate", percent: 80, icon: <SiPostgresql /> },
    { name: "Redis", level: "Good", percent: 70, icon: <SiRedis /> },
    { name: "Docker", level: "Good", percent: 75, icon: <FaDocker /> },
    { name: "MySQL", level: "Intermediate", percent: 85, icon: <SiMysql /> },
    { name: "AWS", level: "Good", percent: 70, icon: <FaAws /> },
  ];
  return (
     <div className='text-white backdrop-blur-sm bg-blue-400/10 rounded-md w-full h-full flex justify-center items-center delay-50 flex-wrap gap-5 overflow-y-auto hide-scrollbar'>
    <div className="p-6 md:p-10 text-white max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">⚡ Skills</h1>

      {/* Flex wrap container */}
      <div className="flex flex-wrap gap-5 justify-center">
        {skills.map((skill, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-72 bg-blue-950/40 border border-blue-400/30 shadow-lg rounded-2xl p-5 hover:shadow-blue-500/20 transition"
          >
            {/* Icon + Skill Name */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl text-blue-400">{skill.icon}</span>
              <h2 className="text-lg font-semibold">{skill.name}</h2>
            </div>

            {/* Level + Progress Bar */}
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-300">{skill.level}</span>
              <span className="text-gray-400">{skill.percent}%</span>
            </div>
            <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-700"
                style={{ width: `${skill.percent}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
     </div>
  )
}
