const API_URL = "https://moviewatchlistpro5.netlify.app/.netlify/functions/server/movies";

export const fetchMovies = async (searchQuery = "Avengers") => { 
    try {
        const response = await fetch(`${API_URL}?s=${searchQuery}`);
        if (!response.ok) throw new Error("Failed to fetch movies");
        const data = await response.json();
        return data.Search || [];
    } catch (error) {
        console.error("API error:", error);
        return [];
    }
};
