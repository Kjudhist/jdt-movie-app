import React from "react";
import { Card } from "../card";
import type { Movie as TMDBMovie } from "../../services/movie";

interface Props {
  movie: TMDBMovie;
}

const MovieComponent: React.FC<Props> = ({ movie }) => {
  const { title, poster_path, vote_average } = movie;

  const poster = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <Card width="w-40" height="h-64">
      <div className="relative w-full h-full">
        <img src={poster} alt={title} className="w-full h-full object-cover" />

        {vote_average !== undefined && (
          <div className="absolute top-2 right-2 bg-black/70 text-yellow-400 text-xs px-2 py-1 rounded-md">
            ⭐ {vote_average.toFixed(1)}
          </div>
        )}

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
          <h3 className="text-xs font-semibold text-white truncate">{title}</h3>
        </div>
      </div>
    </Card>
  );
};



export default MovieComponent;
