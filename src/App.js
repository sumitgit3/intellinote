import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
import NoteState from "./Context/Notes/NoteState";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      <BrowserRouter>
        <NoteState>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/login' element={<Login/>} />
              <Route path='/signup' element={<SignUp/>} />
            </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
