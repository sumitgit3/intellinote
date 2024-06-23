import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
import NoteState from "./Context/Notes/NoteState";
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
            </Routes>
          </div>
        </NoteState>
      </BrowserRouter>
    </>
  );
}

export default App;
