import React, { useState } from 'react';
import './App.css';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showTooltip, setShowTooltip] = useState(false);
  const [message, setMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username === 'user' && password === 'password') {
      setMessage(`Welcome, ${username}!`);
      setIsLoggedIn(true);
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="App">
      <h1>Login page</h1>
      {!isLoggedIn && (
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
      {showTooltip && <span className="tooltip show">Please fill out this field.</span>}
      <p>{message}</p>
    </div>
  );
}

export default App;
