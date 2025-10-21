"use client";
import { motion } from "framer-motion";
import michaelPhoto from "../assets/michael-photo.jpg"; // adjust path

export default function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col sm:flex-row items-center justify-center text-white px-6 sm:px-20 text-center sm:text-left gap-12 relative overflow-hidden"
    >
      {/* Decorative Blob */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-600 opacity-10 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500 opacity-10 rounded-full blur-3xl z-0" />

      {/* Profile Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="w-52 h-52 sm:w-60 sm:h-60 rounded-full overflow-hidden border-4 border-blue-600 shadow-xl">
          <img
            src={michaelPhoto}
            alt="Michael Celestino"
            className="object-cover w-full h-full"
          />
        </div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="z-10"
      >
        <h1 className="animate-typing text-4xl sm:text-5xl font-extrabold mb-4">
          Hi, I'm Michael
        </h1>

        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-xl leading-relaxed">
          Passionate tech enthusiast who loves programming and building practical, real-world solutions.
        </p>

        <a
          href="#projects"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-md hover:shadow-blue-500/20"
        >
          See My Work →
        </a>
      </motion.div>
    </section>
  );
}
