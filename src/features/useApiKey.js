const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf"; // Twój klucz API
const BASE_URL = "https://api.themoviedb.org/3";
export const getPersonMovieCredits = async (personId) => {
  try {
    const response = await fetch(
      `${BASE_URL}/person/${personId}/movie_credits?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error(`Error fetching movie credits: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return null;
  }
};
