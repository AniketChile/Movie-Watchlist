import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = "dcdc35f"; 

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

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
