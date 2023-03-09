import { useState } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Home from './pages/Home';
import Tools from './pages/Tools';
import Services from './pages/Services';
import About from './pages/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [user, setUser] = useState(null);

  // handle user authentication
  const handleLogin = (user) => {
    setUser(user);
  }

  // handle user logout
  const handleLogout = () => {
    setUser(null);
  }

  return (
    <BrowserRouter>
      <Navbar bg="warning" expand="lg" style={{ paddingLeft: '30px', paddingRight: '10px' }}>
        <Navbar.Brand href="/">My Website</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/tools">Tools</Nav.Link>
            <Nav.Link as={Link} to="/services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            {user ? (
              <>
                <Nav.Link as={Link} to="/" onClick={handleLogout}>Logout</Nav.Link>
                <Nav.Link disabled>{user.email}</Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/signup">SignUp</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login onLogin={handleLogin} />
        </Route>
        <Route path="/tools">
          <Tools />
        </Route>
        <Route path="/services">
          <Services />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home user={user} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
