import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import API from "../../services/api";
import type { Movie } from "../../services/movie/type";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";

type DetailMovie = Movie & {
  genres: { id: number; name: string }[];
  backdrop_path: string;
};

const DetailScreen = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [movie, setMovie] = useState<DetailMovie | null>(null);

  useEffect(() => {
    API.get(`/movie/${id}?language=en-US`).then((res) => setMovie(res.data));
  }, [id]);

  if (!movie) return null;

  return (
    <div className="bg-[#10182f] min-h-screen relative">
      {/* Banner background */}
      <div className="absolute inset-0 w-full h-[500px]">
        <img
          src={`${IMAGE_BASE_URL}${movie.backdrop_path}`}
          alt={movie.title}
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      <div className="relative z-10 max-w-5xl mx-auto pt-16 pb-10 px-8 flex flex-col md:flex-row gap-10">
        {/* Poster, rating, genres */}
        <div className="flex flex-col items-center md:items-start w-full md:w-1/3">
          <img
            src={`${IMAGE_BASE_URL}${movie.poster_path}`}
            alt={movie.title}
            className="rounded-xl shadow-lg w-64 h-[400px] object-cover mb-6"
          />
          <span className="bg-yellow-500 text-black rounded-full px-4 py-1 font-semibold mb-4">
            {movie.vote_average?.toFixed(1)}
          </span>
          <div className="flex flex-wrap gap-2 mb-4">
            {movie.genres.map((genre) => (
              <span
                key={genre.id}
                className="bg-[#183c3a] text-teal-300 rounded-full px-3 py-1 text-sm font-medium"
              >
                {genre.name}
              </span>
            ))}
          </div>
        </div>
        {/* Title & description */}
        <div className="flex-1 flex flex-col justify-center text-white">
          <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
          <p className="text-gray-200 text-lg mb-8">{movie.overview}</p>
          <div className="flex gap-4">
            <button className="bg-white text-[#10182f] rounded-full px-6 py-2 font-bold flex items-center gap-2 shadow hover:bg-teal-400 hover:text-white transition w-fit">
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
            <button
              onClick={() => navigate("/")}
              className="bg-teal-400 text-white rounded-full px-6 py-2 font-bold shadow hover:bg-white hover:text-[#10182f] transition w-fit"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailScreen;
