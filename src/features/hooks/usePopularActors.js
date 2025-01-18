import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from '../../../src/common/constants/config/index';
import { errorStatus, loadingStatus, successStatus } from "../../../src/common/constants/resqestStatuses/index";

export const usePopularActors = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const currentPage = parseInt(searchParams.get("page")) || 1;

    const [totalPagesActor, setTotalPagesActor] = useState(1);
    const [popularActor, setPopularActor] = useState({
        status: "",
        data: [],
    });

    const [error, setError] = useState(null);

    const url = `${BASE_URL}/person/popular?api_key=${API_KEY}`;

    useEffect(() => {
        const fetchPopularActors = async () => {
            setPopularActor({
                status: loadingStatus,
                data: [],
            });
            setError(null);

            try {
                const response = await axios.get(`${url}&page=${currentPage}`);
                if (response.data) {
                    setPopularActor({
                        status: successStatus,
                        data: response.data.results,
                    });
                    setTotalPagesActor(Math.min(response.data.total_pages, 500)); // Limit pages to 500
                } else {
                    setPopularActor({
                        status: errorStatus,
                        data: [],
                    });
                    setError("No data found");
                }
            } catch (error) {
                console.error("Failed to fetch popular actors:", error.message);
                setPopularActor({
                    status: errorStatus,
                    data: [],
                });
                setError("Failed to fetch popular actors");
            }
        };

        fetchPopularActors();
    }, [url, currentPage]);

    return { popularActor, totalPagesActor, error, currentPage };
};
