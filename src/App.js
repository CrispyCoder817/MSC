import { useState, useEffect } from "react";
import Player from './Components/Player';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoadScreen from './Pages/LoadScreen';
import Music from './Pages/Music';

function App() {
  const [songs] = useState([
    {
      artist: 'Tyler Vogt',
      title: "30.5",
      src: "./Music/Track01_30.5.m4a",
    },
    {
      artist: 'Tyler Vogt',
      title: "53",
      src: "./Music/Track02_53.m4a",
    },
    {
      artist: 'Tyler Vogt',
      title: "Cheddar",
      src: "./Music/Track03_Cheddar.m4a",
    },
    {
      artist: 'Tyler Vogt',
      title: "justOne",
      src: "./Music/Track04_Just_One.m4a",
    },
    {
      artist: 'Tyler Vogt',
      title: "DaFirst4Us",
      src: "./Music/Track05_Da_First_for_Us.m4a",
    },
    {
      artist: 'Sera Greenwald',
      title: 'Toxic Mastered',
      src: './Music/Track06_Toxic_Mastered.m4a',
    },
    {
      artist: 'Sera Greenwald',
      title: 'Hard to See It',
      src: './Music/Track07_Hard_to_See_it.mp3',
    },
    {
      artist: 'Sera Greenwald',
      title: 'HV2',
      src: './Music/Track08_hv2_2.m4a',
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(() => {
    setNextSongIndex(() => {
      if (currentSongIndex + 1 > songs.length - 1) {
        return 0;
      } else {
        return currentSongIndex + 1;
      }
    });
  }, [currentSongIndex]);

  return (
  <div className="App">
    <Player currentSongIndex={currentSongIndex} setCurrentSongIndex={setCurrentSongIndex} nextSongIndex={nextSongIndex} songs={songs}/>
    <div>
      <Router>
        <Switch>
          <Route exact path='/' Component={Music}> </Route>
          {/* <Route exact path='/music' Component={Music}></Route> */}
        </Switch>
      </Router>
    </div>
    </div>
  );
}

export default App;
