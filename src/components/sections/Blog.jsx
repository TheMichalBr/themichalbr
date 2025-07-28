import React, { useState } from "react";
import {
    Calendar,
    User,
    ChevronRight,
    Heart,
    MessageCircle,
    Share2,
    X,
    ArrowLeft,
} from "lucide-react";

const Blog = () => {
    const [selectedPost, setSelectedPost] = useState(null);
    const [likedPosts, setLikedPosts] = useState(new Set());

    const blogPosts = [
        {
            id: 1,
            title: "Web Development Trends 2025",
            excerpt:
                "Discover the latest trends and technologies shaping the future of the web. From new CSS features to advanced JavaScript frameworks.",
            content: `Web development is constantly evolving, and 2025 brings many exciting developments. Among the most important trends are serverless architectures that allow developers to focus on code without worrying about infrastructure.

New CSS features like Container Queries are revolutionizing responsive design. Instead of relying solely on viewport size, we can now style elements based on the size of their parent container.

JavaScript frameworks are focusing on performance optimization. React Server Components and similar technologies enable server-side rendering with client-side interactivity.

Progressive Web Apps (PWA) are gaining popularity due to better browser support and the ability to install directly from the web. Users can now use web applications like native ones.

WebAssembly opens doors for running high-performance applications directly in the browser. We can now port existing applications written in C++, Rust, or other languages.`,
            author: "John Smith",
            date: "July 15, 2025",
            image:
                "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
            readTime: "5 min read",
            likes: 42,
            comments: 12,
        },
        {
            id: 2,
            title: "Artificial Intelligence in Everyday Life",
            excerpt:
                "How AI is changing the way we work, communicate, and solve problems. Practical examples and future prospects.",
            content: `Artificial intelligence is no longer science fiction, but the reality of our daily lives. From voice assistants to recommendation systems - AI is everywhere around us.

At work, AI helps us automate routine tasks, analyze data, and generate content. Tools like ChatGPT, GitHub Copilot, or Midjourney are changing how we approach creative and technical challenges.

In healthcare, AI assists with diagnostics, medical image analysis, and drug discovery. Personalized medicine based on AI analysis of genetic data is becoming a reality.

Transportation is experiencing a revolution with autonomous vehicles. While fully self-driving cars aren't common yet, advanced assistance systems are already saving lives today.

Education is becoming personalized thanks to AI tutors that adapt to each student's individual pace and learning style. Online courses use AI for content recommendations and progress assessment.`,
            author: "Sarah Johnson",
            date: "July 12, 2025",
            image:
                "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
            readTime: "8 min read",
            likes: 67,
            comments: 23,
        },
        {
            id: 3,
            title: "Sustainable Design and Green Technologies",
            excerpt:
                "How to create environmentally friendly websites and applications. Tips for performance optimization and reducing carbon footprint.",
            content: `Sustainability in the digital world is an increasingly important topic. Every web page load consumes energy and contributes to CO2 emissions.

Image optimization is key. Use modern formats like WebP or AVIF that provide better compression. Lazy loading ensures images load only when needed.

Minimizing CSS and JavaScript files reduces the amount of data transferred. Tree shaking removes unused code. Critical CSS ensures fast page rendering.

Green hosting uses renewable energy sources. Many hosting companies now offer carbon-neutral or even carbon-negative hosting.

Dark mode isn't just trendy, but also saves energy on OLED displays. Dark pixels consume less energy than light ones.

Use CDN for faster content delivery and reduced server load. Caching reduces the number of server requests and saves bandwidth.`,
            author: "Michael Brown",
            date: "July 10, 2025",
            image:
                "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
            readTime: "6 min read",
            likes: 35,
            comments: 8,
        },
        {
            id: 4,
            title: "Mobile Apps vs Web Applications",
            excerpt:
                "Comparison of advantages and disadvantages of different development approaches. What to choose for your next project?",
            content: `Choosing between a mobile and web application depends on many factors. Let's go through the main differences and advantages of both approaches.

Mobile applications offer better performance and access to native device functions. They can utilize camera, GPS, push notifications, and other hardware. The user experience is often smoother.

Web applications are accessible on all platforms without installation. Updates are immediate and there's no need to go through app store approval processes.

Progressive Web Apps combine the advantages of both worlds. They offer offline functionality, push notifications, and installation capability, but remain web applications.

Development costs are often lower for web applications, especially if you're targeting multiple platforms. One code works everywhere, while mobile apps often require separate development for iOS and Android.

React Native and Flutter enable cross-platform mobile app development with one codebase. The result is closer to native performance than web applications.

The decision depends on your requirements: Need hardware access? Mobile app. Want quick deployment and wide accessibility? Web application.`,
            author: "Emily Davis",
            date: "July 8, 2025",
            image:
                "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
            readTime: "7 min read",
            likes: 28,
            comments: 15,
        },
    ];

    const openPost = (post) => {
        setSelectedPost(post);
        document.body.style.overflow = "hidden";
    };

    const closePost = () => {
        setSelectedPost(null);
        document.body.style.overflow = "unset";
    };

    const toggleLike = (postId, e) => {
        e.stopPropagation();
        const newLikedPosts = new Set(likedPosts);
        if (likedPosts.has(postId)) {
            newLikedPosts.delete(postId);
        } else {
            newLikedPosts.add(postId);
        }
        setLikedPosts(newLikedPosts);
    };

    const handleComment = (e) => {
        e.stopPropagation();
        // Comment functionality would be implemented here
    };

    const handleShare = (e) => {
        e.stopPropagation();
        // Share functionality would be implemented here
    };

    if (selectedPost) {
        return (
            <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
                    <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
                        <button
                            onClick={closePost}
                            className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            <span>Back to blog</span>
                        </button>
                        <button
                            onClick={closePost}
                            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>
                </div>

                {/* Article Content */}
                <article className="max-w-4xl mx-auto px-4 py-8">
                    {/* Hero Image */}
                    <div className="relative mb-8 rounded-2xl overflow-hidden">
                        <img
                            src={selectedPost.image}
                            alt={selectedPost.title}
                            className="w-full h-96 object-cover"
                        />
                    </div>

                    {/* Article Header */}
                    <header className="mb-8">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                            {selectedPost.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                            <div className="flex items-center space-x-2">
                                <User className="w-5 h-5" />
                                <span className="font-medium">{selectedPost.author}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Calendar className="w-5 h-5" />
                                <span>{selectedPost.date}</span>
                            </div>
                            <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">
                                {selectedPost.readTime}
                            </span>
                        </div>

                        <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
                            <button
                                onClick={(e) => toggleLike(selectedPost.id, e)}
                                className={`flex items-center space-x-2 transition-colors ${likedPosts.has(selectedPost.id)
                                        ? "text-red-500"
                                        : "text-gray-500 hover:text-red-500"
                                    }`}
                            >
                                <Heart
                                    className={`w-6 h-6 ${likedPosts.has(selectedPost.id) ? "fill-current" : ""}`}
                                />
                                <span className="font-medium">
                                    {selectedPost.likes +
                                        (likedPosts.has(selectedPost.id) ? 1 : 0)}
                                </span>
                            </button>
                            <button
                                onClick={handleComment}
                                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
                            >
                                <MessageCircle className="w-6 h-6" />
                                <span className="font-medium">{selectedPost.comments}</span>
                            </button>
                            <button
                                onClick={handleShare}
                                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
                            >
                                <Share2 className="w-6 h-6" />
                                <span className="font-medium">Share</span>
                            </button>
                        </div>
                    </header>

                    {/* Article Content */}
                    <div className="prose prose-lg max-w-none">
                        {selectedPost.content.split("\n\n").map((paragraph, index) => (
                            <p key={index} className="text-gray-700 leading-relaxed mb-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Author Bio */}
                    <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                                <User className="w-8 h-8 text-white" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-900">
                                    {selectedPost.author}
                                </h3>
                                <p className="text-gray-600">
                                    Article author and expert in technology and development
                                </p>
                            </div>
                        </div>
                    </div>
                </article>
            </div>
        );
    }

    return (
        <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <article
                            key={post.id}
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
                            onClick={() => openPost(post)}
                            style={{
                                animationDelay: `${index * 0.1}s`,
                            }}
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4">
                                    <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full">
                                        {post.readTime}
                                    </span>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                                    {post.title}
                                </h2>

                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>

                                {/* Meta Info */}
                                <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="flex items-center space-x-2">
                                            <User className="w-4 h-4" />
                                            <span>{post.author}</span>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Engagement Stats */}
                                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                                    <div className="flex items-center space-x-6">
                                        <button
                                            onClick={(e) => toggleLike(post.id, e)}
                                            className={`flex items-center space-x-2 transition-colors ${likedPosts.has(post.id)
                                                    ? "text-red-500"
                                                    : "text-gray-500 hover:text-red-500"
                                                }`}
                                        >
                                            <Heart
                                                className={`w-5 h-5 ${likedPosts.has(post.id) ? "fill-current" : ""}`}
                                            />
                                            <span>
                                                {post.likes + (likedPosts.has(post.id) ? 1 : 0)}
                                            </span>
                                        </button>
                                        <button
                                            onClick={handleComment}
                                            className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
                                        >
                                            <MessageCircle className="w-5 h-5" />
                                            <span>{post.comments}</span>
                                        </button>
                                        <button
                                            onClick={handleShare}
                                            className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
                                        >
                                            <Share2 className="w-5 h-5" />
                                        </button>
                                    </div>

                                    <div className="flex items-center space-x-2 text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
                                        <span>Read more</span>
                                        <ChevronRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Load More Button */}
                <div className="text-center mt-16">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Load more posts
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blog;














import React, { useState, useMemo } from "react";
import {
  Calendar,
  User,
  ChevronRight,
  Heart,
  MessageCircle,
  Share2,
  X,
  ArrowLeft,
} from "lucide-react";

const Blog = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [likedPosts, setLikedPosts] = useState(new Set());

  const toggleLike = (postId, e) => {
    e?.stopPropagation();
    setLikedPosts((prev) => {
      const updated = new Set(prev);
      updated.has(postId) ? updated.delete(postId) : updated.add(postId);
      return updated;
    });
  };

  const handleComment = (e) => {
    e?.stopPropagation();
    alert("Comment functionality coming soon!");
  };

  const handleShare = (e) => {
    e?.stopPropagation();
    alert("Share functionality coming soon!");
  };

  const blogPosts = useMemo(() => [
    {
      id: 1,
      title: "Web Development Trends 2025",
      excerpt:
        "Discover the latest trends and technologies shaping the future of the web. From new CSS features to advanced JavaScript frameworks.",
      content: `Web development is constantly evolving, and 2025 brings many exciting developments...`,
      author: "John Smith",
      date: "July 15, 2025",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      readTime: "5 min read",
      likes: 42,
      comments: 12,
    },
    {
      id: 2,
      title: "Artificial Intelligence in Everyday Life",
      excerpt:
        "How AI is changing the way we work, communicate, and solve problems. Practical examples and future prospects.",
      content: `Artificial intelligence is no longer science fiction...`,
      author: "Sarah Johnson",
      date: "July 12, 2025",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=300&fit=crop",
      readTime: "8 min read",
      likes: 67,
      comments: 23,
    },
    {
      id: 3,
      title: "Sustainable Design and Green Technologies",
      excerpt:
        "How to create environmentally friendly websites and applications. Tips for performance optimization and reducing carbon footprint.",
      content: `Sustainability in the digital world is an increasingly important topic...`,
      author: "Michael Brown",
      date: "July 10, 2025",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=500&h=300&fit=crop",
      readTime: "6 min read",
      likes: 35,
      comments: 8,
    },
    {
      id: 4,
      title: "Mobile Apps vs Web Applications",
      excerpt:
        "Comparison of advantages and disadvantages of different development approaches. What to choose for your next project?",
      content: `Choosing between a mobile and web application depends on many factors...`,
      author: "Emily Davis",
      date: "July 8, 2025",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop",
      readTime: "7 min read",
      likes: 28,
      comments: 15,
    },
  ], []);

  const BlogPostCard = ({ post, index }) => {
    const liked = likedPosts.has(post.id);

    return (
      <article
        onClick={() => {
          setSelectedPost(post);
          document.body.style.overflow = "hidden";
        }}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 cursor-pointer"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="relative overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4">
            <span className="px-3 py-1 bg-black/70 text-white text-sm rounded-full">
              {post.readTime}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>
          <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div className="flex items-center space-x-6">
              <button
                onClick={(e) => toggleLike(post.id, e)}
                className={`flex items-center space-x-2 transition-colors ${liked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
              >
                <Heart className={`w-5 h-5 ${liked ? "fill-current" : ""}`} />
                <span>{post.likes + (liked ? 1 : 0)}</span>
              </button>
              <button
                onClick={handleComment}
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{post.comments}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
              >
                <Share2 className="w-5 h-5" />
              </button>
            </div>
            <div className="flex items-center space-x-2 text-blue-600 font-medium group-hover:translate-x-1 transition-transform">
              <span>Read more</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </article>
    );
  };

  const BlogPostModal = ({ post }) => {
    const liked = likedPosts.has(post.id);

    return (
      <div className="fixed inset-0 bg-white z-50 overflow-y-auto">
        <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
            <button
              onClick={() => {
                setSelectedPost(null);
                document.body.style.overflow = "unset";
              }}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to blog</span>
            </button>
            <button
              onClick={() => {
                setSelectedPost(null);
                document.body.style.overflow = "unset";
              }}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 py-8">
          <div className="relative mb-8 rounded-2xl overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-96 object-cover" />
          </div>
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User className="w-5 h-5" />
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>{post.date}</span>
              </div>
              <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">{post.readTime}</span>
            </div>
            <div className="flex items-center space-x-6 pb-6 border-b border-gray-200">
              <button
                onClick={(e) => toggleLike(post.id, e)}
                className={`flex items-center space-x-2 transition-colors ${liked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
              >
                <Heart className={`w-6 h-6 ${liked ? "fill-current" : ""}`} />
                <span className="font-medium">{post.likes + (liked ? 1 : 0)}</span>
              </button>
              <button
                onClick={handleComment}
                className="flex items-center space-x-2 text-gray-500 hover:text-blue-500 transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span className="font-medium">{post.comments}</span>
              </button>
              <button
                onClick={handleShare}
                className="flex items-center space-x-2 text-gray-500 hover:text-green-500 transition-colors"
              >
                <Share2 className="w-6 h-6" />
                <span className="font-medium">Share</span>
              </button>
            </div>
          </header>
          <div className="prose prose-lg max-w-none text-gray-700">
            {post.content.split("\n\n").map((p, i) => (
              <p key={i} className="mb-6 leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                <User className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
                <p className="text-gray-600">Article author and expert in technology and development</p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <div className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </div>
        <div className="text-center mt-16">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Load more posts
          </button>
        </div>
      </div>
      {selectedPost && <BlogPostModal post={selectedPost} />}
    </div>
  );
};

export default Blog;