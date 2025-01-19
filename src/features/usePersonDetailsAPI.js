const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";
const BASE_URL = "https://api.themoviedb.org/3/person";

export const getPersonData = async (personId) => {
  if (!personId) return null;
  try {
    const response = await fetch(
      `${BASE_URL}/${personId}?api_key=${API_KEY}&language=en-US`
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return null;
  }
};