import React from 'react'
import { useRef } from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import AnimatedBackground from '../AnimatedBackground'
import emailjs from "emailjs-com";

export default function Contact() {
  const form = useRef();
 const handleSubmit = (e) => {
  e.preventDefault();
  
  emailjs.sendForm(
    "service_7n3psiq",
    "template_z80wc6q",
     form.current,
    "gTx7ymrRoq4FJ5Iu4"
  ).then(
    (result) => {
      alert("✅ Message sent!");
      console.log(result.text);
    },
    (error) => {
      alert("❌ Failed to send message.");
      console.log(error.text);
    }
  );
};
  return (
     <div className='text-white backdrop-blur-sm bg-blue-400/10 rounded-md w-full h-full flex justify-center items-center delay-50 overflow-y-auto hide-scrollbar'>

          <section id="contact" className="py-12 px-6 b">
      <h2 className="text-3xl font-bold text-center mb-4">📩 Contact Me</h2>
      <p className="text-center text-gray-400 mb-10">
        Feel free to reach out for collaborations or job opportunities.
      </p>

      <div className="flex gap-10 flex-wrap justify-center">
        
        {/* Contact Form */}
        <form ref={form} className=" flex w-[300px] flex-col gap-2 p-5 bg-blue-950/40 border border-blue-400/30 shadow-lg rounded-xl overflow-hidden  transform transition duration-300">
          <input
          name='name'
            type="text"
            placeholder="Your Name"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <input
            name='email'
            type="email"
            placeholder="Your Email"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <textarea
          name='message'
            rows="5"
            placeholder="Your Message"
            className="border p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          ></textarea>
          <button
          onClick={handleSubmit}
            type="submit"
            className=" bg-gray-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className=" rounded-xl p-6 flex flex-col justify-center">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-gray-200 mb-4">
            I’m open to discussing new projects, creative ideas, or opportunities.
          </p>

          <div className="flex items-center gap-3 mb-3">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:harshkushwaha32001@gmail.com" className="hover:underline">
              harshkushwaha32001@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaPhone className="text-green-600" />
            <span>+91 8303119433</span>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <FaLinkedin className="text-blue-800" />
            <a href="https://www.linkedin.com/in/harsh-kushwaha-98340b1ba/" className="hover:underline">linkedin.com/in/harsh-kushwaha-98340b1ba/</a>
          </div>

          <div className="flex items-center gap-3">
            <FaGithub className="text-gray-800" />
            <a href="https://github.com/harshkushwaha2001"  className="hover:underline">github.com/harshkushwaha2001</a>
          </div>
        </div>
      </div>
    </section>
     </div>
  )
}
