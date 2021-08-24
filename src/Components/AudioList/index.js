import React from 'react';

import Track01 from '../../Music/Track01_30.5.m4a';
import Track02 from '../../Music/Track02_53.m4a';
import Track03 from '../../Music/Track03_Cheddar.m4a';
import Track04 from '../../Music/Track04_Just_One.m4a';
import Track05 from '../../Music/Track05_Da_First_for_Us.m4a';

class AudioPlayer extends React.Component {
    constructor (props) {
        super(props);

        this.audios = props.list.map(audio => new Audio(audio));
    }

    getCurrentAudio () {
        return this.audios.find(audio => false === audio.paused);
    }

    toggle (nextAudio) {
        const currentAudio = this.getCurrentAudio();

        if (currentAudio && currentAudio !== nextAudio) {
            currentAudio.pause();
        }

        nextAudio.paused ? nextAudio.play() : nextAudio.pause();
    }

    render () {
        return (
            <div>
                { this.audios.map((audio, index) =>
                    <button onClick={() => this.toggle(audio) }>
                        PLAY AUDIO { index }
                    </button>
                ) }
            </div>
        )
    }
}


export default () => <Audio list={[ Track01, Track02, Track03, Track04, Track05 ]} />;