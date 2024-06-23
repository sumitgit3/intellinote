import React, { useContext, useEffect } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
  const {notes,fetchAllNotes} = useContext(noteContext);
  //fetch notes on first rendering
  useEffect(()=>{
    fetchAllNotes();
    // eslint-disable-next-line
  },[]);
  return (
    <>
      <AddNote />
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((currentNote, index) => {
          return <NoteItem key={index} note={currentNote} />
        })}
      </div>
    </>

  )
}

export default Notes
