import React from 'react';
import volunteerIcon from '../../images/iconography/careers/volunteer.png';
import jobIcon from '../../images/iconography/careers/briefcase.png';
import internIcon from '../../images/iconography/careers/intern.png';
import ButtonPrimaryAlt from '../../components/buttons/button-primary-alt';
import './join-us.css';

const JoinUsStrip = () => {

    return (
        <div className='JoinUsStrip intro'>
            <h2>Join us!</h2>
            <p>Interested in joining the Charter family? As a fast-growing company we're always looking for the latest and greatest talent, but even more than that we're always looking for employees who believe in our core values.</p>
            <div className='card-wrapper'>
                <div className='card'>
                <img src={volunteerIcon} alt="Volunteer" />
                <h4>Volunteering</h4>
                <p>We offer a wide variety of volunteer positions for those looking to lend a hand in our patients' lives.</p>
                <ButtonPrimaryAlt link='/careers/volunteering' content='Become a volunteer' />
                </div>
                <div className='card'>
                <img src={jobIcon} alt="Briefcase" />
                <h4>Jobs</h4>
                <p>We're always looking to add ambitiuos talent to our rapidly-expanding workforce. Apply today!</p>
                <ButtonPrimaryAlt link='https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=ffc1c116-da32-4d3c-8e03-c4a1e22c100a&ccId=19000101_000001&type=MP&lang=en_US' content='See job openings' />
                </div>
                <div className='card'>
                <img src={internIcon} alt="Intern ID" />
                <h4>Internships</h4>
                <p>We provide engaging and rewarding internships across many departments and disciplines.</p>
                <ButtonPrimaryAlt link='/careers/volunteering' content='Become an intern' />
                </div>
            </div>
        </div>
    );
}

export default JoinUsStrip;