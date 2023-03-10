import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyContext = createContext();

function Home({ }) {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');
  const [textValue, setTextValue] = useState('');

  const handleClick = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const handleSaveClick = useCallback(() => {
    setTextValue(inputValue);
    setInputValue('');
  }, [inputValue]);

  const handleDeleteClick = useCallback(() => {
    setTextValue('');
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div></div>
  );
}


export default Home;
