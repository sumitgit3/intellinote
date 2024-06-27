import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';
import alertContext from '../Context/Alert/alertContext';
const NoteItem = (props) => {
    const {deleteNote} = useContext(noteContext);
    const {showAlert} = useContext(alertContext);
    const { note,updateNote } = props;
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} </p>
                    </div>
                    <div className="container my-3">
                    <i className="fa-solid fa-pen-to-square fa-xl mx-2" title='edit' onClick={()=>{updateNote(note)}}></i>
                    <i className="fa-solid fa-trash fa-xl mx-2" title='delete' onClick={()=>{deleteNote(note._id);showAlert("Note Deleted","success")}}></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoteItem
