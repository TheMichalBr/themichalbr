import { useState, useEffect } from "react";

const Video = ({ videoUrl }) => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [videoTitle, setVideoTitle] = useState("Loading...");
  const [videoViews, setVideoViews] = useState("Loading...");

  const getVideoId = (url) => {
    const match = url.match(
      /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&]+)/
    );
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    if (videoId) {
      const fetchVideoData = async () => {
        try {
          const response = await fetch(
            `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${API_KEY}`
          );
          const data = await response.json();
          if (data.items && data.items.length > 0) {
            const videoData = data.items[0];
            setVideoTitle(videoData.snippet.title);
            setVideoViews(
              `${parseInt(videoData.statistics.viewCount).toLocaleString()} views`
            );
          }
        } catch (error) {
          console.error("Error fetching video data:", error);
        }
      };

      fetchVideoData();
    }
  }, [API_KEY, videoId]);

  if (!videoId) {
    return (
      <div className="text-center text-red-500">
        <p>Invalid YouTube URL provided.</p>
      </div>
    );
  }

  const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

  return (
    <div className="flex flex-col items-center justify-center py-1">
      <div
        className="relative w-full max-w-4xl rounded-xl overflow-hidden shadow-md border border-white/20 hover:shadow-lg transition-shadow"
        onMouseEnter={(e) => e.currentTarget.classList.add("hovered")}
        onMouseLeave={(e) => e.currentTarget.classList.remove("hovered")}
      >
        {!isVideoPlaying ? (
          <div className="relative w-full h-0" style={{ paddingTop: "56.25%" }}>
            <img
              src={videoThumbnail}
              alt="Video Thumbnail"
              className="absolute top-0 left-0 w-full h-full object-cover rounded-xl"
            />
            <div className="absolute top-0 left-0 w-full h-full bg-black/70 rounded-xl"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <button
                onClick={() => setIsVideoPlaying(true)}
                className="bg-black/70 p-4 rounded-full hover:bg-black/80 transition-colors cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 hover:scale-110 transition-transform text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div
            className="relative w-full max-w-4xl mx-auto"
            style={{ paddingTop: "56.25%" }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg border border-white/10"
              src={embedUrl}
              title="MichalBr - YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setIsVideoPlaying(false)}
              className="absolute top-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/80 transition-colors cursor-pointer"
            >
              ✖
            </button>
          </div>
        )}
      </div>
      <div className="mt-4 flex justify-between w-full max-w-4xl">
        <h3 className="text-lg font-bold text-white select-none">{videoTitle}</h3>
        <p className="text-sm text-gray-400 select-none">{videoViews}</p>
      </div>
    </div>
  );
};

export default Video;