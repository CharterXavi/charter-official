import './join-us.css';

import BriefcaseIcon from '../icons/briefcase';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import InternIcon from '../icons/intern';
import React from 'react';
import VolunteerIcon from '../icons/volunteer';

const JoinUsStrip = () => {

    return (
        <div className='JoinUsStrip'>
            <div className='two-column'>
                <div className="title">
                    <h4>Join us!</h4>
                    <hr/>
                    <p>
                        Interested in joining the Charter family? As a fast-growing company we're always looking for the latest and greatest talent,
                        but even more than that we're always looking for employees who believe in our core values: <strong>compassion, integrity, and innovation. </strong>
                        If that sounds like you, we'd love to hear more about you.
                    </p>
                </div>
                <div className='card-wrapper'>
                    <div className='card'>
                        <BriefcaseIcon />
                        <h6 className='detail-title'>Jobs</h6>
                        <p className='detail-text'>We're always looking to add ambitious talent to our rapidly-expanding workforce. Apply today!</p>
                        <ButtonPrimaryAlt link='https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=ffc1c116-da32-4d3c-8e03-c4a1e22c100a&ccId=19000101_000001&type=MP&lang=en_US' content='See job openings' />
                    </div>
                    <div className='card'>
                        <VolunteerIcon />
                        <h6 className='detail-title'>Volunteering</h6>
                        <p className='detail-text'>We offer a wide variety of volunteer positions for those looking to lend a hand in our patients' lives.</p>
                        <ButtonPrimaryAlt link='/careers/volunteering' content='Become a volunteer' />
                    </div>
                    <div className='card'>
                        <InternIcon />
                        <h6 className='detail-title'>Internships</h6>
                        <p className='detail-text'>We provide engaging and rewarding internships across many departments and disciplines.</p>
                        <ButtonPrimaryAlt link='/careers/volunteering' content='Become an intern' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default JoinUsStrip;