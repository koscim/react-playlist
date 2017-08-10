import React from 'react'
import Playlist from './Playlist'

// class PlaylistCollection extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     let playlistFragments = this.props.playlists.map(playlist => {
//       let className;
//       if(playlist.id === this.props.selectedPlaylistId){
//         className = "selected"
//       } else {
//         className = ""
//       }
//       return(
//         <Playlist
//           key={playlist.id}
//           id={playlist.id}
//           name={playlist.name}
//           songs={playlist.songs}
//           className = {className}
//           handlePlaylistSelect={this.props.handlePlaylistSelect}
//         />
//       )
//     })
//     return(
//       <ul className="PlaylistCollection">
//         {playlistFragments}
//       </ul>
//     )
//   }
// }
const PlaylistCollection = (props) => {
  let playlistFragments = props.playlists.map(playlist => {
    let className;
    if(playlist.id === props.selectedPlaylistId){
      className = "selected"
    } else {
      className = ""
    }
    return(
      <Playlist
        key={playlist.id}
        id={playlist.id}
        name={playlist.name}
        songs={playlist.songs}
        className = {className}
        handlePlaylistSelect={props.handlePlaylistSelect}
      />
    )
  })
  return(
    <ul className="PlaylistCollection">
      {playlistFragments}
    </ul>
  )
}

export default PlaylistCollection;
