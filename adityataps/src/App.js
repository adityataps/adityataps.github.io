import React from 'react';
import logo from './APictureOfMe.jpeg';
import name from './ThisIsMyName.png';

import outlook from './social/microsoftoutlook.svg';
// import { ReactComponent as outlook } from './social/microsoftoutlook.svg'
import fb from './social/facebook.svg';
import github from './social/github.svg';
import linkedin from './social/linkedin.svg';

import './App.css';

function App() {

  return (
    <div className="Home">
      <header className="App-header">
      <br></br> 
{/*        <img src={logo} className="APictureOfMe" alt="logo" height="400" width="400"/> */}
        <br></br>
        <img src={name} className="ThisIsMyName" alt="name" height="200" width="800"/>
        <p>
          
          <a className="App-link" href="http://www.google.com">about</a> // <a className="App-link" href="http://www.google.com">projects</a> // <a className="App-link" href="http://www.google.com">resumé</a> // <a className="App-link" href="http://www.google.com">contact</a>
        
        <br></br>


        </p>
      </header>
    </div>
  );
}

export default App;
