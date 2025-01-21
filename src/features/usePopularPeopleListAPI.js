const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";
const BASE_URL = "https://api.themoviedb.org/3/person/popular";

export const getPopularPersons = async (page = 1) => {
  try {
    const response1 = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    const response2 = await fetch(
      `${BASE_URL}?api_key=${API_KEY}&language=en-US&page=${page + 1}`
    );
    if (!response1.ok || !response2.ok) {
      throw new Error(`HTTP error! status: ${response1.status}`);
    }
    const data1 = await response1.json();
    const data2 = await response2.json();
    const combinedResults = [...data1.results, ...data2.results.slice(0, 4)];
    return { peoples: combinedResults };
  } catch (error) {
    console.error("Błąd pobierania danych:", error);
    return null;
  }
};