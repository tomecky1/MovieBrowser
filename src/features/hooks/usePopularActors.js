import axios from "axios";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { BASE_URL, API_KEY } from '../../common/constants/config';
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
                const response1 = await axios.get(`${url}&page=${currentPage}`);
                const response2 = await axios.get(`${url}&page=${currentPage + 1}`);

                if (response1.data && response2.data) {
                    const combinedResults = [
                        ...response1.data.results,
                        ...response2.data.results.slice(0, 4),
                    ];
                    setPopularActor({
                        status: successStatus,
                        data: combinedResults,
                    });
                    setTotalPagesActor(Math.min(response1.data.total_pages, 500));
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
}
