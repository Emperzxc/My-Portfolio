export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8">
      <div className="text-center">
        {/* Name */}
        <h2 className="text-lg font-semibold text-white mb-4">
          Michael Jeffrey Celestino
        </h2>

        {/* Links Row */}
        <div className="flex justify-center flex-wrap gap-10 text-sm">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/mj-cels20/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14C2.238 0 0 2.238 0 5v14c0 2.762 2.238 5 5 5h14c2.762 0 5-2.238 5-5V5c0-2.762-2.238-5-5-5zM8.339 19H5.337V9h3.002v10zM6.838 7.788a1.741 1.741 0 110-3.482 1.741 1.741 0 010 3.482zM19 19h-3v-5.5c0-1.377-.028-3.147-1.92-3.147-1.923 0-2.217 1.502-2.217 3.045V19h-3V9h2.879v1.367h.041c.401-.76 1.379-1.56 2.841-1.56 3.037 0 3.596 2.002 3.596 4.604V19z" />
            </svg>
            LinkedIn
          </a>

          {/* Email */}
          <a
            href="mailto:emjhay.celstino20@gmail.com"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 13.065L.75 6.75v10.5h22.5V6.75L12 13.065zM12 10.935L23.25 4.5H.75L12 10.935z" />
            </svg>
            emjhay.celstino20@gmail.com
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Emperzxc"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .5C5.648.5.5 5.648.5 12a11.5 11.5 0 007.865 10.938c.575.1.787-.25.787-.555v-2.016c-3.2.696-3.875-1.374-3.875-1.374-.525-1.325-1.287-1.675-1.287-1.675-1.05-.713.075-.7.075-.7 1.162.087 1.775 1.187 1.775 1.187 1.037 1.775 2.712 1.262 3.375.963.1-.75.4-1.263.725-1.55-2.55-.288-5.237-1.288-5.237-5.738 0-1.263.45-2.3 1.188-3.112-.125-.288-.512-1.45.113-3.013 0 0 .963-.313 3.15 1.187a10.77 10.77 0 015.737 0c2.188-1.5 3.15-1.187 3.15-1.187.625 1.563.238 2.725.113 3.013.738.813 1.188 1.85 1.188 3.112 0 4.463-2.688 5.438-5.25 5.725.4.35.775 1.05.775 2.125v3.15c0 .312.2.662.8.55A11.503 11.503 0 0023.5 12C23.5 5.648 18.352.5 12 .5z" />
            </svg>
            GitHub
          </a>

          {/* Phone */}
          <a
            href="tel:+639161265126"
            className="flex items-center gap-2 hover:text-white transition-colors underline"
          >
            +63 916 123 5126
          </a>
        </div>
      </div>
    </footer>
  );
}
