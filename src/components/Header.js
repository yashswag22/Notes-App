// src/components/Header.js
import React from 'react';

const Header = ({ onAddNote, searchQuery, setSearchQuery }) => (
  <header style={headerStyle}>
    <h1> NoteNest </h1>
    <div style={headerControlsStyle}>
      <input
        type="text"
        placeholder="Search notes..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={searchInputStyle}
      />
      <button onClick={onAddNote} style={addButtonStyle}>Add New Note</button>
    </div>
  </header>
);

// Inline styles ------------
const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px',
  backgroundColor: '#282c34',
  color: 'white',
};

const headerControlsStyle = {
  display: 'flex',
  alignItems: 'center',
};

const searchInputStyle = {
  padding: '8px',
  marginRight: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const addButtonStyle = {
  padding: '8px 16px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#61dafb',
  cursor: 'pointer',
};

export default Header;
