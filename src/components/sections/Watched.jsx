import { useState, useEffect } from "react";
import { getAllMovies } from "../data/WatchedList";

export default function MoviesTable() {
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const moviesPerPage = 10;

    useEffect(() => {
        const movies = getAllMovies();
        setAllMovies(movies);

        const sortedMovies = movies.sort((a, b) => b.id - a.id);
        setDisplayedMovies(sortedMovies.slice(0, moviesPerPage));
    }, []);

    const loadMoreMovies = () => {
        setLoading(true);

        setTimeout(() => {
            const startIndex = currentPage * moviesPerPage;
            const endIndex = startIndex + moviesPerPage;
            const sortedMovies = allMovies.sort((a, b) => b.id - a.id);
            const newMovies = sortedMovies.slice(startIndex, endIndex);

            setDisplayedMovies((prev) => [...prev, ...newMovies]);
            setCurrentPage((prev) => prev + 1);
            setLoading(false);
        }, 500);
    };

    const hasMoreMovies = displayedMovies.length < allMovies.length;

    return (
        <div className="flex justify-center items-start p-8">
            <div className="w-full max-w-6xl">
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    <div className="backdrop-blur-md bg-gradient-to-r from-black/30 to-blue-900/30 border-b border-white/10 px-8 py-6">
                        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            My Watched Database
                        </h1>
                        <div className="flex items-center space-x-6 text-sm">
                            <span className="text-blue-200/90 font-medium">
                                {displayedMovies.length} of {allMovies.length} movies and series
                            </span>
                            {hasMoreMovies && (
                                <span className="text-white/60">• Scroll to load more</span>
                            )}
                        </div>
                    </div>

                    <div
                        className="max-h-96 overflow-y-auto backdrop-blur-sm bg-black/10"
                        style={{
                            scrollbarWidth: "thin",
                            scrollbarColor: "rgba(0, 0, 0, 0.4) rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <style jsx>{`
              div::-webkit-scrollbar {
                width: 8px;
              }
              div::-webkit-scrollbar-track {
                background: rgba(0, 0, 0, 0.2);
                border-radius: 10px;
              }
              div::-webkit-scrollbar-thumb {
                background: rgba(0, 0, 0, 0.4);
                border-radius: 10px;
                border: 1px solid rgba(255, 255, 255, 0.1);
              }
              div::-webkit-scrollbar-thumb:hover {
                background: rgba(0, 0, 0, 0.6);
              }
            `}</style>
                        <table className="w-full">
                            <thead className="backdrop-blur-md bg-black/40 sticky top-0 z-10 border-b border-white/10">
                                <tr>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Cover
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Title
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Year
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Genre
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Rating
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Notes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedMovies.map((movie, index) => (
                                    <tr
                                        key={movie.id}
                                        className="backdrop-blur-sm border-b border-white/5 hover:bg-white/5 transition-all duration-300 group"
                                    >
                                        <td className="px-4 py-4">
                                            <div className="w-10 h-15 backdrop-blur-sm bg-black/30 border border-white/10 rounded-lg overflow-hidden flex-shrink-0 shadow-xl group-hover:shadow-2xl transition-all duration-300">
                                                <img
                                                    src={movie.coverUrl}
                                                    alt={`${movie.title} cover`}
                                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                                    loading="lazy"
                                                    onError={(e) => {
                                                        e.target.src = `https://via.placeholder.com/40x60/374151/white?text=${movie.title.charAt(0)}`;
                                                    }}
                                                />
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-sm font-semibold text-white/95 drop-shadow-sm group-hover:text-white transition-colors duration-300">
                                                {movie.title}
                                            </div>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm bg-blue-500/20 border border-blue-400/20 text-blue-200 shadow-lg">
                                                {movie.year}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <span className="inline-flex px-3 py-1 text-xs font-bold rounded-full backdrop-blur-sm bg-white/10 border border-white/20 text-white/90 shadow-lg">
                                                {movie.genre}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4">
                                            <div className="flex items-center space-x-1">
                                                <div className="flex items-center backdrop-blur-sm bg-yellow-500/20 border border-yellow-400/30 rounded-lg px-2 py-1 shadow-lg">
                                                    <span className="text-sm font-bold text-yellow-300 drop-shadow-sm">
                                                        {movie.rating}
                                                    </span>
                                                    <span className="text-xs text-yellow-200/70 ml-1">
                                                        /10
                                                    </span>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <div className="text-xs text-white/80 max-w-xs line-clamp-2 leading-relaxed drop-shadow-sm group-hover:text-white/90 transition-colors duration-300">
                                                {movie.notes}
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        {/* Load More Section with Frosted Glass */}
                        {hasMoreMovies && (
                            <div className="backdrop-blur-md bg-black/20 border-t border-white/10">
                                <div className="px-8 py-6 text-center">
                                    <button
                                        onClick={loadMoreMovies}
                                        disabled={loading}
                                        className="cursor-pointer inline-flex items-center px-8 py-3 backdrop-blur-md bg-blue-600/30 hover:bg-blue-500/40 disabled:bg-blue-600/20 disabled:cursor-not-allowed border border-blue-400/30 hover:border-blue-300/50 text-white rounded-xl transition-all duration-300 font-semibold shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95"
                                    >
                                        {loading ? (
                                            <>
                                                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                                                <span className="drop-shadow-sm">Loading...</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="drop-shadow-sm">Load more</span>
                                                <span className="ml-3 text-blue-200/80 text-sm drop-shadow-sm">
                                                    +
                                                    {Math.min(
                                                        moviesPerPage,
                                                        allMovies.length - displayedMovies.length
                                                    )}
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* All Loaded Message */}
                        {!hasMoreMovies && displayedMovies.length > 0 && (
                            <div className="backdrop-blur-md bg-black/20 border-t border-white/10 px-8 py-4 text-center">
                                <span className="text-sm text-white/60 font-medium drop-shadow-sm">
                                    ✨ All {displayedMovies.length} movies loaded
                                </span>
                            </div>
                        )}
                    </div>

                    {/* Empty State */}
                    {displayedMovies.length === 0 && !loading && (
                        <div className="text-center py-16 backdrop-blur-sm">
                            <p className="text-lg text-white/60 font-medium drop-shadow-sm">
                                No movies in database
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}