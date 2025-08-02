import React from "react";
import { FaYoutube, FaLock, FaBolt, FaCodeBranch } from "react-icons/fa";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col">

      {/* About Section */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white/80 rounded-2xl shadow-2xl max-w-5xl w-full border border-purple-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-purple-700 mb-6">
            About VideoConvertX
          </h1>
          <p className="text-lg text-gray-700 text-center mb-8">
            <span className="font-semibold text-purple-600">VideoConvertX</span> is your all-in-one solution for fast, secure, and hassle-free video conversion. Whether you need to convert YouTube videos to MP4 or MP3, our platform makes it effortless—no downloads, no signups, just paste your link and go!
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="flex flex-col items-center text-center">
              <FaBolt className="text-4xl text-purple-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Blazing Fast</h3>
              <p className="text-gray-600 text-sm">Our cloud-powered backend ensures your videos are converted in seconds.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaLock className="text-4xl text-purple-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Private & Secure</h3>
              <p className="text-gray-600 text-sm">We never store your files. All conversions are encrypted and auto-deleted.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaYoutube className="text-4xl text-purple-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">YouTube & More</h3>
              <p className="text-gray-600 text-sm">Supports all major video platforms and formats—MP4, MP3, AVI, and more.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <FaCodeBranch className="text-4xl text-purple-600 mb-2" />
              <h3 className="font-semibold text-lg mb-1">Open & Growing</h3>
              <p className="text-gray-600 text-sm">Built with modern tech and always improving. <a href="https://github.com/" className="text-purple-600 underline hover:text-purple-800">Contribute on GitHub</a>.</p>
            </div>
          </div>

          <div className="bg-purple-50 rounded-xl p-6 shadow text-center">
            <h2 className="text-xl font-bold text-purple-700 mb-2">Our Mission</h2>
            <p className="text-gray-700">
              We believe everyone should have access to simple, free, and secure video conversion tools. VideoConvertX is built for creators, students, and anyone who needs to convert videos—quickly and safely.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-white/80 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VideoConvertX. All rights reserved.
      </footer>
    </div>
  );
}