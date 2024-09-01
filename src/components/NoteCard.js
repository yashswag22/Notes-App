// src/components/NoteCard.js
import React from 'react';

const NoteCard = ({ note, onDelete, onEdit }) => (
  <div className="note-card" style={cardStyle}>
    <h2 style={titleStyle}>{note.title}</h2>
    <p style={contentStyle}>{note.content.length > 100 ? `${note.content.slice(0, 100)}...` : note.content}</p>
    <div style={buttonContainerStyle}>
      <button onClick={() => onEdit(note)} style={editButtonStyle}>Edit</button>
      <button onClick={() => onDelete(note.id)} style={deleteButtonStyle}>Delete</button>
    </div>
  </div>
);

// Inline styles ---------------
const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: '8px',
  padding: '16px',
  margin: '10px',
  boxShadow: '2px 2px 12px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  width: '85vw',
};

const titleStyle = {
  margin: '0 0 10px 0',
  fontSize: '1.5em',
};

const contentStyle = {
  color: '#555',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
  marginTop: '10px',
};

const editButtonStyle = {
  padding: '6px 12px',
  marginRight: '8px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
};

const deleteButtonStyle = {
  padding: '6px 12px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#f44336',
  color: 'white',
  cursor: 'pointer',
};

export default NoteCard;
