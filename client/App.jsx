import React, { Component } from 'react';
// import { render } from 'react-dom';
import './styles/styles.scss'
import Login from './components/Login';
import SignUp from './components/SignUp'

const App = () => {
  return (
    <div>
      <Login />
      <br></br>
      <SignUp />
    </div>
  )
}

export default App;