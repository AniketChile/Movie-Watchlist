import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "dcdc35f"; 
let watchlist = []; 

app.get("/api/movies", async (req, res) => {
    try {
        const { s } = req.query; 
        if (!s) {
            return res.status(400).json({ error: "Search query (s) is required" });
        }

        const response = await axios.get("https://www.omdbapi.com/", {
            params: { s, apikey: API_KEY }
        });

        res.json(response.data);
    } catch (error) {
        console.error("Error fetching movies:", error);
        res.status(500).json({ error: "Failed to fetch movies" });
    }
});

// **Watchlist API**
app.get("/api/watchlist", (req, res) => {
    res.json(watchlist);
});

app.post("/api/watchlist", (req, res) => {
    const movie = req.body;
    if (!movie || !movie.imdbID) {
        return res.status(400).json({ error: "Invalid movie data" });
    }

    const exists = watchlist.some((item) => item.imdbID === movie.imdbID);
    if (!exists) {
        watchlist.push(movie);
        return res.status(201).json({ message: "Added to watchlist", watchlist });
    }

    res.status(409).json({ message: "Movie already in watchlist" });
});

app.delete("/api/watchlist/:id", (req, res) => {
    const { id } = req.params;
    watchlist = watchlist.filter((movie) => movie.imdbID !== id);
    res.json({ message: "Removed from watchlist", watchlist });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
