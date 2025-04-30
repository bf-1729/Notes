import React, { useState } from 'react'
import axios from "axios"
import "./index.css"
import Navbar from './Navbar'

const Notes = () => {
  const [title,setTitle] = useState("")
  const [content,setContent] = useState("")

  const submit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:7000/api/createNote', { title, content });
      console.log('Note created:', res.data);
      setTitle('');
      setContent('');
      alert('Note created successfully!');
    } catch (error) {
      console.error('Error creating note:', error);
      alert('Failed to create note.');
    }
  };
  
  return (
    <div className='main'>
      <Navbar/>
      
        <div>
          <form onSubmit={submit} className='post_container'>
        <h2>Create Note</h2>
            <input className='title' onChange={(e)=>setTitle(e.target.value)} value={title} type='text' placeholder='title' required />
            <textarea className='content'onChange={(e)=>setContent(e.target.value)} value={content} placeholder='content'rows={1} required />
            <button type='submit'>Create Note</button>
            </form>
        </div>
    </div>
  )
}

export default Notes