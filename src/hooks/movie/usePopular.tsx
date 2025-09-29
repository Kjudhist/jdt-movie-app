import { useEffect, useState } from "react";

import { getPopular, type Movie } from "../../services/movie";

export const usePopularMovie = () => {
  //State to save movie list data
  const [popularMovie, setPopularMovie] = useState<Movie[]>([]);

  //Effect to load the API
  useEffect(() => {
    //call getPopular API
    const fetchData = async () => {
      try {
        const response = await getPopular();

        if (response) {
          setPopularMovie(response?.results);
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  //Return data
  return { popularMovie };
};
