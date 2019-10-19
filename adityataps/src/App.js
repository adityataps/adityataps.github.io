import React from 'react';
import logo from './APictureOfMe.jpeg';
import name from './ThisIsMyName.png';
import {
    BrowserView,
    MobileView,
    isBrowser,
    isMobile
} from "react-device-detect";

import './App.css';

function App() {

  return (
    <div className="Home">
      <header className="App-header">
      <br></br>
        <br></br>
        <img src={name} className="ThisIsMyName" alt="name" height="200" width="800"/>
        <p>
            <BrowserView>
          <div class="options-container">
          <a className="App-link" 
          class="animated fadeIn delay-1" href="http://www.google.com">about</a> <b class="animated fadeIn delay-15"> // </b> <a className="App-link" 
          class="animated fadeIn delay-2" href="http://www.google.com">projects</a> <b class="animated fadeIn delay-25"> // </b> <a className="App-link" 
          class="animated fadeIn delay-3" href="http://www.google.com">resumé</a> <b class="animated fadeIn delay-35"> // </b> <a className="App-link" 
          class="animated fadeIn delay-4" href="http://www.google.com">contact</a>

          </div>
            </BrowserView>

            <MobileView>
                <br></br>
                <br></br>
                <div class="mobile-options">
                    <a className="App-link"
                       className="animated fadeIn delay-1" href="http://www.google.com">about</a><br></br>
                    <a className="App-link"
                       className="animated fadeIn delay-2" href="http://www.google.com">projects</a><br></br>
                    <a className="App-link"
                       className="animated fadeIn delay-3" href="http://www.google.com">resumé</a><br></br>
                    <a className="App-link"
                       className="animated fadeIn delay-4" href="http://www.google.com">contact</a><br></br>
                </div>
            </MobileView>

        <br></br>
        <br></br>
        <br></br>

        <div class="icons-container animated fadeIn delay-5" style={{position: "fixed"}}>

            <a href="https://www.facebook.com/adits707" rel="noopener noreferrer" target="_blank">
            <icon span className="iconify" data-icon="entypo-social:facebook-with-circle" data-inline="false"></icon>
            </a>
            <a href="https://www.linkedin.com/in/adityatapshalkar/" rel="noopener noreferrer" target="_blank">
          <icon span class="iconify" data-icon="entypo-social:linkedin-with-circle" data-inline="false"></icon>
            </a>
            <a href="https://github.com/adityataps" rel="noopener noreferrer" target="_blank">
          <icon span class="iconify" data-icon="entypo-social:github-with-circle" data-inline="false"></icon>
            </a>

            </div>

        </p>


          <pre>





          </pre>



      </header>
    </div>
  );
}

export default App;
