"use client";
import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Flood Prediction System",
      date: "May 2024",
      description:
        "A responsive web app that predicts flooding in areas near the Calumpang River, Batangas City. It integrates a machine learning model using Flask API and visualizes flood risk using Leaflet maps.",
      tech: ["Vue.js", "PHP", "Python", "Flask", "MySQL", "Leaflet.js", "HTML/CSS"],
      link: "https://github.com/yourname/flood-prediction-system", 
      paperLink: "https://drive.google.com/file/d/1gOnRz_jUc1Ri8T9yQkStvIxnP0xWGIFk/view", 
    },
    {
      id: 2,
      title: "This Portfolio Website",
      date: "Oct 2025",
      description:
        "A personal portfolio built using React, Tailwind CSS, and Framer Motion. Designed to showcase my projects, experience, and skills with modern, animated UI components.",
      tech: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      link: "https://github.com/Emperzxc/My-Portfolio",
    },
  ];

  return (
    <section
      id="projects"
      className="relative py-24 text-white px-6 sm:px-12 overflow-hidden"
    >
      {/* Background Blobs */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-400 opacity-10 rounded-full blur-3xl z-0" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map(({ id, title, date, description, tech, link, paperLink }) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: id * 0.1 }}
              className="bg-gray-800/60 border border-gray-700 hover:border-blue-500 rounded-2xl p-6 shadow-md hover:shadow-blue-500/10 backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold text-white mb-1">{title}</h3>
              <p className="text-sm text-gray-400 mb-4">{date}</p>
              <p className="text-gray-300 text-sm mb-4">{description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {tech.map((item, index) => (
                  <span
                    key={index}
                    className="bg-gray-700 text-blue-300 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap gap-4">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 text-sm font-semibold text-blue-400 hover:text-blue-200 font-bold"
                >
                  🔗 View Project
                </a>

                {/* Only show paper link if exists */}
                {paperLink && (
                  <a
                    href={paperLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm font-semibold text-blue-300 hover:text-blue-200 font-bold"
                  >
                    📄 View Research Paper
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
