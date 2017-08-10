import React from 'react'

const Song = (props) => {
  let handleSongSelect = () => {
    props.handleSongSelect(props.id)
  }
  return(
    <div>
      <li className={props.className} onClick={handleSongSelect}>{props.name}</li>
    </div>
  )
}

export default Song
