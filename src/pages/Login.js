import firebase from "../firebase";
import { useState } from "react";
import { useHistory } from "react-router-dom";




const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Logged in successfully
        const user = userCredential.user;
        console.log(user);
        history.push("/"); // Navigate to home page
      })
      .catch((error) => {
        // An error occurred
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        setErrorMessage(errorMessage);
      });
  };

  return (
    <div>
      <h2>Login</h2>
      {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
      <form onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
