import React from "react";
import {
  SiHackerrank,
  SiGeeksforgeeks,
  SiHackerearth,
  SiLeetcode,
  SiCodeforces,
  SiGithub,
  SiPostman,
  SiGoogle,
} from "react-icons/si";
import { FaHeart, FaCertificate, FaStar } from "react-icons/fa";

export default function Personal() {
  // ✅ Profiles list
  const profiles = [
    {
      name: "LeetCode",
      icon: <SiLeetcode className="text-yellow-400 text-3xl" />,
      link: "https://leetcode.com/u/Harsh32001/",
    },
    {
      name: "GeeksforGeeks",
      icon: <SiGeeksforgeeks className="text-green-500 text-3xl" />,
      link: "https://www.geeksforgeeks.org/user/harshkushwaha32001/",
    },
    {
      name: "HackerRank",
      icon: <SiHackerrank className="text-green-400 text-3xl" />,
      link: "https://www.hackerrank.com/profile/harshkushwaha321",
    },
    {
      name: "HackerEarth",
      icon: <SiHackerearth className="text-blue-400 text-3xl" />,
      link: "https://www.hackerearth.com/@harshkushwaha32001/",
    },
    {
      name: "Codeforces",
      icon: <SiCodeforces className="text-red-400 text-3xl" />,
      link: "https://codeforces.com/profile/Harshkushwaha",
    },
    {
      name: "Postman",
      icon: <SiPostman className="text-orange-400 text-3xl" />,
      link: "https://www.postman.com/harsh32001",
    },
    {
      name: "GitHub",
      icon: <SiGithub className="text-gray-300 text-3xl" />,
      link: "https://github.com/harshkushwaha2001",
    },
    {
      name: "Holopin",
      icon: <FaCertificate className="text-purple-400 text-3xl" />,
      link: "https://www.holopin.io/@harshkushwaha2001#badges",
    },
    {
      name: "Google Developer",
      icon: <SiGoogle className="text-blue-500 text-3xl" />,
      link: "https://g.dev/harshkushwaha32001",
    },
  ];

  // ✅ Hobbies & Interests
  const hobbies = [
    "Exploring emerging technologies & open-source projects",
    "Competitive programming & problem-solving",
    "Designing modern UIs & improving performance",
    "Listening to music and reading tech blogs",
  ];
  const ach = [
     "Solved 500+ problems on LeetCode and GeeksforGeeks",
     "Completed 5+ projects using Java, Spring Boot, and React",
     "Earned certifications in AWS Fundamentals and Full-Stack Development",
     "Hold Position of Responsibility in College Tech Club",
     "Build RC Plane from scratch as a hobby project in AERO Club",
     "Conducted coding workshops and hackathons in college",
     "Regularly participate in coding competitions on Codeforces and HackerRank",

  ]

  return (
    <div className='text-white backdrop-blur-sm bg-blue-400/10 rounded-md w-full h-full overflow-y-auto hide-scrollbar'>
  <div className="min-h-screen p-10 pt-16 w-full">
    <div className="max-w-5xl mx-auto">
          {/* 🌐 Profiles Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-6">
              Profiles
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile, index) => (
                <a
                  key={index}
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center bg-gray-800/70 p-6 rounded-xl text-center shadow-md hover:shadow-blue-500/30 hover:scale-105 transition duration-300"
                >
                  {profile.icon}
                  <h3 className="text-lg font-semibold mt-3">{profile.name}</h3>
                </a>
              ))}
            </div>
          </section>

          {/* 💖 Hobbies & Interests */}
          <section>
            <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4 flex items-center gap-2">
              <FaStar /> Achievements
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {ach.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
          </section>

           <section>
            <h2 className="text-3xl font-bold border-b-2 border-gray-700 pb-2 mb-4 flex items-center gap-2 mt-5">
              <FaHeart /> Hobbies & Interests
            </h2>
            <ul className="list-disc list-inside text-gray-300 space-y-2">
              {hobbies.map((hobby, i) => (
                <li key={i}>{hobby}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
