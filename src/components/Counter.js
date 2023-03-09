import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return initialState;
    default:
      return state;
  }
};

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = () => {
    dispatch({ type: 'increment' });
  };

  const handleDecrement = () => {
    dispatch({ type: 'decrement' });
  };

  const handleReset = () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div className="container mt-4">
      <h1>Counter: {state.count}</h1>
      <div className="d-flex">
        <button className="btn btn-primary mx-2" onClick={handleIncrement}>+</button>
        <button className="btn btn-danger mx-2" onClick={handleDecrement}>-</button>
        <button className="btn btn-secondary mx-2" onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
};

export default Counter;
