import axios from "axios";
import { useState, useEffect } from "react";
import { errorStatus, loadingStatus, successStatus } from "../../constants/resqestStatuses/index";
import { API_KEY, BASE_URL } from "../../constants/config/index";

const url = `${BASE_URL}/genre/movie/list?api_key=${API_KEY}`;

export const useGenresList = () => {
    const [genres, setGenres] = useState({
        data: [],
        status: loadingStatus
    });

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const response = await axios.get(url);
                setGenres({
                    data: response.data.genres,
                    status: successStatus
                });
            } catch (error) {
                setGenres({
                    status: errorStatus
                });
                console.error(error.message);
            }
        };
        setTimeout(fetchGenres, 0);
    }, [url]);

    return { genres };
};