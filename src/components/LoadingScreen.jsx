import { useEffect, useState, useCallback, useMemo, useRef } from "react";

const TOTAL_DURATION = 700;
const STAR_CONFIG = {
  MOBILE_COUNT: 80,
  DESKTOP_COUNT: 120,
};
const GITHUB_STATUS_TIMEOUT = 5000;
const PROGRESS_PHASES = {
  phase1: { end: 0.2, targetProgress: 25 },
  phase2: { start: 0.2, end: 0.7, targetProgress: 50 },
  phase3: { start: 0.7, end: 1, targetProgress: 25 },
};

const calculateProgress = (normalizedTime) => {
  if (normalizedTime < PROGRESS_PHASES.phase1.end) {
    return (
      (normalizedTime / PROGRESS_PHASES.phase1.end) *
      PROGRESS_PHASES.phase1.targetProgress
    );
  } else if (normalizedTime < PROGRESS_PHASES.phase2.end) {
    const phaseProgress =
      (normalizedTime - PROGRESS_PHASES.phase2.start) /
      (PROGRESS_PHASES.phase2.end - PROGRESS_PHASES.phase2.start);
    return (
      PROGRESS_PHASES.phase1.targetProgress +
      phaseProgress * PROGRESS_PHASES.phase2.targetProgress
    );
  } else {
    const phaseProgress =
      (normalizedTime - PROGRESS_PHASES.phase3.start) /
      (PROGRESS_PHASES.phase3.end - PROGRESS_PHASES.phase3.start);
    return (
      PROGRESS_PHASES.phase1.targetProgress +
      PROGRESS_PHASES.phase2.targetProgress +
      phaseProgress * PROGRESS_PHASES.phase3.targetProgress
    );
  }
};

export const LoadingScreen = ({ onComplete }) => {
  const [fadeOut, setFadeOut] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTask, setCurrentTask] = useState("");
  const [stars, setStars] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const [estimatedTime, setEstimatedTime] = useState(1);
  const [isVisible, setIsVisible] = useState(true);
  const [systemStatus, setSystemStatus] = useState("checking");

  const timeIntervalRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const fadeTimeoutRef = useRef(null);
  const completeTimeoutRef = useRef(null);

  const loadingTasks = useMemo(
    () => [
      "Initializing components..",
      "Loading all assets..",
      "Finalizing setup..",
      "Entering page..",
    ],
    [],
  );

  useEffect(() => {
    const checkGitHubStatus = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(
        () => controller.abort(),
        GITHUB_STATUS_TIMEOUT,
      );

      try {
        const response = await fetch(
          "https://www.githubstatus.com/api/v2/status.json",
          { signal: controller.signal },
        );
        const data = await response.json();
        setSystemStatus(
          data.status.indicator === "none" ? "operational" : "issues",
        );
      } catch {
        setSystemStatus("unknown");
      } finally {
        clearTimeout(timeoutId);
      }
    };

    checkGitHubStatus();
  }, []);

  const generateStars = useCallback(() => {
    const starCount =
      window.innerWidth < 768
        ? STAR_CONFIG.MOBILE_COUNT
        : STAR_CONFIG.DESKTOP_COUNT;
    return Array.from({ length: starCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      opacity: Math.random() * 0.7 + 0.3,
      twinkleDelay: Math.random() * 2,
      twinkleDuration: 1.5 + Math.random() * 1.5,
    }));
  }, []);

  useEffect(() => {
    setStars(generateStars());

    const handleResize = () => {
      setStars(generateStars());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [generateStars]);

  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const startTime = Date.now();

    timeIntervalRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTime) / 1000;
      setElapsedTime(elapsed);
    }, 16);

    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;

      const normalizedTime = Math.min(elapsed / TOTAL_DURATION, 1);
      let newProgress = calculateProgress(normalizedTime);

      newProgress = Math.min(Math.max(newProgress, 0), 100);
      setProgress(newProgress);

      const currentTime = elapsed / 1000;

      if (newProgress > 5 && newProgress < 95) {
        const measurementDelta = 300;
        if (!progressIntervalRef.lastMeasurement) {
          progressIntervalRef.lastMeasurement = {
            progress: newProgress,
            time: currentTime,
          };
        } else if (
          currentTime - progressIntervalRef.lastMeasurement.time >=
          measurementDelta / 1000
        ) {
          const progressDiff =
            newProgress - progressIntervalRef.lastMeasurement.progress;
          const timeDiff =
            currentTime - progressIntervalRef.lastMeasurement.time;

          if (progressDiff > 0 && timeDiff > 0) {
            const progressRate = progressDiff / timeDiff;
            const remainingProgress = 100 - newProgress;
            const estimatedRemaining = remainingProgress / progressRate;
            const newEstimatedTotal = currentTime + estimatedRemaining;
            setEstimatedTime(
              Math.max(Math.min(newEstimatedTotal, 2), currentTime + 0.1),
            );
          }
          progressIntervalRef.lastMeasurement = {
            progress: newProgress,
            time: currentTime,
          };
        }
      }

      const taskIndex = Math.min(
        Math.floor((newProgress / 100) * loadingTasks.length),
        loadingTasks.length - 1,
      );
      setCurrentTask(loadingTasks[taskIndex] || "");

      if (elapsed >= TOTAL_DURATION) {
        clearInterval(progressIntervalRef.current);
        clearInterval(timeIntervalRef.current);
        setProgress(100);
        setCurrentTask("Entering page..");

        fadeTimeoutRef.current = setTimeout(() => {
          setFadeOut(true);
          completeTimeoutRef.current = setTimeout(() => {
            setIsVisible(false);
            document.body.style.overflow = originalBodyOverflow;
            document.documentElement.style.overflow = originalHtmlOverflow;
            if (onComplete) onComplete();
          }, 300);
        }, 100);
      }
    }, 16);

    return () => {
      if (timeIntervalRef.current) clearInterval(timeIntervalRef.current);
      if (progressIntervalRef.current)
        clearInterval(progressIntervalRef.current);
      if (fadeTimeoutRef.current) clearTimeout(fadeTimeoutRef.current);
      if (completeTimeoutRef.current) clearTimeout(completeTimeoutRef.current);

      document.body.style.overflow = originalBodyOverflow;
      document.documentElement.style.overflow = originalHtmlOverflow;
    };
  }, [onComplete, loadingTasks]);

  const StarField = useMemo(
    () => (
      <div className="absolute inset-0 pointer-events-none">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute bg-white rounded-full animate-twinkle"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.twinkleDelay}s`,
              animationDuration: `${star.twinkleDuration}s`,
              willChange: "opacity, transform",
            }}
          />
        ))}
      </div>
    ),
    [stars],
  );

  if (!isVisible) return null;

  return (
    <div
      className={`
        fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950
        transition-all duration-300 ease-out
        ${fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"}
        overflow-hidden
      `}
      style={{ willChange: "opacity" }}
    >
      {StarField}

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-8 text-5xl font-mono font-bold text-center select-none">
          <span className="text-white drop-shadow-2xl tracking-widest">
            Loading
          </span>
        </div>

        <div className="relative mb-6 w-96">
          <div className="w-full h-3 bg-gray-800 bg-opacity-60 rounded-full relative overflow-hidden shadow-inner backdrop-blur-sm border border-gray-600 border-opacity-40">
            <div
              className="absolute left-0 top-0 h-full bg-linear-to-r from-blue-400 via-cyan-400 to-blue-500 rounded-full transition-all duration-75 ease-out shadow-lg"
              style={{
                width: `${progress}%`,
                willChange: "width",
              }}
            />
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-white to-transparent opacity-25 animate-shimmer" />
          </div>

          <div className="absolute -top-7 right-0 text-sm font-mono text-blue-300 tracking-wider">
            {Math.round(progress)}%
          </div>
        </div>

        <div className="text-center mb-3">
          <div className="text-base text-blue-200 tracking-wide font-mono transition-all duration-200 select-none min-h-6">
            {currentTask}
          </div>
        </div>

        <div className="text-center mb-3">
          <div className="flex justify-center items-center space-x-8 text-sm font-mono text-gray-300">
            <div className="flex items-center space-x-2">
              <div className="w-1 h-1 bg-blue-400 rounded-full animate-bounce-smooth" />
              <span className="text-gray-400">Elapsed:</span>
              <span className="text-blue-300 tabular-nums">
                {elapsedTime.toFixed(1)}s
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div
                className="w-1 h-1 bg-green-400 rounded-full animate-bounce-smooth"
                style={{ animationDelay: "0.2s" }}
              />
              <span className="text-gray-400">ETA:</span>
              <span className="text-green-300 tabular-nums">
                {estimatedTime.toFixed(1)}s
              </span>
            </div>
          </div>
        </div>

        <div className="text-xs text-gray-400 tracking-wide font-mono opacity-70 select-none text-center">
          <div className="flex items-center justify-center space-x-2 mb-2">
            <div
              className={`w-1 h-1 rounded-full animate-pulse ${systemStatus === "operational"
                  ? "bg-green-400"
                  : systemStatus === "issues"
                    ? "bg-red-400"
                    : "bg-yellow-400"
                }`}
            />
            <span>
              System Status:{" "}
              {systemStatus === "operational"
                ? "Operational"
                : systemStatus === "issues"
                  ? "Issues Detected"
                  : "Checking..."}
            </span>
          </div>

          <div>
            Having issues?{" "}
            <a
              href="https://www.githubstatus.com/"
              className="text-blue-400 hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Check GitHub status.
            </a>
          </div>
        </div>
      </div>

      <style>
        {`
          @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .animate-shimmer {
            animation: shimmer 1.5s ease-in-out infinite;
          }

          @keyframes twinkle {
            0%, 100% { opacity: 0.3; transform: scale(1); }
            50% { opacity: 1; transform: scale(1.1); }
          }

          .animate-twinkle {
            animation: twinkle 2.2s ease-in-out infinite;
          }

          @keyframes nebula-drift {
            0% { transform: translateX(0) translateY(0) rotate(0deg); }
            33% { transform: translateX(8px) translateY(-8px) rotate(120deg); }
            66% { transform: translateX(-4px) translateY(4px) rotate(240deg); }
            100% { transform: translateX(0) translateY(0) rotate(360deg); }
          }

          @keyframes nebula-drift-reverse {
            0% { transform: translateX(0) translateY(0) rotate(0deg); }
            33% { transform: translateX(-8px) translateY(8px) rotate(-120deg); }
            66% { transform: translateX(4px) translateY(-4px) rotate(-240deg); }
            100% { transform: translateX(0) translateY(0) rotate(-360deg); }
          }

          @keyframes nebula-pulse {
            0%, 100% { opacity: 0.03; transform: scale(1); }
            50% { opacity: 0.09; transform: scale(1.05); }
          }

          @keyframes shooting-star {
            0% { 
              transform: translateX(-50vw) translateY(0); 
              opacity: 0; 
              box-shadow: 0 0 0 transparent; 
            }
            15% { 
              opacity: 1; 
              box-shadow: 0 0 8px #ffffff, 0 0 16px #ffffff; 
            }
            85% { 
              opacity: 1; 
              box-shadow: 0 0 8px #ffffff, 0 0 16px #ffffff; 
            }
            100% { 
              transform: translateX(150vw) translateY(50vh); 
              opacity: 0; 
              box-shadow: 0 0 0 transparent; 
            }
          }

          @keyframes shooting-star-2 {
            0% { 
              transform: translateX(50vw) translateY(0); 
              opacity: 0; 
              box-shadow: 0 0 0 transparent; 
            }
            20% { 
              opacity: 1; 
              box-shadow: 0 0 6px #93c5fd, 0 0 12px #93c5fd; 
            }
            80% { 
              opacity: 1; 
              box-shadow: 0 0 6px #93c5fd, 0 0 12px #93c5fd; 
            }
            100% { 
              transform: translateX(-100vw) translateY(40vh); 
              opacity: 0; 
              box-shadow: 0 0 0 transparent; 
            }
          }

          @keyframes shooting-star-3 {
            0% { 
              transform: translateX(0) translateY(50vh); 
              opacity: 0; 
              box-shadow: 0 0 0 transparent; 
            }
            25% { 
              opacity: 1; 
              box-shadow: 0 0 5px #67e8f9, 0 0 10px #67e8f9; 
            }
            75% { 
              opacity: 1; 
              box-shadow: 0 0 5px #67e8f9, 0 0 10px #67e8f9; 
            }
            100% { 
              transform: translateX(100vw) translateY(-20vh); 
              opacity: 0; 
              box-shadow: 0 0 0 transparent; 
            }
          }

          @keyframes bounce-smooth {
            0%, 80%, 100% { transform: scale(0.9) translateY(0); opacity: 0.6; }
            40% { transform: scale(1.1) translateY(-4px); opacity: 1; }
          }

          .animate-bounce-smooth {
            animation: bounce-smooth 1.2s ease-in-out infinite;
          }

          @media (prefers-reduced-motion: reduce) {
            .animate-twinkle,
            .animate-shimmer,
            .animate-bounce-smooth {
              animation-duration: 0.01ms !important;
              animation-iteration-count: 1 !important;
            }
          }
        `}
      </style>
    </div>
  );
};