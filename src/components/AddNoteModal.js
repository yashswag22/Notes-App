// src/components/AddNoteModal.js
import React, { useState, useEffect } from 'react';

const AddNoteModal = ({ isOpen, onClose, onSave, editNote }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (editNote) {
      setTitle(editNote.title);
      setContent(editNote.content);
    } else {
      setTitle('');
      setContent('');
    }
  }, [editNote, isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '' || content.trim() === '') {
      alert('Both Title and Content are required.');
      return;
    }
    onSave({ title, content });
  };

  if (!isOpen) return null;

  return (
    <div className="modal" style={modalOverlayStyle}>
      <div className="modal-content" style={modalContentStyle}>
        <h2>{editNote ? 'Edit Note' : 'Add Note'}</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <label style={labelStyle}>Title</label>
          <input
            type="text"
            placeholder="Enter note title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={inputStyle}
            required
          />
          <label style={labelStyle}>Content</label>
          <textarea
            placeholder="Enter note content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            style={textareaStyle}
            required
          ></textarea>
          <div style={buttonContainerStyle}>
            <button type="submit" style={saveButtonStyle}>Save</button>
            <button type="button" onClick={onClose} style={cancelButtonStyle}>Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Inline styles ----------
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0,0,0,0.5)',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '8px',
  width: '400px',
  boxShadow: '2px 2px 12px rgba(0,0,0,0.2)',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  marginBottom: '5px',
  fontWeight: 'bold',
};

const inputStyle = {
  padding: '8px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
};

const textareaStyle = {
  padding: '8px',
  marginBottom: '15px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  resize: 'vertical',
  minHeight: '100px',
};

const buttonContainerStyle = {
  display: 'flex',
  justifyContent: 'flex-end',
};

const saveButtonStyle = {
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#4CAF50',
  color: 'white',
  cursor: 'pointer',
  marginRight: '10px',
};

const cancelButtonStyle = {
  padding: '8px 16px',
  border: 'none',
  borderRadius: '4px',
  backgroundColor: '#f44336',
  color: 'white',
  cursor: 'pointer',
};

export default AddNoteModal;
