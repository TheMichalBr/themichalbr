import React, { useState } from "react";

export const Video= () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section id="aboutme" className="min-h-screen flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="relative w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg border border-white/10">
          {!isVideoPlaying ? (
            <div
              className="relative w-full h-0"
              style={{ paddingTop: "56.25%" }} // Poměr stran 16:9
            >
              {/* Náhled videa */}
              <img
                src={`https://img.youtube.com/vi/VgQDsqOi2wo/maxresdefault.jpg`}
                alt="Video Thumbnail"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              {/* Tlačítko přehrávání */}
              <button
                onClick={handlePlayVideo}
                className="absolute inset-0 flex items-center justify-center bg-black/50 hover:bg-black/60 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14.752 11.168l-5.197-3.013A1 1 0 008 9.017v5.966a1 1 0 001.555.832l5.197-3.013a1 1 0 000-1.664z"
                  />
                </svg>
              </button>
            </div>
          ) : (
            <div className="relative w-full h-0" style={{ paddingTop: "56.25%" }}>
              {/* YouTube iframe */}
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                src="https://www.youtube.com/embed/VgQDsqOi2wo?autoplay=1"
                title="MichalBr - YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Video;