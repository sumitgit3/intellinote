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
    setEditedNote(currentNote);
  }
  //give a reference to modal
  const modalRef = useRef(null);
  //state to handle update form
  const [editedNote, setEditedNote] = useState({ title: "", description: "", tag: "" });
  //onchange function to handle change in form and update it
  const onChange = (e) => {
    //... spread operator so other properties remain intact
    setEditedNote({ ...editedNote, [e.target.name]: e.target.value });
  }
  const handleEdit = (e) => {
    e.preventDefault();
    editNote(editedNote);
    //hide modal after save
    if (modalRef.current) {
      const modal = window.bootstrap.Modal.getInstance(modalRef.current);
      modal.hide();
    }
  }

  return (
    <>
      <AddNote />
      {/* Button trigger modal  */}
      <button type="button" className="btn btn-primary d-none" ref={ref} onClick={updateNote} data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Launch static backdrop modal
      </button>

      {/* Modal */}
      <div ref={modalRef} className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
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
                  <input type="text" className="form-control" name='title' id="title" aria-describedby="Title" onChange={onChange} value={editedNote.title}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <input type="text" className="form-control" name='description' id="description" onChange={onChange} value={editedNote.description}/>
                </div>
                <div className="mb-3">
                  <label htmlFor="tag" className="form-label">Tag</label>
                  <input type="text" className="form-control" name='tag' id="tag" onChange={onChange} value={editedNote.tag}/>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={handleEdit}>Save</button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h1>Your Notes</h1>
        {notes.map((currentNote, index) => {
          return <NoteItem key={index} note={currentNote} updateNote={updateNote} />
        })}
      </div>
    </>

  )
}

export default Notes
