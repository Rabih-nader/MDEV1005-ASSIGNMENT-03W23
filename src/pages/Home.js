import React, { useState, useEffect, useCallback, useContext, createContext } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const MyContext = createContext();

function Home() {
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
    <MyContext.Provider value={textValue}>
      <Container>
        <Row>
          <Col>
            <h1>Home Page</h1>
            <p>Welcome to my React Router App!</p>
            <p>You clicked {count} times</p>
            <Button onClick={handleClick} bsPrefix="btn btn-primary">Click me</Button>
            <br />
            <textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="form-control mt-3"
              style={{ width: '100%' }}
            />
            <br />
            <Button onClick={handleSaveClick} bsPrefix="btn btn-primary me-3">Save</Button>
            <Button onClick={handleDeleteClick} bsPrefix="btn btn-danger">Delete</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <TextView />
          </Col>
        </Row>
      </Container>
    </MyContext.Provider>
  );
}

function TextView() {
  const value = useContext(MyContext);
  return <p className="mt-3">{value}</p>;
}

export default Home;
