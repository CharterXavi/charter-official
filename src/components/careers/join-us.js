import React from 'react';
import volunteerIcon from '../../images/iconography/careers/volunteer.png';
import jobIcon from '../../images/iconography/careers/briefcase.png';
import internIcon from '../../images/iconography/careers/intern.png';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import './join-us.css';

const JoinUsStrip = () => {

    return (
        <div className='JoinUsStrip'>
            <div className='two-column'>
                <div className="title">
                    <h4>Join us!</h4>
                    <hr/>
                </div>
                <div className="content">
                    <div className="left">
                        <h6>Apply today</h6>
                        <p>
                            Interested in joining the Charter family? As a fast-growing company we're always looking for the latest and greatest talent,
                            but even more than that we're always looking for employees who believe in our core values: <strong>compassion, integrity, and innovation. </strong>
                            If that sounds like you, we'd love to hear more about you.
                        </p>
                        </div>
                    <div className="right"></div>
                </div>
                <div className='card-wrapper'>
                    <div className='card'>
                        <img src={volunteerIcon} alt="Volunteer" />
                        <h6 className='detail-title'>Volunteering</h6>
                        <p className='detail-text'>We offer a wide variety of volunteer positions for those looking to lend a hand in our patients' lives.</p>
                        <ButtonPrimaryAlt link='/careers/volunteering' content='Become a volunteer' />
                    </div>
                    <div className='card'>
                        <img src={jobIcon} alt="Briefcase" />
                        <h6 className='detail-title'>Jobs</h6>
                        <p className='detail-text'>We're always looking to add ambitiuos talent to our rapidly-expanding workforce. Apply today!</p>
                        <ButtonPrimaryAlt link='https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=ffc1c116-da32-4d3c-8e03-c4a1e22c100a&ccId=19000101_000001&type=MP&lang=en_US' content='See job openings' />
                    </div>
                    <div className='card'>
                        <img src={internIcon} alt="Intern ID" />
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