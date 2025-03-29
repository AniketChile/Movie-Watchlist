const API_URL = "http://localhost:5000/api/movies";

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
