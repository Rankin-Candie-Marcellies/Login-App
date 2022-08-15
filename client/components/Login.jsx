import React, { Component } from 'react';

const Login = () => {
  const handleLogin = e => {
    fetch('http://localhost3000/login', {
      method: POST,
      headers: {
        "Content-type": "application/json",
      },
      body: {
        username: e.target.username.value,
        password: e.target.password.value
      }
    })
  }

  return (
    <div className="login-box">
      <form className="login-form">
        <label for="username-email">Enter username or email</label>
        <input type="text" name="username-email" className="username"></input><br></br>
        <label for="password">Enter password</label>
        <input type="password" name="password"></input>
      </form>
      <button className="login-button" onClick={handleLogin}>Login</button>
      <a href='#' className="forgot-password">Forgot Password?</a>
      <p className="new-user-text">New User? <a href='#' className="register-button">Register</a></p>
    </div>
  )
}

export default Login;