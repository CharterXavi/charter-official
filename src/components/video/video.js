import React from 'react'
import './video.css'
import videoImage from '../../images/video.png'


const VideoStrip = () => {
  return (
    <div className='VideoStrip'>
        <iframe className='video' src="https://player.vimeo.com/video/312555365" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
    </div>
  )
}

export default VideoStrip