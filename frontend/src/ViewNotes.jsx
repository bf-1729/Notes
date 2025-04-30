import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./index.css";
import Navbar from './Navbar';
const backendUrl = import.meta.env.VITE_BACKEND_URL

const ViewNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNotes = () => {
    setLoading(true);
    axios.get(backendUrl+"/api/getnotes")
      .then(res => {
        const sortedNotes = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setNotes(sortedNotes);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching notes:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const deleteNote = async (id) => {
    try {
      await axios.post(backendUrl+"/api/deletenote", { id });
      fetchNotes();
    } catch (err) {
      console.error("Error deleting note:", err);
    }
  };

  return (
    <div>
      <Navbar />

      <div className='notes_container'>
        <h2>All Notes</h2>
        <div className='single_notes'>
          {loading ? (
            <div className='spinner'></div>
          ) : notes.length === 0 ? (
            <p className='loading'>No notes found.</p>
          ) : (
            notes.map((note, index) => (
              <div className='note' key={index}>
                <div className='header'>
                  <h3>{note.title}</h3>
                  <div className='date'>
                    <p>{new Date(note.date).toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</p>
                    <img
                      onClick={() => deleteNote(note._id)}
                      width="20"
                      height="20"
                      src="https://img.icons8.com/ios-glyphs/20/FA5252/trash--v1.png"
                      alt="trash--v1"
                    />
                  </div>
                </div>
                <p>{note.content}</p>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default ViewNotes;
