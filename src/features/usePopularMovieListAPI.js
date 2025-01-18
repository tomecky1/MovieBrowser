const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf"; // Twój klucz API
const BASE_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";
  export const getPopularPersons = async (page) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`
      );
      if (!response.ok) {
        throw new Error(`Error fetching popular persons: ${response.status}`);
      }
      const data = await response.json();
      console.log("API Response:", data); // Debugowanie odpowiedzi
      return data; // Upewnij się, że `data.total_pages` istnieje
    } catch (error) {
      console.error("Error fetching popular persons:", error);
      return null; // Zwróć null w przypadku błędu
    }
  };