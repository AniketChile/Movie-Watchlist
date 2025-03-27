import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home'
import Layout from './components/Layout'
import WatchlistPage from './pages/WatchlistPage'

function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}> 
        <Route path='' element={<Home/>}/>
        <Route path='watchlist' element={<WatchlistPage/>}/>
        
      </Route>
    )
  )

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
