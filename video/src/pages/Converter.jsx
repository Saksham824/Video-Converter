import React, { useState } from "react";
import { FaDownload, FaLink, FaSpinner, FaCheckCircle, FaInfoCircle } from "react-icons/fa";

export default function Converter() {
  const [videoUrl, setVideoUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [conversionTime, setConversionTime] = useState(null);
  const [error, setError] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleConvert = async () => {
    setLoading(true);
    setDownloadUrl("");
    setConversionTime(null);
    setError("");
    setThumbnail("");
    const startTime = performance.now();

    try {
      const res = await fetch("http://localhost:5000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoUrl }),
      });

      if (!res.ok) throw new Error("Conversion failed.");

      const data = await res.json();
      setDownloadUrl(data.downloadUrl);

      // Optional: If your backend provides a thumbnail URL
      if (data.thumbnailUrl) setThumbnail(data.thumbnailUrl);

      const endTime = performance.now();
      setConversionTime(((endTime - startTime) / 1000).toFixed(2));
      setVideoUrl("");
    } catch (err) {
      setError("Conversion failed. Please check the link and try again.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 via-blue-100 to-pink-100 p-4 md:p-8 relative">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[url('https://www.toptal.com/designers/subtlepatterns/patterns/dots.png')]"></div>
      <div className="relative bg-white/90 p-6 md:p-10 rounded-3xl shadow-2xl max-w-2xl w-full border border-purple-100">
        <h1 className="text-4xl font-extrabold mb-2 text-center text-purple-700 drop-shadow">
          Video to MP4 Converter
        </h1>
        <p className="text-center text-gray-600 mb-6 flex items-center justify-center gap-2">
          <FaInfoCircle className="text-blue-400" />
          Paste a video link below to convert it to MP4.
        </p>

        {/* Supported sites */}
        <div className="mb-4 flex flex-wrap justify-center gap-2 text-xs">
          <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full">YouTube</span>
          <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full">Vimeo</span>
          <span className="bg-pink-100 text-pink-700 px-2 py-1 rounded-full">Dailymotion</span>
          <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full">More...</span>
        </div>

        <div className="flex flex-col md:flex-row gap-2 mb-4">
          <input
            type="text"
            aria-label="Paste video link"
            placeholder="Paste video link (e.g. https://youtube.com/...)"
            value={videoUrl}
            onChange={(e) => setVideoUrl(e.target.value)}
            className="flex-1 p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
            disabled={loading}
          />
          <button
            onClick={handleConvert}
            disabled={!videoUrl || loading}
            className="bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-lg flex justify-center items-center gap-2 disabled:opacity-60 transition"
            aria-label="Convert video"
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Converting...
              </>
            ) : (
              <>
                <FaDownload  /> Convert
              </>
            )}
          </button>
        </div>

        {/* Progress bar */}
        {loading && (
          <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
            <div className="bg-gradient-to-r from-purple-400 to-pink-400 h-2.5 animate-pulse w-3/4"></div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <div className="mb-4 text-red-600 bg-red-50 border border-red-200 rounded-lg p-3 flex items-center gap-2">
            <FaInfoCircle /> {error}
          </div>
        )}

        {/* Download section */}
        {downloadUrl && (
          <div className="mt-6 text-center space-y-4">
            <a
              href={downloadUrl}
              download
              className="inline-block px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-xl shadow-lg hover:from-green-600 hover:to-emerald-600 font-bold text-lg transition"
              aria-label="Download MP4"
            >
              <FaDownload className="inline mr-2" /> Download MP4
            </a>
            {conversionTime && (
              <p className="text-sm text-gray-600 flex items-center justify-center gap-1">
                <FaCheckCircle className="text-green-400" /> Converted in {conversionTime} seconds
              </p>
            )}
            {/* Thumbnail preview */}
            {thumbnail && (
              <img
                src={thumbnail}
                alt="Video thumbnail"
                className="mx-auto rounded-lg border shadow w-40 h-24 object-cover"
              />
            )}
            <video
              controls
              src={downloadUrl}
              className="w-full mt-4 rounded-lg border shadow"
            />
          </div>
        )}

        {/* Footer */}
        <div className="mt-8 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} Video2MP4. All rights reserved.
        </div>
      </div>
    </div>
  );
}