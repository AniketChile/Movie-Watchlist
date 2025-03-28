import React, { useState, useEffect } from "react";
import { fetchMovies } from "../utils/api";
import { Button, Input } from "../index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToWatchlist } from "../redux/watchlistSlice";

function Home() {
  /*
      const navigate = useNavigate();
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadDefaultMovies = async () => {
      const defaultMovies = await fetchMovies("sex"); 
      setMovies(defaultMovies);
    };
    loadDefaultMovies();
  }, []);

  const handleSearch = async () => {
    if (!searchMovie.trim()) return;
    const results = await fetchMovies(searchMovie);
    setMovies(results);
    setSearchMovie("");
  };
  */

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchMovie, setSearchMovie] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const loadDefaultMovies = async () => {
      const defaultMovies = await fetchMovies("sex");
      setMovies(defaultMovies);
    };
    loadDefaultMovies();
  }, []);

  const handleSearch = async () => {
    if (!searchMovie.trim()) return;
    const results = await fetchMovies(searchMovie);
    setMovies(results);
    setSearchMovie("");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      {/* 🎬 Search Bar */}
      <div className="w-full max-w-lg flex gap-3 mb-8">
        <Input
          value={searchMovie}
          onChange={(e) => setSearchMovie(e.target.value)}
          type="text"
          className="w-full p-3 rounded-lg border border-gray-600 bg-gray-800 text-white focus:ring-2 focus:ring-blue-500"
          placeholder="Search for a movie..."
        />
        <Button
          onClick={handleSearch}
          className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white font-semibold transition-transform transform hover:scale-105"
        >
          Search
        </Button>

        <Button
          onClick={() => navigate("/watchlist")}
          className="bg-green-600 hover:bg-green-700 px-6 py-1 rounded-lg"
        >
          Go to your Watchlist
        </Button>
      </div>


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
        {movies.length === 0 ? (
          <p className="text-xl font-semibold">⚠️ No Movies Found</p>
        ) : (
          movies.map((movie) => (
            <div
              key={movie.imdbID}
              className="bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              <img
                src={movie.Poster}
                alt={movie.Title}
                className="w-full h-80 object-cover rounded-lg mb-3"
              />
              <h3 className="text-sm font-bold">
                {movie.Title} ({movie.Year})
              </h3>
              <Button className="bg-green-600 hover:bg-green-700 mt-3 w-full py-2 rounded-lg" onClick={()=>dispatch(addToWatchlist(movie))}>
                Add to Watchlist
              </Button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Home;
