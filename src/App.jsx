//import { useState } from 'react'
import { Routes, Route } from 'react-router'
//
import Profile from './pages/Profile'
import Details from './pages/Details'
import HomePage from './pages/HomePage'


 export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path="*" element={<h1>404 Not Found ☠️ </h1>} />
      </Routes>
    </>
  )
}


