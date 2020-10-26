import React, {useState, useEffect} from 'react';
import './video2.css';
import videoBlast1 from '../../images/iconography/video-blast1.png';
import videoBlast2 from '../../images/iconography/video-blast2.png';
import videoWaveTop from '../../images/video-wave-top.png';
import videoWaveBottom from '../../images/video-wave-bottom.png';
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonPrimary from '../buttons/button-primary';

const VideoStrip2 = () => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  const [videoState, setVideoState] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  const showVideo = () => {
    setVideoState(!videoState);
    setButtonState(!buttonState);
  }

  return (
    <div className='VideoStrip2'>
      <div className='video-wrapper'>
        <div className='title'>
          <h2>See the</h2>
          <h2>Charter Difference</h2>
          <h2>for yourself</h2>
        </div>

        <p className={`${videoState ? 'hide' : 'headline'}`} >
          Learn more about what makes us who we are, from our services to our teams and everything in between.
        </p>

        <iframe 
          className={`video ${videoState ? 'active' : ''}`} 
          src="https://player.vimeo.com/video/312555365" 
          title='Charter Healthcare Introduction and Information'
          width="640" height="360" frameBorder="0" allowFullScreen
        />

        <div className='play-btn-wrapper' onClick={showVideo} onKeyDown={showVideo} role='button'>
          {videoState ? <ButtonPrimary content='Hide Video' /> : <ButtonPrimary content='Watch Video' />}
        </div>
      </div>
    </div>
  )
}

export default VideoStrip2