import React, { useEffect } from 'react'
import DisplayNote from './DisplayNote';
import { useState } from 'react';
import { collection, getDocs, addDoc, deleteDoc, doc ,updateDoc } from 'firebase/firestore';
import {db} from '../firebase-config';

const Note = () => {
  const [notes, setNotes] = useState([]);
  const [addNote, setAddNote] = useState({title: "",content: ""})
  const [id, setId] = useState("")
  const noteRef = collection(db, "note")

  useEffect(() => {
    const getNotes = async () =>{
        const data = await getDocs(noteRef)
        //console.log(data);
        setNotes(data.docs.map((docs)=> ({...docs.data(), id: docs.id})))
    }
    getNotes()
  }, [noteRef])

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setAddNote({...addNote, [name]: value})
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    //console.log(addNote);
    await addDoc(noteRef, addNote)
  }

  const deleteNote = async (id) => {
      //console.log(id);
      const delenote = doc(noteRef, id)
      await deleteDoc(delenote)
  }

  const updateNote = async (note) => {
      //console.log(note);
      setAddNote({title: note.title, content: note.content})
      setId(note.id)
  }

  const updatedNote = async (id) =>{
    console.log(id);
    const updatenote = doc(db, "note", id)
    await updateDoc(updateNote, addNote)
  }
  return (
    <div className="container">
      <form method='post' onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='enter the title....' onChange={handleChange} value={addNote.title}></input>
      <textarea name='content' placeholder='type the content here' rows="4" onChange={handleChange} value={addNote.content}></textarea>
      <div style={{"display": "flex-wrap"}}>
        <button type='submit'>SUBMIT</button> 
        <button style={{"margin": "10px"}} type='button' onClick={()=>updatedNote()}>UPDATE</button>
      </div>
    </form>
      <div className='note-container'>
        {notes && notes.map((note, index)=>(
          <DisplayNote title={note.title} content={note.content} id={note.id} getId={deleteNote} getUpdateNoteId={updateNote}/>
        ))}
      </div>
    </div>
  )
}

export default Note;