import React, { useState, useEffect, useRef } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { blogPosts } from "./blogPosts";

const Blog = () => {
  const [openPost, setOpenPost] = useState(null);
  const scrollYRef = useRef(0);

  useEffect(() => {
    if (openPost !== null) {
      scrollYRef.current = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollYRef.current}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
    } else {
      const y = scrollYRef.current;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      window.scrollTo(0, y);
    }
    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
    };
  }, [openPost]);

  const isToday = (dateStr) => {
    const today = new Date();
    const date = new Date(dateStr);
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  // Only show the 2 most recent posts
  const sortedPosts = [...blogPosts]
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2);

  return (
    <section
      id="blog"
      className="max-w-5xl mx-auto px-4 md:px-12 py-20 md:py-32"
    >
      <div className="relative z-10">
        <RevealOnScroll>
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Blog Posts
          </h2>
        </RevealOnScroll>
        <div className="flex flex-col gap-10">
          {sortedPosts.map((post, idx) => (
            <RevealOnScroll key={idx}>
              <div
                tabIndex={0}
                onClick={() => setOpenPost(idx)}
                className="group relative flex flex-col md:flex-row items-stretch bg-white/80 dark:bg-[#181e2a] rounded-2xl shadow-xl border border-blue-200/40 dark:border-blue-900/40 hover:shadow-2xl hover:border-cyan-400/60 transition-all duration-300 cursor-pointer overflow-hidden focus:outline-none"
                style={{ minHeight: 220 }}
              >
                <div className="md:w-1/3 w-full h-48 md:h-auto relative overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    draggable={false}
                    style={{ willChange: "transform" }}
                  />
                  {isToday(post.date) && (
                    <div className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-4 py-1 rounded-full font-bold shadow pointer-events-none select-none uppercase tracking-widest">
                      New
                    </div>
                  )}
                </div>
                <div className="flex-1 flex flex-col justify-between p-8">
                  <div>
                    <h3 className="text-2xl font-extrabold text-gray-900 dark:text-white mb-2 group-hover:text-cyan-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-cyan-300 mb-3 font-mono tracking-wider uppercase block">
                      {new Date(post.date).toLocaleDateString("en-GB")}
                    </span>
                    <p className="text-gray-700 dark:text-gray-300 text-base mb-6 line-clamp-3">{post.excerpt}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-cyan-500 font-semibold text-base group-hover:underline transition-all">
                    Read more
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="inline-block"><path d="M7 10h6M11 8l2 2-2 2"/></svg>
                  </span>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>

      {openPost !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-[2px] animate-fade-in"
          onClick={() => setOpenPost(null)}
        >
          <div
            className="relative w-full max-w-6xl mx-2 md:mx-8 bg-white/95 dark:bg-[#181e2a] rounded-3xl shadow-2xl border border-cyan-400/40 overflow-hidden animate-modal-pop flex flex-col md:flex-row"
            style={{ maxHeight: "94vh" }}
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setOpenPost(null)}
              className="absolute top-8 right-8 z-30 p-0 m-0 border-none bg-transparent cursor-pointer focus:outline-none transition-all duration-200"
              aria-label="Close"
              style={{
                width: 44,
                height: 44,
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
              onMouseEnter={e => {
                e.currentTarget.firstChild.style.stroke = "#06b6d4";
                e.currentTarget.firstChild.style.transform = "scale(1.18) rotate(90deg)";
                e.currentTarget.firstChild.style.transition = "all 0.22s cubic-bezier(.4,0,.2,1)";
              }}
              onMouseLeave={e => {
                e.currentTarget.firstChild.style.stroke = "#fff";
                e.currentTarget.firstChild.style.transform = "scale(1) rotate(0deg)";
              }}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                style={{
                  pointerEvents: "none",
                  stroke: "#fff",
                  transition: "all 0.22s cubic-bezier(.4,0,.2,1)"
                }}
              >
                <line x1="7" y1="7" x2="17" y2="17" strokeWidth="2.2" strokeLinecap="round"/>
                <line x1="17" y1="7" x2="7" y2="17" strokeWidth="2.2" strokeLinecap="round"/>
              </svg>
            </button>
            <div className="md:w-1/2 w-full h-72 md:h-auto relative overflow-hidden flex-shrink-0">
              <img
                src={sortedPosts[openPost].image}
                alt={sortedPosts[openPost].title}
                className="w-full h-full object-cover"
                draggable={false}
                style={{ willChange: "transform", maxHeight: "94vh" }}
              />
            </div>
            <div className="flex-1 flex flex-col p-8 md:p-16 pt-8 md:pt-14 overflow-y-auto" style={{ maxHeight: "94vh" }}>
              <h3 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white mb-2 pr-16 break-words">{sortedPosts[openPost].title}</h3>
              <span className="text-xs text-gray-500 dark:text-cyan-300 mb-4 font-mono tracking-wider uppercase">
                {new Date(sortedPosts[openPost].date).toLocaleDateString("en-GB")}
              </span>
              <div className="prose prose-invert max-w-none text-gray-800 dark:text-gray-200 text-base mb-2 overflow-y-auto custom-scrollbar">
                {sortedPosts[openPost].content}
              </div>
            </div>
          </div>
        </div>
      )}
      <style>
        {`
        .animate-fade-in {
          animation: fadeInBlogModal 0.25s cubic-bezier(.4,0,.2,1);
        }
        .animate-modal-pop {
          animation: modalPop 0.22s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInBlogModal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalPop {
          from { opacity: 0; transform: scale(0.96) translateY(32px);}
          to { opacity: 1; transform: scale(1) translateY(0);}
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #38bdf8;
          border-radius: 8px;
        }
        `}
      </style>
    </section>
  );
};

export default Blog;