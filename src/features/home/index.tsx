import { useState, useEffect } from "react";
import MovieComponent from "../../components/movie";
import API from "../../services/api";
import type { Movie } from "../../services/movie/type";
import { GENRE_MAP } from "../../services/movie/genre";
import { useNavigate } from "react-router-dom";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const BANNER_DURATION = 10000; // 40 seconds

const HomeScreen = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [bannerIndex, setBannerIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    API.get("/movie/popular?language=en-US&page=1").then((res) =>
      setMovies(res.data.results || [])
    );
  }, []);

  useEffect(() => {
    if (!movies.length) return;
    const timer = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % movies.length);
    }, BANNER_DURATION);
    return () => clearInterval(timer);
  }, [movies]);

  const bannerMovie = movies[bannerIndex];

  return (
    <div className="w-full px-8 py-6 bg-[#10182f] min-h-screen">
      {/* Banner */}
      {bannerMovie && (
        <div className="relative w-full h-[500px] mb-8 rounded-2xl overflow-hidden shadow-lg bg-[#181f3a] flex flex-col justify-end">
          <img
            src={`${IMAGE_BASE_URL}${
              bannerMovie.backdrop_path || bannerMovie.poster_path
            }`}
            alt={bannerMovie.title}
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 p-8 text-white">
            <h2 className="text-4xl font-bold mb-2">{bannerMovie.title}</h2>
            <p className="text-gray-200 text-sm max-w-xl line-clamp-3 mb-4">
              {bannerMovie.overview}
            </p>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <span className="bg-yellow-500 text-black rounded-full px-3 py-1 font-semibold">
                {bannerMovie.vote_average?.toFixed(1)}
              </span>
              {bannerMovie.genre_ids.map((id) => (
                <span
                  key={id}
                  className="bg-[#183c3a] text-teal-300 rounded-full px-3 py-1 text-sm font-medium"
                >
                  {GENRE_MAP[id]}
                </span>
              ))}
            </div>
            <button
              className="bg-white text-[#10182f] rounded-full px-6 py-2 font-bold flex items-center gap-2 shadow hover:bg-teal-400 hover:text-white transition"
              onClick={() => navigate(`/detail/${bannerMovie.id}`)}
            >
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M6 4l10 6-10 6V4z" />
              </svg>
              Play
            </button>
          </div>
        </div>
      )}

      {/* Posters */}
      <h2 className="text-2xl font-bold mb-4 text-white">Popular Movies</h2>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex flex-nowrap gap-6">
          {movies.map((movie) => (
            <div
              key={movie.id}
              className="w-40 flex-shrink-0 cursor-pointer"
              onClick={() => navigate(`/detail/${movie.id}`)}
            >
              <MovieComponent movie={movie} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
