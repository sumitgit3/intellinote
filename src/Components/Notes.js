import React,{useContext} from 'react'
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
const Notes = () => {
  const [notes,setNotes] = useContext(noteContext);
  return (
    <div className="row my-3">
        <h1>Your Notes</h1>
          {notes.map((currentNote,index)=>{
            return <NoteItem key ={index} note={currentNote}/>
          })}
      </div>
  )
}

export default Notes
