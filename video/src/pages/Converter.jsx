import React, { useState } from "react";
import { FaDownload, FaLink, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Converter() {
  const [videoUrl, setVideoUrl] = useState("");
  const [downloadUrl, setDownloadUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const [conversionTime, setConversionTime] = useState(null);

  const handleConvert = async () => {
    setLoading(true);
    setDownloadUrl("");
    setConversionTime(null);
    const startTime = performance.now();

    try {
      const res = await fetch("http://localhost:5000/convert", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: videoUrl }),
      });

      const data = await res.json();
      setDownloadUrl(data.downloadUrl);

      const endTime = performance.now();
      const durationInSeconds = ((endTime - startTime) / 1000).toFixed(2);
      setConversionTime(durationInSeconds);
    } catch (err) {
      alert("Failed to convert video.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 flex flex-col">
      {/* Converter Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="bg-white/80 rounded-2xl shadow-2xl max-w-lg w-full border border-purple-100 p-8 md:p-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-center text-purple-700 mb-8">
            Convert Your Video
          </h1>
          <label
            htmlFor="video-link"
            className="block text-sm font-medium mb-2 text-gray-700"
          >
            <span className="inline-flex items-center gap-2">
              <FaLink className="text-purple-400" /> Video Link
            </span>
          </label>
          <div className="flex items-center gap-2 mb-6">
            <input
              id="video-link"
              type="text"
              placeholder="Paste video link here"
              className="flex-1 p-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-400 transition border border-gray-300"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
              aria-label="Paste video link here"
            />
          </div>
          <button
            onClick={handleConvert}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 py-3 rounded-lg font-semibold transition shadow-lg disabled:opacity-60 disabled:cursor-not-allowed text-lg"
            disabled={loading || !videoUrl}
          >
            {loading ? (
              <>
                <FaSpinner className="animate-spin" /> Converting...
              </>
            ) : (
              <>
                <FaDownload /> Convert Video
              </>
            )}
          </button>

          {downloadUrl && (
            <div className="mt-8 bg-purple-50 rounded-xl p-6 shadow-lg border border-purple-100">
              <div className="flex flex-col items-center gap-4">
                <Link
                  to={downloadUrl}
                  download
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 rounded-lg font-semibold text-white shadow transition"
                >
                  <FaDownload /> Download MP4
                </Link>
                {conversionTime && (
                  <p className="text-sm text-gray-600 mt-2 text-center">
                    ⏱️ Converted in{" "}
                    <span className="font-semibold">
                      {conversionTime} seconds
                    </span>
                  </p>
                )}

                <video
                  controls
                  src={downloadUrl}
                  className="w-full rounded-lg border border-gray-200"
                  aria-label="Video preview"
                />
              </div>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto py-6 bg-white/80 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} VideoConvertX. All rights reserved.
      </footer>
    </div>
  );
}
