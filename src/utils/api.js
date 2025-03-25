const API_KEY = "dcdc35f";

export const fetchMovies = async (searchQuery = "Avengers") => { 
    try {
        const response = await fetch(`http://www.omdbapi.com/?s=${searchQuery}&apikey=${API_KEY}`);
        const data = await response.json();

        return data.Search || []; // ✅ Always return an array of movies
    } catch (error) {
        console.log("API error:", error);
        return [];
    }
};
