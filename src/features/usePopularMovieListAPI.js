const API_KEY = "1454980afff1c0ba9dce7e6202a9ecbf";

export const getPopularPersons = async (page) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/person/popular?api_key=${API_KEY}&page=${page}`
    );
    if (!response.ok) {
      throw new Error(`Error fetching popular persons: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching popular persons:", error);
    return null;
  }
};