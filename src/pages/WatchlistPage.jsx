import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import { removeFromWatchlist } from "../redux/watchlistSlice";
import { removeFromWatchlist } from "../redux/watchlistSlice";
import { Button } from "../index";
import { NavLink } from "react-router-dom";

function WatchlistPage() {
  const dispatch = useDispatch();
  const watchlist = useSelector((state) => state.watchlist.movies);

  // 🔍 Debugging: Check watchlist state
  console.log("Watchlist Redux state:", watchlist);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h2 className="text-2xl font-bold">My Watchlist</h2>
      <NavLink to="/">
        <Button className="bg-green-600 mt-3 py-2 rounded-lg">Home</Button>
      </NavLink>

      {watchlist.length === 0 ? (
        <p className="text-xl font-semibold mt-4">You have no movies in your watchlist.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mt-6">
          {watchlist.map((movie) => (
            <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg">
              <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover rounded-lg mb-3" />
              <h3 className="text-lg font-bold">{movie.Title} ({movie.Year})</h3>
              <Button
                className="bg-red-600 mt-3 w-full py-2 rounded-lg"
                onClick={() => dispatch(removeFromWatchlist(movie.imdbID))}
              >
                Remove from Watchlist
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchlistPage;
