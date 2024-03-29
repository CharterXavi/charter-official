import React from 'react';
import ButtonPrimaryAlt from '../buttons/button-primary-alt';
import './volunteer-strip.css';
import VolunteerIcon from '../icons/volunteer';
import BriefcaseIcon from '../icons/briefcase';

const VolunteerStrip = () => {

    return (
        <div className='VolunteerStrip'>
            <div className='card-wrapper two-column'>
                <div className='left'>
                    <VolunteerIcon />
                    <h4>Volunteering</h4>
                    <p>From the start of the hospice movement in the United States, volunteers have been at the heart of hospice care. Before Medicare certified hospice programs, hospice was an all-volunteer program. Over the years hospice has evolved into a team of people each with their own unique set of skills, dedicated to providing exceptional end of life care to those we serve.</p>
                    <h6>What do volunteers do?</h6>
                    <p>Our volunteers listen to patients when they wish to share their life experience, and this gives patients a chance to reflect on the meaningful moments that gave their life purpose. In an attempt to spare family members’ sadness, patients will sometimes speak openly to a volunteer, providing the patient a safe person to share their feelings with.</p>
                    <p>At other times, it may be the caregiver who needs the support of the volunteer. Someone who can sit with the patient for a while allowing caregivers to have some time away for errands. This can be for short periods of time making the difference between the caregiver being able to continue their role in caring for the patient. Many times caregivers have stated they would not have been able to continue without the volunteer’s support. Volunteers share the area of interest that they wish to serve. Many times the volunteer may have life skills that they want to utilize when volunteering, such as reading to patients, helping them write letters, listening to music, playing cards or board games, assisting with shopping, etc.</p>
                    <h6>Student Volunteering</h6>
                    <p>Our student volunteers are the jewels in our program. They have been inspired to become medical professionals because of their exposure to caring for our hospice patients who are nearing the end of life. Student volunteers have remarkable compassion and a caring nature that brings tremendous joy to or patients and their families.</p>
                    <h6>Become a Volunteer</h6>
                    <p>If you're just as passionate as you are compassionate, you will fit right in with our volunteers in this program. Send us an email by clicking the button below, and we look forward to hearing from you.</p>
                    <ButtonPrimaryAlt content='Send Email' link='mailto: bonniebeck@charterhcg.com'/>
                </div>
                <div className='right'>
                    <BriefcaseIcon />
                    <h4>Internships</h4>
                    <p>Interested in a career in healthcare? Interning is one of the best ways to gain hands-on experience and cultivate your budding passions.</p>
                    <h6>What we offer</h6>
                    <p>At Charter, our interns get to be an integral part of the exciting work our teams do. We take on interns in many different disciplines and departments throughout the company, including our healthcare programs, recruitment, social work, human resources (HR), and many more.</p>
                    <h6>What we're looking for</h6>
                    <p>Our core values at Charter are compassion, integrity, and innovation. These may sound cliche, but our employees live these ideals out truly and honestly. We're looking for driven new talent, namely those who identify with these core values. We want interns who tackle each day with enthusiasm, and strive to make a positive impact on the patients, teams, etc. they work alongside.</p>
                    <h6>Become an intern</h6>
                    <p>If you're interested in seeing what positions are available, please send an email to our recruitment department by clicking the button below with your resume attached. We'll respond at our earliest convenience and answer any questions you may have. We can't wait to hear from you!</p>
                    <ButtonPrimaryAlt content='Send Email' link='mailto: edithto@charterhcg.com'/>
                </div>
            </div>
        </div>
    );
}

export default VolunteerStrip;