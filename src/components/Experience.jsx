"use client";
import { motion } from "framer-motion";
import OracleLogo from "../assets/oracle.png";
import SchneiderLogo from "../assets/schneider.png";

export default function Experience() {
  const experiences = [
    {
      logo: OracleLogo,
      alt: "Oracle NetSuite Logo",
      company: "Oracle NetSuite",
      role: "Associate Technical Support Engineer",
      period: "Jan 2025 – Sept 2025",
      color: "blue",
      points: [
        "Delivered global technical support for NetSuite customers, troubleshooting SuiteScript, SuiteFlow, and integrations (SOAP/REST).",
        "Resolved support cases efficiently while maintaining high customer satisfaction through active communication.",
        "Collaborated with engineers and cross-functional teams to resolve complex cases with detailed RCA documentation.",
        "Created internal documentation and KB articles for faster case resolution.",
        "Utilized SuiteAnswers, SuiteAnalytics, SQL, JavaScript, and API debugging tools for diagnostics.",
      ],
    },
    {
      logo: SchneiderLogo,
      alt: "Schneider Electric Logo",
      company: "Schneider Electric Inc.",
      role: "Vue.js Developer Intern",
      period: "Feb 2024 – Jun 2024",
      color: "blue",
      points: [
        "Designed and implemented admin role web pages for the skills certification system.",
        "Developed a global engagement portal with a modern, responsive UI.",
        "Created an uploading web app for the company’s welcome board using Bootstrap.",
        "Communicated technical concepts effectively across all phases of development.",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="relative  text-gray-200 py-20 px-6 sm:px-20 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),transparent_60%)]"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-center text-white mb-14"
        >
          Professional Experience
        </motion.h2>

        <div className="grid gap-10">
          {experiences.map((exp, index) => (
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className={`group relative bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-${exp.color}-500 rounded-2xl p-8 hover:shadow-lg`}
            >
              <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                <img
                  src={exp.logo}
                  alt={exp.alt}
                  className="w-20 h-20 object-contain rounded-md opacity-80 group-hover:opacity-100 transition"
                />

                <div>
                  <h4 className="text-xl sm:text-2xl font-semibold text-white">
                    {exp.company} – {exp.role}
                  </h4>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
              </div>

              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 ml-1">
                {exp.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
              
            </motion.div>
          ))}
        </div>
          
      </div>
    </section>
  );
}
