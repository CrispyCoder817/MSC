import './App.css';
import Msc from './Branding/Logo_MSC01.png';
// import { AudioPlayer } from './Components/AudioPlayer/';
// import Sound from 'react-sound';
// import Sound from 'react-sound';
import ReactAudioPlayer from 'react-audio-player';
import Track01 from './Music/Track01_30.5.m4a';
// import Track02 from './Music/Track02_53.m4a';
// import Track03 from './Music/Track03_Cheddar.m4a';
// import Track04 from './Music/Track04_Just_One.m4a';
// import Track05 from './Music/Track05_Da_First_for_Us.m4a';

// import ReactAudioPlayer from 'react-audio-player';
import React from 'react';

// import React, {useState} from 'react';
// import useSound from 'use-sound';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPlayCircle, faPauseCircle} from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={Msc} className="App-logo" alt="logo" />
        <p>
          Music Streaming Channel
        </p>
        <audio>
<ReactAudioPlayer
  src= { Track01 }
  autoPlay = {true}
  controls = {true}
/>
        </audio>
      </header>
    </div>
  );
};


export default App;
