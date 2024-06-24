import React, { useContext, useEffect, useRef, useState } from 'react'
import noteContext from '../Context/Notes/noteContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';
const Notes = () => {
  const { notes, fetchAllNotes,editNote} = useContext(noteContext);
  //fetch notes on first rendering
  useEffect(() => {
    fetchAllNotes();
    // eslint-disable-next-line
  }, []);



  //function to click on button
  const ref = useRef(null);
  const updateNote = (currentNote) => {
    ref.current.click();
    setEditedNote(currentNote);  //This line set the state of editedNote when edit button is clicked and set all needed state of editedNote including id
  }
  //state to handle update form -> but only gets the title,description,tag -> id comes from when update node get executed from noteItem
  const [editedNote, setEditedNote] = useState({ title: "", description: "", tag: "" }); 
  //onchange function to handle change in form and update it
  const onChange = (e) => {
    //... spread operator so other properties remain intact
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  }
  const handleEdit = (e) => {
    e.preventDefault();
    editNote(editedNote);
  }

  return (
    <>
      <AddNote />
      {/* Button trigger modal  */}
      <button type="button" className="btn btn-primary d-none" ref={ref} onClick={updateNote} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      {/* Modal */}
      <div  className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">Edit Note...</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">Title</label>
                  <input type="text" className="form-control" name='title' id="title" aria-describedby="Title" onChange={onChange} value={editedNote.title} minLength={3} />
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" name='description' id="description" onChange={onChange} value={editedNote.description} minLength={5}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" name='tag' id="tag" onChange={onChange} value={editedNote.tag}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button disabled={editedNote.title.length <=2 || editedNote.description.length <=4} type="button" className="btn btn-primary" data-bs-dismiss='modal' onClick={handleEdit}>Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        <div className="container text-info mx-1">
          {notes.length === 0 && "No Notes created" }
        </div>
        
        {notes.map((currentNote, index) => {
          return <NoteItem key={index} note={currentNote} updateNote={updateNote} />
        })}
      </div>
    </>

  )
}

export default Notes
