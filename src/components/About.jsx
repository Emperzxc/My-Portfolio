"use client";
import { motion } from "framer-motion";
import batstateuLogo from "../assets/BatStateU-NEU-Logo.png";

export default function About() {
  return (
    <section id="about" className="py-20  text-white px-6 sm:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-16"
        >
          About Me
        </motion.h2>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Education</h3>

          <div className="w-full bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-blue-500 transition-all duration-300 rounded-2xl p-6 max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-start sm:text-left gap-6 shadow-md hover:shadow-blue-500/10">
            <img
              src={batstateuLogo}
              alt="Batangas State University Logo"
              className="w-24 h-24 object-contain rounded-md opacity-90 group-hover:opacity-100 transition"
            />

            <div>
              <h4 className="text-xl font-bold mb-1">
                Bachelor of Science in Computer Engineering
              </h4>
              <p className="italic mb-2 text-gray-300">
                Batangas State University – The National Engineering University
              </p>
              <p className="text-sm text-gray-400">
                Aug 2020 – Aug 2024 · Batangas City, Philippines
              </p>
            </div>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-semibold mb-6 text-blue-400 text-center">Skills</h3>

          <div className="bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-blue-500 transition-all duration-300 rounded-2xl p-8 max-w-5xl mx-auto shadow-md hover:shadow-blue-500/10">
            {/* Technical Skills */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white underline mb-3">
                Technical Skills
              </h4>
              <ul className="text-gray-300 text-sm leading-relaxed space-y-2">
                <li>
                  <strong>Languages:</strong> Python, PHP, JavaScript, SQL
                </li>
                <li>
                  <strong>Development:</strong> UI/UX, HTML, CSS, Vue.js, React,
                  Laravel, Bootstrap, Tailwind CSS
                </li>
                <li>
                  <strong>Tools:</strong> VS Code, FileZilla, GitHub, MySQL, MS SQL Server, Postman, Hostinger
                </li>
                <li>
                  <strong>ERP:</strong> NetSuite, SuiteScript, SuiteQL, SuiteAnalytics
                </li>
                <li>
                  <strong>Integration:</strong> REST APIs, Web Services, SOAP
                </li>
              </ul>
            </div>

            {/* Soft Skills */}
            <div>
              <h4 className="text-lg font-semibold text-white underline mb-3">
                Soft Skills
              </h4>
              <p className="text-gray-300 text-sm">
                Quick to adapt in fast-phasing environments, confident in breaking down complex tech for any audience, and skilled at leading teams through collaborative problem-solving.              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
