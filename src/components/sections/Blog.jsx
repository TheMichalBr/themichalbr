import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import {
  Calendar,
  User,
  ChevronRight,
  X,
  ArrowLeft,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [currentPostIndex, setCurrentPostIndex] = useState(0);
  const [isModalAnimating, setIsModalAnimating] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "Brand new equipment section added!",
      excerpt:
        "Yeyeye.",
      content: `I'm excited to share that I've just added a comprehensive equipment section to my website! This new addition showcases all the tools, hardware, and software that power my daily development work.

The equipment section features detailed information about my current setup, including my workstation configuration, monitors, peripherals, and the software stack I rely on for various projects. Each item includes specifications, my personal experience, and why I chose it for my workflow.

This update reflects my commitment to transparency and helping fellow developers make informed decisions about their own setups. Whether you're just starting out or looking to upgrade your current configuration, you'll find practical insights and honest reviews.

I've also included my mobile development setup, camera gear for content creation, and the networking equipment that keeps everything running smoothly. The section will be regularly updated as I test new tools and refine my workflow.

Check out the new equipment section and let me know what you think! I'm always happy to discuss setup recommendations and answer any questions about the gear I use.`,
      author: "MichalBr",
      date: "July 28, 2025",
      image:
        "https://raw.githubusercontent.com/TheMichalBr/themichalbr/refs/heads/main/public/blog/B_1.webp",
      featured: true,
    },
    {
      id: 2,
      title: "Advanced React Patterns for Enterprise Applications",
      excerpt:
        "Master the most powerful React techniques that separate senior developers from the rest.",
      content: `React has evolved tremendously over the years, and mastering advanced patterns is crucial for building enterprise-level applications. Let's explore the most powerful techniques that separate senior developers from the rest.

Custom hooks are the cornerstone of modern React development. They allow you to extract component logic into reusable functions, making your code more modular and testable. The useCallback and useMemo hooks are essential for preventing unnecessary re-renders and optimizing performance in complex applications.

React.memo is your first line of defense against performance issues. By wrapping components that receive the same props frequently, you can prevent expensive re-renders. However, be careful with object and array props - they need special handling with proper memoization strategies.

Context API patterns have become increasingly sophisticated. The provider pattern combined with useReducer creates a powerful state management solution that rivals Redux for many use cases. Consider splitting contexts to avoid unnecessary re-renders across your component tree.

Suspense and Error Boundaries create robust user experiences that handle edge cases gracefully. Suspense allows you to handle loading states declaratively, while Error Boundaries catch JavaScript errors anywhere in the component tree and provide fallback UI.

Code splitting with React.lazy and dynamic imports dramatically improves initial load times. Combined with proper bundling strategies and route-based splitting, you can create lightning-fast applications that scale beautifully as your codebase grows.`,
      author: "MichalBr",
      date: "July 25, 2025",
      image:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
      trending: true,
    },
    {
      id: 3,
      title: "Building Scalable APIs with Node.js and TypeScript",
      excerpt:
        "Learn how to create robust, type-safe APIs that can handle enterprise-level traffic and complexity.",
      content: `Building scalable APIs requires careful planning, proper architecture, and the right tools. In this comprehensive guide, we'll explore how to leverage Node.js and TypeScript to create APIs that can grow with your business needs.

TypeScript brings static typing to JavaScript, catching errors at compile time rather than runtime. This is especially valuable in API development where data validation and type safety are crucial. We'll cover advanced TypeScript patterns specific to API development.

Express.js remains the most popular Node.js framework, but we'll also explore alternatives like Fastify and Koa. Each has its strengths, and choosing the right one depends on your specific requirements for performance, features, and ecosystem.

Database integration is critical for most APIs. We'll cover both SQL and NoSQL approaches, discussing when to use each, how to implement proper connection pooling, and strategies for handling database migrations in production environments.

Authentication and authorization are often overlooked until it's too late. We'll implement JWT-based authentication, role-based access control, and discuss security best practices that protect your API from common vulnerabilities.

Testing strategies for APIs include unit tests, integration tests, and end-to-end testing. We'll set up a comprehensive testing pipeline that ensures your API remains reliable as it evolves.`,
      author: "MichalBr",
      date: "July 22, 2025",
      image:
        "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=400&fit=crop",
      latest: true,
    },
  ];

  const currentPost = blogPosts[currentPostIndex];

  // Handle modal state and body scroll lock
  useEffect(() => {
    if (selectedPost) {
      setIsModalAnimating(true);
      const scrollY = window.scrollY;

      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    } else {
      setIsModalAnimating(false);
    }
  }, [selectedPost]);

  const openPost = (post) => {
    setSelectedPost(post);
  };

  const closePost = () => {
    setIsModalAnimating(false);
    setTimeout(() => {
      setSelectedPost(null);
    }, 300);
  };

  const getPostIcon = (post) => {
    if (post.featured) return <Sparkles className="w-4 h-4 text-yellow-400" />;
    if (post.trending) return <TrendingUp className="w-4 h-4 text-green-400" />;
    if (post.latest) return <Zap className="w-4 h-4 text-blue-400" />;
    return null;
  };

  const goToPost = (index) => {
    setCurrentPostIndex(index);
  };

  const nextPost = () => {
    setCurrentPostIndex((prev) => (prev + 1) % blogPosts.length);
  };

  const prevPost = () => {
    setCurrentPostIndex(
      (prev) => (prev - 1 + blogPosts.length) % blogPosts.length
    );
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedPost && event.key === "Escape") {
        closePost();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [selectedPost]);

  // Fullscreen Modal Component
  const FullscreenModal = ({ post, onClose }) => {
    const scrollToTop = () => {
      const modalContent = document.querySelector("[data-modal-content]");
      if (modalContent) {
        modalContent.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    return (
      <div
        className={`fixed inset-0 z-[9999] backdrop-blur-lg transition-all duration-300 ${isModalAnimating ? "bg-black/95 opacity-100" : "bg-black/0 opacity-0"
          }`}
      >
        {/* Header */}
        <div
          className={`sticky top-0 bg-slate-900/95 backdrop-blur-lg border-b border-slate-600 z-[10000] transform transition-all duration-400 ${isModalAnimating
              ? "translate-y-0 opacity-100"
              : "-translate-y-full opacity-0"
            }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <button 
              onClick={onClose}
              className="flex items-center space-x-3 text-slate-300 hover:text-white transition-all duration-300 group bg-slate-800/50 px-4 py-2 rounded-full hover:bg-slate-700/50 hover:scale-105 cursor-pointer"
              aria-label="Back to page"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium text-sm sm:text-base">Back to page</span>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div
          className={`h-full overflow-y-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 transform transition-all duration-600 ${isModalAnimating
              ? "translate-y-0 opacity-100"
              : "translate-y-6 opacity-0"
            }`}
          data-modal-content
        >
          <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
            {/* Hero Image */}
            <div
              className={`relative mb-8 lg:mb-12 rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl transform transition-all duration-800 ${isModalAnimating
                  ? "scale-100 opacity-100 translate-y-0"
                  : "scale-98 opacity-0 translate-y-6"
                }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[250px] sm:h-[350px] lg:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
              {getPostIcon(post) && (
                <div
                  className={`absolute top-4 lg:top-6 left-4 lg:left-6 p-2 lg:p-3 bg-slate-900/80 rounded-full backdrop-blur-sm shadow-lg transform transition-all duration-1000 ${isModalAnimating
                      ? "scale-100 opacity-100 rotate-0"
                      : "scale-90 opacity-0 rotate-12"
                    }`}
                >
                  {getPostIcon(post)}
                </div>
              )}
            </div>

            {/* Article Header */}
            <header
              className={`mb-8 lg:mb-12 transform transition-all duration-800 delay-150 ${isModalAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
                }`}
            >
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-6 lg:mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-slate-300 bg-clip-text hover:from-blue-200 hover:via-purple-200 hover:to-cyan-200 transition-all duration-400">
                {post.title}
              </h1>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 lg:gap-6 p-4 lg:p-6 bg-slate-800/50 rounded-xl lg:rounded-2xl backdrop-blur-sm border border-slate-700/30 hover:border-slate-600/50 hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg hover:from-blue-400 hover:to-purple-500 transition-all duration-300 hover:scale-105">
                    <User className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <span className="font-semibold text-white block text-sm sm:text-base lg:text-lg hover:text-blue-300 transition-colors duration-300">
                      {post.author}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2 sm:space-x-3 bg-slate-700/50 px-3 lg:px-4 py-2 rounded-full hover:bg-slate-600/50 transition-all duration-300">
                  <Calendar className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400" />
                  <span className="font-medium text-sm sm:text-base lg:text-lg text-slate-300">
                    {post.date}
                  </span>
                </div>
              </div>
            </header>

            {/* Article Content */}
            <div
              className={`bg-slate-800/30 rounded-2xl lg:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 backdrop-blur-sm border border-slate-700/20 hover:border-slate-600/30 hover:bg-slate-800/40 transition-all duration-400 transform ${isModalAnimating
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
                }`}
              style={{ transitionDelay: "300ms" }}
            >
              <div className="prose prose-sm sm:prose-base lg:prose-lg xl:prose-xl max-w-none prose-invert">
                {post.content.split("\n\n").map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-slate-200 leading-relaxed mb-4 sm:mb-6 lg:mb-8 text-sm sm:text-base lg:text-lg xl:text-xl hover:text-slate-100 transition-colors duration-300 transform ${isModalAnimating
                        ? "translate-y-0 opacity-100"
                        : "translate-y-4 opacity-0"
                      }`}
                    style={{ transitionDelay: `${450 + index * 80}ms` }}
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Separator */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-600/30 to-transparent my-8 lg:my-12"></div>

          </article>
        </div>
      </div>
    );
  };

  return (
    <>
      <div id="blog" className="w-full">
        <div className="from-[#1e20243a] to-[#2a2d353a] rounded-2xl p-6 md:p-8 shadow-xl backdrop-blur-sm">

          <div className="flex flex-col xl:flex-row gap-8">
            {/* Main Post */}
            <div className="flex-1">
              <article
                className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-slate-600/50 rounded-3xl shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 overflow-hidden cursor-pointer hover:border-blue-500/40 hover:from-slate-700/50 hover:to-slate-800/50 transform hover:-translate-y-1"
                onClick={() => openPost(currentPost)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openPost(currentPost);
                  }
                }}
                aria-label={`Read article: ${currentPost.title}`}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-56 lg:h-64">
                  <img
                    src={currentPost.image}
                    alt={currentPost.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent group-hover:from-slate-900/75 transition-all duration-400"></div>
                  {getPostIcon(currentPost) && (
                    <div className="absolute top-6 left-6 p-3 bg-slate-900/80 rounded-full backdrop-blur-sm shadow-lg group-hover:scale-105 transition-all duration-300">
                      {getPostIcon(currentPost)}
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-8">
                  <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300 leading-tight line-clamp-2">
                    {currentPost.title}
                  </h2>

                  <p className="text-slate-300 leading-relaxed mb-6 line-clamp-3 text-base lg:text-lg group-hover:text-slate-200 transition-colors duration-300">
                    {currentPost.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between text-slate-400 mb-6 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-105 transition-all duration-300">
                        <User className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <span className="font-semibold text-white block group-hover:text-blue-300 transition-colors duration-300">
                          {currentPost.author}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-1.5 rounded-full group-hover:bg-slate-700/50 transition-all duration-300">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span className="font-medium text-slate-300">
                        {currentPost.date}
                      </span>
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-end pt-4 border-t border-slate-700/50 group-hover:border-slate-600/50 transition-colors duration-300">
                    <div className="flex items-center space-x-2 text-blue-400 font-medium group-hover:translate-x-1 transition-all duration-300 text-sm bg-blue-500/10 px-4 py-2 rounded-full hover:bg-blue-500/20">
                      <span>Read full article</span>
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </article>
            </div>

            {/* Navigation Dots */}
            <div className="flex xl:flex-col items-center justify-center gap-3 xl:gap-4 xl:py-4">
              {/* Navigation arrows */}
              <div className="flex xl:flex-col gap-2 xl:gap-3 xl:mb-4 order-2 xl:order-1">
                <button
                  onClick={prevPost}
                  className="p-2 lg:p-3 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-blue-600 hover:to-blue-700 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                  aria-label="Previous post"
                >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 rotate-90 xl:-rotate-90" />
                </button>
                <button
                  onClick={nextPost}
                  className="p-2 lg:p-3 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 hover:from-blue-600 hover:to-blue-700 text-slate-300 hover:text-white transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/20 cursor-pointer"
                  aria-label="Next post"
                >
                  <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5 -rotate-90 xl:rotate-90" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex xl:flex-col gap-3 xl:gap-4 order-1 xl:order-2">
                {blogPosts.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToPost(index)}
                    className={`w-3 h-3 lg:w-4 lg:h-4 rounded-full transition-all duration-400 hover:scale-110 ${index === currentPostIndex
                        ? "bg-gradient-to-r from-blue-400 to-blue-500 scale-125 shadow-lg shadow-blue-400/40"
                        : "bg-slate-600 hover:bg-slate-500 hover:shadow-md"
                      }`}
                    aria-label={`Go to post ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Fullscreen Modal using React Portal */}
      {selectedPost &&
        typeof document !== "undefined" &&
        createPortal(
          <FullscreenModal post={selectedPost} onClose={closePost} />,
          document.body
        )}
    </>
  );
};

export default Blog;