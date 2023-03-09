import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CharacterCounter = () => {
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
setInputValue(event.target.value);
};

const handleDeleteContent = () => {
setInputValue('');
};

const characterCount = inputValue.length;

return (
<div className="container my-3">
<h1 className="text-danger">Character Counter</h1>
<div className="input-group mb-3">
<textarea type="text" className="form-control" value={inputValue} onChange={handleInputChange} />
<span className="input-group-text">{characterCount}</span>
<button className="btn btn-warning" onClick={handleDeleteContent}>Delete</button>
</div>
</div>
);
};

export default CharacterCounter;