import React from 'react';
import './footer.css';
import ContactForm from '../../components/form';
import {Link} from 'gatsby';
import facebook from '../../images/iconography/facebook.png';
import linkedin from '../../images/iconography/linkedin.png';
import instagram from '../../images/iconography/instagram.png';
import twitter from '../../images/iconography/twitter.png';


//TODO - MAKE CARDS EXPANDABLE ON MOBILE AND DESKTOP

const Footer = () => {
  return (
    <footer className='Footer'>
        <hr/>
        <div className='content-wrapper'>
            <div className='left'>
                <ContactForm />
            </div>
            <div className='right'>
                <div className='helpful-links'>
                    <h4>Helpful Links</h4>
                    <ul>
                        <li className='detail-text'><Link to='/about'>About Charter</Link></li>
                        <li className='detail-text'><Link to='/careers'>Careers</Link></li>
                        <li className='detail-text'><Link to='/terms-and-conditions'>Terms & Conditions</Link></li>
                        <li className='detail-text'><Link to='/privacy-policy'>Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className='headquarters'>
                    <h4>Charter Headquarters</h4>
                    <ul>
                        <li className='detail-text'>9660 Haven Ave, Rancho Cucamonga, CA 91730</li>
                        <li className='detail-text'>P: <a href='tel: 909-644-4965'>909-644-4965</a></li>
                        <li className='detail-text'>F: <a href='fax: 909-503-1138'>909-503-1138</a></li>
                    </ul>
                </div>
                <div className='socials'>
                    <h4>Follow Us</h4>
                    <ul>
                        <li>
                            <a href="https://www.linkedin.com/company/charter-healthcare-group/" target='_blank' rel="noopener noreferrer">
                                <img src={linkedin} alt="LinkedIn" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/CharterHCG" target='_blank' rel="noopener noreferrer">
                                <img src={facebook} alt="Facebook" />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/charterhcg/" target='_blank' rel="noopener noreferrer">
                                <img src={instagram} alt="Instagram" />
                            </a>
                        </li>
                        <li>
                            <a href="https://twitter.com/charterhcg" target='_blank' rel="noopener noreferrer">
                                <img src={twitter} alt="Twitter" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='bottom'>
            <p>© {new Date().getFullYear()}, Built with ❤️ by Charter Healthcare Group</p>
        </div>
    </footer>
  )
}

export default Footer