"use client";
import { motion } from "framer-motion";

export default function Certificates() {
  const certs = [
    {
      title: "Python Essentials 1",
      link: "https://www.credly.com/badges/49e8c472-54ea-4ad0-9efc-6e81f69c4aa8/linked_in_profile",
      image:
        "https://images.credly.com/size/340x340/images/68c0b94d-f6ac-40b1-a0e0-921439eb092e/image.png",
    },
    {
      title: "CCNA: Switching, Routing, and Wireless Essentials",
      link: "https://www.credly.com/badges/e7df82cc-1ede-46de-a29e-71f9ba9e3a0c/linked_in_profile",
      image:
        "https://images.credly.com/size/340x340/images/f4ccdba9-dd65-4349-baad-8f05df116443/CCNASRWE__1_.png",
    },
    {
      title: "CCNA: Enterprise Networking, Security, and Automation",
      link: "https://www.credly.com/badges/82ce995c-6ca8-423f-87e9-4b022d7c8fe6/linked_in_profile",
      image:
        "https://images.credly.com/size/340x340/images/0a6d331e-8abf-4272-a949-33f754569a76/CCNAENSA__1_.png",
    },
  ];

  return (
    <section
      id="certificates"
      className="relative text-gray-200 py-20 px-6 sm:px-20 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(59,130,246,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-extrabold text-white mb-14"
        >
          Certificates
        </motion.h2>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {certs.map((cert, index) => (
            <motion.a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-gray-800/60 backdrop-blur-md border border-gray-700 hover:border-blue-500 rounded-2xl overflow-hidden shadow-md hover:shadow-blue-500/20 transform hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Certificate Image */}
              <div className="relative bg-gray-900">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-60 object-contain p-6"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Certificate Text */}
              <div className="p-5 text-left">
                <h3 className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-400 mt-1">
                  View on <span className="text-blue-500">Credly →</span>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
