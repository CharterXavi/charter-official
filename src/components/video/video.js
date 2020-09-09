import React, {useState, useEffect} from 'react';
import './video.css';
import videoBlast1 from '../../images/iconography/video-blast1.png';
import videoBlast2 from '../../images/iconography/video-blast2.png';
import AOS from "aos";
import "aos/dist/aos.css";
import ButtonPrimary from '../../components/buttons/button-primary';

const VideoStrip = () => {

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
    <div className='VideoStrip'>
      <svg xmlns="http://www.w3.org/2000/svg" width="452" height="361" viewBox="0 0 452 361" fill="none" className='video-wave-one'>
        <path d="M0 0H452C452 0 313.847 27.4049 270.8 64.1825C227.752 100.96 245.271 164.564 130.645 174.948C16.0177 185.332 0 361 0 361V0Z" fill="url(#paint25_linear)"/>
        <defs>
        <linearGradient id="paint25_linear" x1="0" y1="361" x2="452" y2="361" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F493AA"/>
        <stop offset="1" stopColor="#F2D1C9"/>
        </linearGradient>
        </defs>
      </svg>
      <img src={videoBlast1} alt="group of healthcare symbols" className='video-blast1' data-aos='fade-right' data-aos-duration='1500' />

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

      <div className='play-btn-wrapper' onClick={showVideo} onKeyDown={showVideo} role='button' tabIndex='0'>
        {videoState ? <ButtonPrimary content='Hide Video' /> : <ButtonPrimary content='Watch Video' />}
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" width="446" height="236" viewBox="0 0 446 236" fill="none" className='video-wave-two' >
        <path d="M147.841 168.571C191.22 117.427 201.454 66.4466 314.678 77.2619C427.901 88.0772 446 0 446 0V236H0C0 236 104.462 219.716 147.841 168.571Z" fill="url(#paint26_linear)"/>
        <defs>
        <linearGradient id="paint26_linear" x1="0" y1="236" x2="446" y2="236" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F493AA"/>
        <stop offset="1" stopColor="#F2D1C9"/>
        </linearGradient>
        </defs>
      </svg>
      <img src={videoBlast2} alt="group of healthcare symbols" className='video-blast2' data-aos='fade-left' data-aos-duration='1500' />
    </div>
  )
}

export default VideoStrip