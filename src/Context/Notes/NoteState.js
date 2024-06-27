import React, { useContext, useState } from 'react'
import noteContext from './noteContext'
import alertContext from '../Alert/alertContext';
const NoteState = (props) => {
  const { showAlert } = useContext(alertContext);
  const host = "http://localhost:5000";
  const [notes, setNotes] = useState([]);

  const fetchAllNotes = async () => {
    try {
      const response = await fetch(`${host}/api/notes/fetchallnotes`, {
        method: "GET", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "auth-token": localStorage.getItem('authToken')
        }
      });
      const res = await response.json();
      setNotes(res);
    } catch (error) {
      console.log(error);
    }

  }

  //Add a note
  const addNote = async (note) => {
    try {
      const { title, description, tag } = note;
      const response = await fetch(`${host}/api/notes/addnote`, {
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "auth-token": localStorage.getItem('authToken')
        },
        body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
      });
      if (response.ok) {
        const noteInResponse = await response.json(); // parses JSON response into native JavaScript objects-> to get the new added note with id
        //concat don't modify original and dont use push to update notes array as state should be modified only be setNotes
        setNotes(notes.concat(noteInResponse));
        showAlert("Note added", "success");
      }
      else {
        showAlert(response.text(), "warning");
      }

    } catch (error) {
      console.log(error);
      showAlert("Error", "danger");
    }

  }
  //Delete a note
  const deleteNote = async (id) => {
    try {
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "auth-token": localStorage.getItem('authToken')
        }
      });
      if (response.ok) {
        let newNotes = notes.filter((e) => e._id !== id);
        setNotes(newNotes);
        showAlert("Note Deleted successfully", "success");
      }
      else {
        showAlert("Deletion Failed: " + response.text(), "warning");
      }
    }
    catch (error) {
      console.log(error);
      showAlert("Error", "danger");
    }

  }
  //edit a note
  const editNote = async (editedNote) => {
    try {
      const { title, description, tag, _id } = editedNote;
      const response = await fetch(`${host}/api/notes/updatenote/${_id}`, {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
          "auth-token": localStorage.getItem('authToken')
        },
        body: JSON.stringify({ title, description, tag }), // body data type must match "Content-Type" header
      });
      if (response.ok) {
        const updatedNoteInResponse = await response.json(); // parses JSON response into native JavaScript objects
        const newNotes = notes.filter((e) => e._id !== updatedNoteInResponse._id);
        setNotes(newNotes.concat(updatedNoteInResponse));
        showAlert("Note Updated Successfully","success");
      }
      else {
        showAlert("Updation Failed","warning");
      }
    } 
    catch (error) {
      console.log(error);
      showAlert("Error", "danger");
    }
  }

  return (
    <>
      <noteContext.Provider value={{ notes, addNote, deleteNote, fetchAllNotes, editNote }}>
        {props.children}
      </noteContext.Provider>
    </>
  )
}

export default NoteState;
