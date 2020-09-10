import React from 'react';
import './share-buttons.css';
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  TwitterShareButton,
  TwitterIcon
} from 'react-share';
 
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