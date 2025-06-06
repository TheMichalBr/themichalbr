import { useEffect, useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
  const [text, setText] = useState("");
  const [fadeOut, setFadeOut] = useState(false);
  const fullText = "/Loading.../>";

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let index = 0;
    const interval = setInterval(() => {
      setText(fullText.substring(0, index));
      index++;

      if (index > fullText.length) {
        clearInterval(interval);
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => {
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
            onComplete();
          }, 400);
        }, 1000);
      }
    }, 80);

    return () => {
      clearInterval(interval);
      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [onComplete]);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center
        bg-gradient-to-br from-black via-gray-900 to-gray-950
        transition-opacity duration-700
        ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}
      `}
    >
      <div className="mb-6 text-4xl font-mono font-bold text-center flex items-center justify-center select-none">
        <span className="transition-opacity duration-300 opacity-100 drop-shadow-lg tracking-widest animate-pulse">{text}</span>
        <span className="animate-blink ml-1 text-blue-400 text-4xl">| </span>
      </div>
      <div className="w-[220px] h-[3px] bg-gray-800 rounded relative overflow-hidden mt-2 shadow-inner">
        <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-blue-400 via-blue-600 to-cyan-400 animate-loading-bar3 rounded"></div>
      </div>
      <div className="mt-8 text-xs text-gray-400 tracking-widest font-mono opacity-80 select-none">
        Please wait... Still waiting? <a href="https://www.githubstatus.com/" className="text-blue-400">Check for issues</a>.
      </div>
      <style>
        {`
          @keyframes blink {
            0%, 49% { opacity: 1; }
            50%, 100% { opacity: 0; }
          }
          .animate-blink {
            animation: blink 1s steps(1) infinite;
          }
          @keyframes loading-bar3 {
            0% { width: 0%; }
            60% { width: 90%; }
            100% { width: 100%; }
          }
          .animate-loading-bar3 {
            animation: loading-bar3 1.5s cubic-bezier(.77,0,.18,1) forwards;
          }
          .animate-pulse {
            animation: pulse 1.2s cubic-bezier(.4,0,.6,1) infinite alternate;
          }
          @keyframes pulse {
            0% { opacity: 1; }
            100% { opacity: 0.7; }
          }
        `}
      </style>
    </div>
  );
};