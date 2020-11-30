import React, {useState, useEffect} from 'react';
import './video2.css';
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
      <div className={`video-wrapper ${videoState ? 'active-wrapper' : ''}`}>
        <div className='title'>
          <h4 className={`${videoState ? 'active-heading' : ''}`}>See the</h4>
          <h4 className={`${videoState ? 'active-heading' : ''}`}>Charter Difference</h4>
          <h4 className={`${videoState ? 'active-heading' : ''}`}>for yourself</h4>
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

        <div className='play-btn-wrapper' onClick={showVideo} onKeyDown={showVideo} role='button' tabIndex='0'>
          {videoState ? <ButtonPrimary content='Hide Video' /> : <ButtonPrimary content='Watch Video' />}
        </div>
      </div>
    </div>
  )
}

export default VideoStrip2