import React from 'react'
import Song from './Song'

// class SongCollection extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let songFragments = this.props.songs.map(song => {
//       let className;
//       if(song.id === this.props.selectedSongId){
//         className = "selected";
//       } else {
//         className = "";
//       }
//       return(
//         <Song
//           key={song.id}
//           id={song.id}
//           name={song.name}
//           artist={song.artist}
//           album={song.album}
//           className={className}
//           handleSongSelect={this.props.handleSongSelect}
//         />
//       )
//     })
//     return(
//       <ul className="SongCollection">
//         {songFragments}
//       </ul>
//     )
//   }
// }
const SongCollection = (props) => {
  let songFragments = props.songs.map(song => {
    let className;
    if(song.id === props.selectedSongId){
      className = "selected";
    } else {
      className = "";
    }
    return(
      <Song
        key={song.id}
        id={song.id}
        name={song.name}
        artist={song.artist}
        album={song.album}
        className={className}
        handleSongSelect={props.handleSongSelect}
      />
    )
  })
  return(
    <ul className="SongCollection">
      {songFragments}
    </ul>
  )
}

export default SongCollection;
