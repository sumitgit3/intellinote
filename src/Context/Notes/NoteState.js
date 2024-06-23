import React, { useState } from 'react'
import noteContext from './noteContext'
const NoteState = (props) => {
  let intialNotes = [
    {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }, 
    {
      "_id": "66756c0007cdbc165dd2c0b2",
      "user": "66745162c7d1cc400687f8a3",
      "title": "My Second Note become first",
      "description": "More Testing....",
      "tag": "MYSecondNOTETOFIrst",
      "date": "2024-06-21T12:03:12.609Z",
      "__v": 0
    }
  ]
  const [notes, setNotes] = useState(intialNotes);
  return (
    <>
      <noteContext.Provider value={[notes, setNotes]}>
        {props.children}
      </noteContext.Provider>
    </>
  )
}

export default NoteState;
