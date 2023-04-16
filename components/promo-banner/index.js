// import React from 'react'

// export default function PromoBanner() {
//   return (
//     <div>index</div>
//   )
// }
import React from 'react';
import YouTube from 'react-youtube';

class Example extends React.Component {
  
  render() {
    const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return <YouTube onPlay={true} onPause={true}  videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}