import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import NotesList from './components/NotesList';
import AddNoteModal from './components/AddNoteModal';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [isModalOpen, setModalOpen] = useState(false);
  const [noteToEdit, setNoteToEdit] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Load from locastorage on initial render ------------
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('data'));
    console.log(savedNotes);
    if (savedNotes) {
      setNotes(savedNotes);
    }
    console.log(notes);
  }, []);


  const handleAddNote = () => {
    setNoteToEdit(null);
    setModalOpen(true);
  };

  const handleSaveNote = (note) => {
    if (noteToEdit) {
      setNotes(prev => {
        const newarr = prev.map(n => (n.id === noteToEdit.id ? { ...note, id: noteToEdit.id } : n));
        localStorage.setItem('data', JSON.stringify(newarr));
        return newarr;
      });
    } else {
      setNotes(notes => {
        const newarr = [...notes, { ...note, id: Date.now() }];
        localStorage.setItem('data', JSON.stringify(newarr));
        return newarr;
    });
      
    }
    setModalOpen(false);
  };

  const handleDeleteNote = (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      setNotes(prev => {
        const newarr  = prev.filter(note => note.id !== id);
        localStorage.setItem('data', JSON.stringify(newarr));
        return newarr;
      });
    }
  };

  const handleEditNote = (note) => {
    setNoteToEdit(note);
    setModalOpen(true);
  };

  // Filter based on search-------------
  const filteredNotes = notes.filter(note =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    note.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <Header onAddNote={handleAddNote} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <NotesList notes={filteredNotes} onDelete={handleDeleteNote} onEdit={handleEditNote} />
      <AddNoteModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        onSave={handleSaveNote}
        editNote={noteToEdit}
      />
    </div>
  );
};

export default App;
