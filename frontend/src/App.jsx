import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Notes from './Notes';
import ViewNotes from './ViewNotes';

const App = () => {
  return (
    <div className='app'>
      <Routes>
        <Route path="/" element={<Notes />} />
        <Route path="/view" element={<ViewNotes />} />
      </Routes>
    </div>
  );
};

export default App;
