import React from 'react'

const NoteItem = (props) => {
    const { note } = props;
    return (
        <>
            <div className="col-md-4 my-3">
                <div className="card" >
                    <div className="card-body">
                        <h5 className="card-title">{note.title}</h5>
                        <p className="card-text">{note.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam sed voluptatem voluptatum praesentium iusto expedita iure ullam quisquam quibusdam, beatae ipsum, harum mollitia quam quod impedit quae a modi. Animi, fugiat maiores!</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default NoteItem
