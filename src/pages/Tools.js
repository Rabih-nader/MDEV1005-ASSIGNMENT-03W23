import React from 'react';
import Notes from '../components/Notes';
import Counter from '../components/Counter';
import CharacterCounter from '../components/CharacterCounter';
import Checklist from '../components/Checklist';

function Tools() {
  return (
    <div className="container">
      <h1>Tools Page</h1>

      <div className="row">
        <div className="col-md-6">
          <Counter />
        </div>
        <div className="col-md-6">
          <CharacterCounter />
        </div>
      </div>
      <Notes />
      <Checklist />
    </div>
  );
}

export default Tools;
