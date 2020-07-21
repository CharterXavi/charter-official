import React from 'react'
import './video.css'
import videoImage from '../../images/video.png'


const VideoStrip = () => {
  return (
    <div className='VideoStrip'>
        <img src={videoImage} alt="Charter Introduction Video" />
    </div>
  )
}

export default VideoStrip