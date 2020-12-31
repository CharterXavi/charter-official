import './share-buttons.css';

import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton
} from 'react-share';

import React from 'react';

const ShareButtons = ({title, url, facebookHandle, linkedinHandle, twitterHandle, tags}) => {
    
    return(
        <div className='ShareButtons'>
          <FacebookShareButton url={url} title={title} via={facebookHandle} hashtags={tags} >
                <FacebookIcon  size={35} round={true} />
         </FacebookShareButton>
      
          <LinkedinShareButton url={url} title={title} via={linkedinHandle} hashtags={tags}>
            <LinkedinIcon  size={35} round={true}/>
          </LinkedinShareButton>

           <TwitterShareButton url={url} title={title} via={twitterHandle} hashtags={tags}>
                <TwitterIcon  size={35} round={true} />
          </TwitterShareButton>
        </div>
      )
      
}
export default ShareButtons