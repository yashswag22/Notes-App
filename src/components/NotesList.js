// src/components/NotesList.js
import React from 'react';
import NoteCard from './NoteCard';

const NotesList = ({ notes, onDelete, onEdit }) => {
  if (notes.length === 0) { 
    return <p style={noNotesStyle}>No notes available. Add a new note!</p>;
  }

  return (
    <div className="notes-list" style={listStyle}>
      {notes.map(note => (
        <NoteCard key={note.id} note={note} onDelete={onDelete} onEdit={onEdit} />
      ))}
    </div>
  );
};

// Inline styles-------------------
const listStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
};

const noNotesStyle = {
  textAlign: 'center',
  color: '#888',
};

export default NotesList;
