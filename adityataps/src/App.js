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
          
          <a className="App-link" 
          class="animated fadeIn delay-1" href="http://www.google.com">about</a> <b class="animated fadeIn delay-15"> // </b> <a className="App-link" 
          class="animated fadeIn delay-2" href="http://www.google.com">projects</a> <b class="animated fadeIn delay-25"> // </b> <a className="App-link" 
          class="animated fadeIn delay-3" href="http://www.google.com">resumé</a> <b class="animated fadeIn delay-35"> // </b> <a className="App-link" 
          class="animated fadeIn delay-4" href="http://www.google.com">contact</a>
        
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <div class="icons-container animated fadeIn delay-5">
          <span class="iconify" data-icon="entypo-social:facebook-with-circle" data-inline="false"></span>
          <span class="iconify" data-icon="entypo-social:linkedin-with-circle" data-inline="false"></span>        
          <span class="iconify" data-icon="entypo-social:github-with-circle" data-inline="false"></span>
        </div>


        </p>
      </header>
    </div>
  );
}

export default App;
