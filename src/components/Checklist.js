import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checklist = () => {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    if (inputValue) {
      setItems([...items, { label: inputValue, isChecked: false }]);
      setInputValue('');
    }
  };

  const handleToggleItem = (index) => {
    const updatedItems = [...items];
    updatedItems[index].isChecked = !updatedItems[index].isChecked;
    setItems(updatedItems);
  };

  const handleDeleteAllItems = () => {
    setItems([]);
  };

  return (
    <div className="container">
      <h1 className="mt-4 mb-3">Checklist</h1>
      <div className="form-group">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            id="inputItem"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="input-group-append">
            <button
              className="btn btn-primary"
              type="button"
              onClick={handleAddItem}
            >
              Add Item
            </button>
          </div>
        </div>
      </div>
      {items.length > 0 && (
        <div className="form-group">
          <label>Items:</label>
          <ul className="list-group">
            {items.map((item, index) => (
              <li
                key={index}
                className={`list-group-item ${
                  item.isChecked ? 'list-group-item-success' : ''
                }`}
              >
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    checked={item.isChecked}
                    onChange={() => handleToggleItem(index)}
                  />
                  <label className="form-check-label">{item.label}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      {items.length === 0 && <p>No items added yet.</p>}
      {items.length > 0 && (
        <div className="form-group">
          <button
            className="btn btn-danger"
            type="button"
            onClick={handleDeleteAllItems}
          >
            Delete All Items
          </button>
        </div>
      )}
    </div>
  );
};

export default Checklist;
