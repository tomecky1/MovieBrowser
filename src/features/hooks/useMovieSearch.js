import { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../common/constants/config";
import {
  errorStatus,
  loadingStatus,
  successStatus,
} from "../../common/constants/resqestStatuses";

export const useMovieSearch = (query) => {
  const [searchResults, setSearchResults] = useState({
    status: "",
    data: [],
  });
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    if (!query) {
      setSearchResults({
        status: successStatus,
        data: [],
      });
      return;
    }

    const searchMovies = async () => {
      setSearchResults({
        status: loadingStatus,
        data: [],
      });

      try {
        const response = await axios.get(
          `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
          )}&language=en-US&page=1`
        );

        setSearchResults({
          status: successStatus,
          data: response.data.results,
        });
        setTotalPages(Math.min(response.data.total_pages, 500));
      } catch (error) {
        setSearchResults({
          status: errorStatus,
          data: [],
        });
        console.error("Błąd wyszukiwania:", error);
      }
    };

    const debounceTimeout = setTimeout(searchMovies, 500);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return { searchResults, totalPages };
};
