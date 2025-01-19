import {useEffect, useState} from "react";
import axios from "axios";
import {API_KEY, BASE_URL} from "../../common/constants/config";
import {errorStatus, loadingStatus, successStatus,} from "../../common/constants/resqestStatuses";

export const usePeopleSearch = (query) => {
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

    const searchPeople = async () => {
      setSearchResults({
        status: loadingStatus,
        data: [],
      });

      try {
        const response = await axios.get(
          `${BASE_URL}/search/person?api_key=${API_KEY}&query=${encodeURIComponent(
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
        console.error("Searching error:", error);
      }
    };

    const debounceTimeout = setTimeout(searchPeople, 300);

    return () => clearTimeout(debounceTimeout);
  }, [query]);

  return { peopleResults: searchResults, totalPages };
};
