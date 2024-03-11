import React,{useState} from 'react'

function Form(props) {
  const [note, setNote] = useState({title: "", content: ""})
  
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setNote({...note, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(note);
    props.onCreate(note);
  }
  
  return (
    <form method='post' onSubmit={handleSubmit}>
      <input type='text' name='title' placeholder='enter the title....' onChange={handleChange} value={note.title}></input>
      <textarea name='content' placeholder='type the content here' rows="4" onChange={handleChange} value={note.content}></textarea>
      <button type='submit'>SUBMIT</button>
    </form>
  )
}

export default Form