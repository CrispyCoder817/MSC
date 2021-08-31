// import React, { Component } from 'react'
// import { render } from 'react-dom'
// import AudioPlayer from 'react-playlist-player'
// msc = 'MusicStreamingChannel'

// class Demo extends Component {
//     state = {
//       currentPlayList: {}
//     }
// //   Songs
//     loadPlayList = () =>
//       this.setState({
//         currentPlayList: {
//           playlistCoverUrl: 'src/Branding/MSC.png',
//           playlistName: {msc},
//           bandName: 'TheBeatsGoOn',
//           songs: [
//             {
//               position: '1',
//               songName: '30.5',
//               songUrl: 'src/Music/Track01_30.5.m4a'
//             },
//             {
//               position: '2',
//               songName: '53',
//               songUrl: 'src/Music/Track02_53.m4a'
//             },
//             {
//               position: '3',
//               songName: 'Cheddar',
//               songUrl: 'src/Music/Track03_Cheddar.m4a'
//             },
//             {
//               position: '4',
//               songName: 'justOne',
//               songUrl: 'src/Music/Track04_Just_One.m4a'
//             },
//             {
//               position: '5',
//               songName: 'DaFirst4Us',
//               songUrl: 'src/Music/Track05_Da_First_for_Us.m4a'
//             },
            

//           ],
//           type: 'album'
//         }
//       })
//     //   Rendering demo
//     render() {
//         return (
//           <div className={'Demo'}>
//             <button className={'Demo__load-btn'} onClick={this.loadPlayList}>
//               load playlist
//             </button>
//             <AudioPlayer currentPlayList={this.state.currentPlayList} 
//               onToggle={({audioPlaying}) => console.log({audioPlaying})}
//               onSongChanged={({currentSong}) => {console.log(currentSong)}}
//             />
//           </div>
//         )
//       }
//     }
//     export default Demo;
//     // render(<Demo />, document.querySelector('#demo'))