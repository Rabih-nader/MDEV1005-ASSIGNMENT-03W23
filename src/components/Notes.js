import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, ListGroup } from 'react-bootstrap';

function Notes() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');

  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes(notes.concat(newNote));
      setNewNote('');
    }
  }

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  }

  return (
    <div>
      <h2>Notes</h2>
      <Form className="d-flex mt-3">
        <Form.Control type="text" placeholder="New note" value={newNote} onChange={(e) => setNewNote(e.target.value)} />
        <Button variant="primary" className="ms-2" onClick={addNote}>Add</Button>
      </Form>
      <ListGroup>
        {notes.map((note, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {note}
            <Button variant="danger" onClick={() => deleteNote(index)}>Delete</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}

export default Notes;
