import './App.css';

import Msc from './Branding/Logo_MSC01.png';
// import AudioList from './Components/AudioList';
// import { AudioPlayer } from './Components/AudioPlayer/';
// import Sound from 'react-sound';
// import Sound from 'react-sound';
import ReactAudioPlayer from 'react-audio-player';
// import Track01 from './Music/Track01_30.5.m4a';
import Track02 from './Music/Track02_53.m4a';
// import Track03 from './Music/Track03_Cheddar.m4a';
// import Track04 from './Music/Track04_Just_One.m4a';
// import Track05 from './Music/Track05_Da_First_for_Us.m4a';
// import Music from './Components/AudioList';
// import { audioList } from './MusicArray';

// import ReactAudioPlayer from 'react-audio-player';
import React from 'react';

// import React, {useState} from 'react';
// import useSound from 'use-sound';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faPlayCircle, faPauseCircle} from '@fortawesome/free-solid-svg-icons';

// var audio = [Track01, Track02, Track03, Track04, Track05];
// var audioList = audio.toString();
// console.log(audioList);
// var setList = []
// const audioList = audio.length;
// const audioTracks = audioList.map;

// render: function() {
//   const elements = [Track01, Track02, Track03, Track04, Track05];
//   return (
//     <ul>
//       {elements.map((value, index) => {
//         return <li key={index}>{value}</li>
//       })}
//     </ul>
//   )
// }

// console.log(audio);
// console.log(setList);

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={Msc} className="App-logo" alt="logo" />
        <p>
          Music Streaming Channel
        </p>
        {/* <audio> */}
<ReactAudioPlayer
  src= {Track02}
  layout= 'none'
  // timeFormat= 'auto'
  autoPlay = {true}

  // Shows the Bar player
  // controls = {false}
  controls = {true}
  // 
  showSkipControls = {false}
  listenInterval = {1}
  // autoPlayAfterSrcChange = {true}
/>


{/* <ReactAudioPlayer
  src= { Track02 }
  autoPlay = {true}
  controls = {true}
/>
<ReactAudioPlayer
  src= { Track03 }
  autoPlay = {true}
  controls = {true}
/>
<ReactAudioPlayer
  src= { Track04 }
  autoPlay = {true}
  controls = {true}
/>
<ReactAudioPlayer
  src= { Track05 }
  autoPlay = {true}
  controls = {true}
/> */}
        {/* </audio> */}
      </header>
    </div>
  );
};
console.log(ReactAudioPlayer)

export default App;
