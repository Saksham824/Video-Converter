import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col">

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:py-24 max-w-6xl mx-auto w-full">
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Effortless <span className="text-purple-600">Video Conversion</span>
          </h1>
          <p className="text-lg text-gray-700">
            Convert your videos to any format in seconds. Fast, secure, and completely free. No downloads required!
          </p>
          <Link
            to="/converter"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition font-semibold text-lg"
          >
            Get Started
          </Link>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
            alt="Video Converter"
            className="rounded-2xl shadow-2xl w-full max-w-md"
          />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="bg-white py-16 px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">Why Choose VideoConvertX?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-purple-600">⚡</div>
              <h3 className="font-semibold text-lg mb-2">Lightning Fast</h3>
              <p className="text-gray-600">Convert videos in seconds with our optimized cloud processing.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-purple-600">🔒</div>
              <h3 className="font-semibold text-lg mb-2">Secure & Private</h3>
              <p className="text-gray-600">Your files are encrypted and deleted after conversion. Your privacy is our priority.</p>
            </div>
            <div className="bg-purple-50 rounded-xl p-6 shadow hover:shadow-lg transition">
              <div className="text-4xl mb-4 text-purple-600">🎯</div>
              <h3 className="font-semibold text-lg mb-2">Supports All Formats</h3>
              <p className="text-gray-600">MP4, AVI, MOV, MKV, and more. Convert to any format you need.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="py-16 px-8 bg-gradient-to-r from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-10">How It Works</h2>
          <ol className="space-y-8">
            <li className="flex items-start space-x-4">
              <span className="text-2xl font-bold text-purple-600">1</span>
              <div>
                <h4 className="font-semibold text-lg">Upload Your Video</h4>
                <p className="text-gray-600">Drag and drop your video file or select it from your device.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-2xl font-bold text-purple-600">2</span>
              <div>
                <h4 className="font-semibold text-lg">Choose Format</h4>
                <p className="text-gray-600">Select the output format you want to convert your video to.</p>
              </div>
            </li>
            <li className="flex items-start space-x-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
              <div>
                <h4 className="font-semibold text-lg">Download & Enjoy</h4>
                <p className="text-gray-600">Download your converted video instantly. No waiting, no hassle!</p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-white/80 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VideoConvertX. All rights reserved.
      </footer>
    </div>
  );
}