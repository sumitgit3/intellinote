import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "./Components/Home";
import About from "./Components/About";
import NavBar from "./Components/Navbar";
import NoteState from "./Context/Notes/NoteState";
import Login from "./Components/Login";
import SignUp from "./Components/SignUp";
import { AlertProvider } from "./Context/Alert/alertContext";
import Alert from "./Components/Alert";
function App() {
  return (
    <>
      <BrowserRouter>
        <AlertProvider>
          <NoteState>
            <NavBar />
            <Alert />
            <div className="container">
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/login' element={<Login />} />
                <Route path='/signup' element={<SignUp />} />
              </Routes>
            </div>
          </NoteState>
        </AlertProvider>

      </BrowserRouter>
    </>
  );
}

export default App;
