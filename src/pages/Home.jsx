import React, { useState, useEffect } from 'react';
import { fetchMovies } from '../utils/api';

function Home() {
    const [searchMovie, setSearchMovie] = useState("");
    const [movies, setMovies] = useState([]);

   
    useEffect(() => {
        const loadDefaultMovies = async () => {
            const defaultMovies = await fetchMovies("marvel"); 
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
        <>
            <div>
                <input
                    type="text"
                    value={searchMovie}
                    onChange={(e) => setSearchMovie(e.target.value)}
                    placeholder="Search for a movie..."
                />
                <button onClick={handleSearch}>Search</button>
            </div>

            <div>
                {movies.length === 0 ? (
                    <p>⚠️ No Movies Found</p>
                ) : (
                    movies.map((movie) => (
                        <div key={movie.imdbID}>
                            <img src={movie.Poster} alt={movie.Title} />
                            <h3>{movie.Title} ({movie.Year})</h3>
                            <button>Add to Watchlist</button>
                        </div>
                    ))
                )}
            </div>
        </>
    );
}

export default Home;
