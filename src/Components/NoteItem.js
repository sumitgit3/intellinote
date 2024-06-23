import React, { useContext } from 'react'
import noteContext from '../Context/Notes/noteContext';
const NoteItem = (props) => {
    const {deleteNote} = useContext(noteContext);
    const { note } = props;
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed voluptatem voluptatum praesentium iusto expedita iure ullam quisquam quibusdam, beatae ipsum, harum mollitia quam quod impedit quae a modi. Animi, fugiat maiores!</p>
                    </div>
                    <div className="container my-3">
                    <i className="fa-solid fa-pen-to-square fa-xl mx-2" title='edit'></i>
                    <i className="fa-solid fa-trash fa-xl mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoteItem
