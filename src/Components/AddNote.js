import React, { useContext, useState } from 'react'
import noteContext from '../Context/Notes/noteContext';
const AddNote = () => {
    const {addNote} = useContext(noteContext);
    //state to handle form
    const [note, setNote] = useState({ title: "", description: "", tag: "" });
    //onchange function to handle change in form and update it
    const onChange = (e)=>{
        //... spread operator so other properties remain intact
        setNote({...note,[e.target.name]:e.target.value});
    }
    const handleAdd = (e)=>{
        e.preventDefault();
        addNote(note);
        setNote({ title: "", description: "", tag: "" });
    }

    return (
        <>
            <div className="container">
                <h1>Add a note</h1>
                <form>
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input type="text" className="form-control" name='title' id="title" aria-describedby="Title" onChange={onChange} value={note.title} minLength={3}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" name='description' id="description" onChange={onChange} value={note.description} minLength={5}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="tag" className="form-label">Tag</label>
                        <input type="text" className="form-control" name='tag' id="tag" onChange={onChange} value={note.tag} />
                    </div>
                    <button disabled={note.title.length <=2 || note.description.length <=4} type="submit" className="btn btn-primary" onClick={handleAdd}>Add Note</button>
                </form>
            </div>
        </>
    )
}

export default AddNote
