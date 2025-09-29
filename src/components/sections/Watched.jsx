import { useState, useEffect, useMemo, useCallback } from "react";
import { getAllMovies } from "../data/WatchedList";

export default function MoviesTable() {
    const [displayedMovies, setDisplayedMovies] = useState([]);
    const [allMovies, setAllMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("id");
    const [sortOrder, setSortOrder] = useState("desc");
    const [selectedGenre, setSelectedGenre] = useState("all");

    const moviesPerPage = 10;

    const filteredAndSortedMovies = useMemo(() => {
        let movies = [...allMovies];

        if (searchTerm) {
            movies = movies.filter(
                (movie) =>
                    movie.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    movie.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    movie.notes.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedGenre !== "all") {
            movies = movies.filter(
                (movie) => movie.genre.toLowerCase() === selectedGenre.toLowerCase()
            );
        }

        movies.sort((a, b) => {
            let aVal = a[sortBy];
            let bVal = b[sortBy];

            if (sortBy === "rating") {
                aVal = parseFloat(aVal) || 0;
                bVal = parseFloat(bVal) || 0;
            } else if (sortBy === "year") {
                aVal = parseInt(aVal) || 0;
                bVal = parseInt(bVal) || 0;
            } else if (typeof aVal === "string") {
                aVal = aVal.toLowerCase();
                bVal = bVal.toLowerCase();
            }

            if (sortOrder === "asc") {
                return aVal > bVal ? 1 : -1;
            } else {
                return aVal < bVal ? 1 : -1;
            }
        });

        return movies;
    }, [allMovies, searchTerm, selectedGenre, sortBy, sortOrder]);

    const genres = useMemo(() => {
        const uniqueGenres = [...new Set(allMovies.map((movie) => movie.genre))];
        return uniqueGenres.sort();
    }, [allMovies]);

    useEffect(() => {
        const movies = getAllMovies();
        setAllMovies(movies);
        setLoading(false);
    }, []);

    useEffect(() => {
        setCurrentPage(1);
        setDisplayedMovies(filteredAndSortedMovies.slice(0, moviesPerPage));
    }, [filteredAndSortedMovies, moviesPerPage]);

    const loadMoreMovies = useCallback(() => {
        setLoading(true);

        setTimeout(() => {
            const startIndex = currentPage * moviesPerPage;
            const endIndex = startIndex + moviesPerPage;
            const newMovies = filteredAndSortedMovies.slice(startIndex, endIndex);

            setDisplayedMovies((prev) => [...prev, ...newMovies]);
            setCurrentPage((prev) => prev + 1);
            setLoading(false);
        }, 300);
    }, [currentPage, moviesPerPage, filteredAndSortedMovies]);

    const handleSort = useCallback(
        (field) => {
            if (sortBy === field) {
                setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
            } else {
                setSortBy(field);
                setSortOrder("desc");
            }
        },
        [sortBy]
    );

    const clearFilters = useCallback(() => {
        setSearchTerm("");
        setSelectedGenre("all");
        setSortBy("id");
        setSortOrder("desc");
    }, []);

    const hasMoreMovies = displayedMovies.length < filteredAndSortedMovies.length;

    const SortButton = ({ field, children }) => (
        <button
            onClick={() => handleSort(field)}
            className="flex items-center space-x-1 hover:text-blue-200 transition-colors duration-200 group"
        >
            <span>{children}</span>
            {sortBy === field && (
                <span className="text-blue-300">{sortOrder === "asc" ? "↑" : "↓"}</span>
            )}
        </button>
    );

    if (loading && allMovies.length === 0) {
        return (
            <div className="flex justify-center items-center p-8 min-h-96">
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl p-8">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-400 mx-auto mb-4"></div>
                    <p className="text-white/80 text-center">Loading database...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="flex justify-center items-start p-8">
            <div className="w-full max-w-6xl">
                <div className="backdrop-blur-xl bg-black/20 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                    {/* Header */}
                    <div className="backdrop-blur-md bg-gradient-to-r from-black/30 to-blue-900/30 border-b border-white/10 px-8 py-6">
                        <h1 className="text-3xl font-bold text-white mb-2 drop-shadow-lg">
                            My Database
                        </h1>
                        <div className="flex items-center justify-between flex-wrap gap-4">
                            <div className="flex items-center space-x-6 text-sm">
                                <span className="text-blue-200/90 font-medium">
                                    {displayedMovies.length} of {filteredAndSortedMovies.length}{" "}
                                    games, movies and series
                                    {searchTerm || selectedGenre !== "all"
                                        ? ` (filtered from ${allMovies.length} total)`
                                        : ""}
                                    .
                                </span>
                                {hasMoreMovies && (
                                    <span className="text-white/60">• Scroll to load more.</span>
                                )}
                            </div>
                        </div>

                        {/* Filters */}
                        <div className="mt-4 flex flex-wrap gap-4 items-center">
                            <div className="flex-1 min-w-64">
                                <input
                                    type="text"
                                    placeholder="Search by title, genre, or notes..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition-all duration-300"
                                />
                            </div>
                            <div className="flex items-center space-x-3">
                                <select
                                    value={selectedGenre}
                                    onChange={(e) => setSelectedGenre(e.target.value)}
                                    className="px-4 py-2 backdrop-blur-md bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300"
                                >
                                    <option value="all" className="bg-gray-800">
                                        All Genres
                                    </option>
                                    {genres.map((genre) => (
                                        <option key={genre} value={genre} className="bg-gray-800">
                                            {genre}
                                        </option>
                                    ))}
                                </select>
                                {(searchTerm || selectedGenre !== "all") && (
                                    <button
                                        onClick={clearFilters}
                                        className="px-3 py-2 backdrop-blur-md bg-red-500/20 hover:bg-red-500/30 border border-red-400/30 text-red-200 rounded-lg transition-all duration-300 text-sm"
                                    >
                                        Clear
                                    </button>
                                )}
                            </div>
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
                                        <SortButton field="title">Title</SortButton>
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="year">Year</SortButton>
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="genre">Genre</SortButton>
                                    </th>
                                    <th className="px-4 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        <SortButton field="rating">Rating</SortButton>
                                    </th>
                                    <th className="px-6 py-4 text-left text-xs font-bold text-white/90 uppercase tracking-wider">
                                        Notes
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {displayedMovies.map((movie, index) => (
                                    <tr
                                        key={`${movie.id}-${index}`}
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
                                                        {movie.rating} ★
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
                                                        filteredAndSortedMovies.length -
                                                        displayedMovies.length
                                                    )}
                                                </span>
                                            </>
                                        )}
                                    </button>
                                </div>
                            </div>
                        )}

                        {!hasMoreMovies && displayedMovies.length > 0 && (
                            <div className="backdrop-blur-md bg-black/20 border-t border-white/10 px-8 py-4 text-center">
                                <span className="text-sm text-white/60 font-medium drop-shadow-sm">
                                    {searchTerm || selectedGenre !== "all"
                                        ? `Showing all ${displayedMovies.length} filtered results.`
                                        : `All ${displayedMovies.length} movies loaded.`}
                                </span>
                            </div>
                        )}
                    </div>

                    {displayedMovies.length === 0 && !loading && (
                        <div className="text-center py-16 backdrop-blur-sm">
                            <p className="text-lg text-white/60 font-medium drop-shadow-sm mb-4">
                                {searchTerm || selectedGenre !== "all"
                                    ? "No movies match your filters."
                                    : "No movies in database."}
                            </p>
                            {(searchTerm || selectedGenre !== "all") && (
                                <button
                                    onClick={clearFilters}
                                    className="px-6 py-2 backdrop-blur-md bg-blue-600/30 hover:bg-blue-500/40 border border-blue-400/30 text-white rounded-lg transition-all duration-300"
                                >
                                    Clear filters
                                </button>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}