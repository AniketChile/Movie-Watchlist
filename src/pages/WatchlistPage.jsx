import React, { useEffect, useState } from 'react';
import { getFromLocalStorage, saveToLocalStorage } from '../utils/localStorage';
import {Button} from '../index'
import { useNavigate } from 'react-router-dom';

function WatchlistPage(props) {
    const navigate = useNavigate();
    const [watchlist,setWatchList] = useState([]);

    useEffect(()=>{
        setWatchList(getFromLocalStorage("wachlist"));
    },[])

    const removeFromWatchlist=(movieId)=>{
        const updatedWatchlist = watchlist.filter((movie)=>movie.imdbID !== movieId)
        setWatchList(updatedWatchlist)
        saveToLocalStorage("wachlist",updatedWatchlist)
    }

    return (
       <>
            <h2>My Watchlist</h2>
            <Button onClick={()=>navigate("")} className="bg-blue-600 mt-3 w-full py-2 rounded-lg">Home</Button>
            {watchlist.length ===0 ? (<p>You have no movies in your watchlist</p>) : (
                <div>
                    {watchlist.map((movie)=>(

                        <div key={movie.imdbID} className="bg-gray-800 p-4 rounded-lg shadow-lg">
                        <img src={movie.Poster} alt={movie.Title} className="w-full h-80 object-cover rounded-lg mb-3" />
                        <h3 className="text-lg font-bold">{movie.Title} ({movie.Year})</h3>
                        <Button className="bg-red-600 mt-3 w-full py-2 rounded-lg" onClick={()=>{removeFromWatchlist(movie.imdbID)}}>
                          Remove from Watchlist
                        </Button>
                        </div>
                    ))}
                </div>
            )
            }
            
            
       </>
    );
}

export default WatchlistPage;