import React, { useState } from 'react'
import noteContext from './noteContext'
const NoteState = (props) => {
  const host = "http://localhost:5000";

  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzQ1MTYyYzdkMWNjNDAwNjg3ZjhhMyIsImlhdCI6MTcxOTIxNDYxNiwiZXhwIjoxNzE5MjM2MjE2fQ.oq1dz5Kzo8ZSVulz1I6eST2RHSKbi1SUycvVDX8Ey-Y"
      }
    });
    const res = await response.json();
    setNotes(res);
  }

  //Add a note
  const addNote = async (note) => {
    const { title, description, tag } = note;
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzQ1MTYyYzdkMWNjNDAwNjg3ZjhhMyIsImlhdCI6MTcxOTIxNDYxNiwiZXhwIjoxNzE5MjM2MjE2fQ.oq1dz5Kzo8ZSVulz1I6eST2RHSKbi1SUycvVDX8Ey-Y"
      },
      body: JSON.stringify({title,description,tag}), // body data type must match "Content-Type" header
    });
    const noteInResponse = await response.json(); // parses JSON response into native JavaScript objects-> to get the new added note with id
    //concat don't modify original and dont use push to update notes array as state should be modified only be setNotes
    if(response.ok) setNotes(notes.concat(noteInResponse));
    else console.log(noteInResponse);

  }
  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      headers: {
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzQ1MTYyYzdkMWNjNDAwNjg3ZjhhMyIsImlhdCI6MTcxOTIxNDYxNiwiZXhwIjoxNzE5MjM2MjE2fQ.oq1dz5Kzo8ZSVulz1I6eST2RHSKbi1SUycvVDX8Ey-Y"
      }
    });
    const res = await response.json();
    console.log(res);
    if(response.ok) {
      let newNotes = notes.filter((e) => e._id !== id);
      setNotes(newNotes);
    }
  }
  return (
    <>
      <noteContext.Provider value={{ notes, addNote, deleteNote, fetchAllNotes }}>
        {props.children}
      </noteContext.Provider>
    </>
  )
}

export default NoteState;
