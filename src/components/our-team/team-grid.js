import React, {useState} from 'react'
import './team-grid.css'
import steve from '../../images/team/steve.png'
import sabina from '../../images/team/sabina.png'
import daniel from '../../images/team/daniel.png'
import jeanclaude from '../../images/team/jeanclaude.png'
import jerome from '../../images/team/jerome.png'
import vince from '../../images/team/vince.png'
import TeamCard from './team-card';

const TeamGrid = () => {
    const [teamList, setTeamList] = useState(
        [
            {
                name: 'Steve Larkin',
                title: 'Chief Executive Officer',
                image: steve,
                linkedIn: 'https://www.linkedin.com/in/steve-j-larkin-7352381b/',
                quote: '"This is an inspirational, introductory quote from this team member."',
                bio: 'Steve J Larkin is a highly accomplished health care management executive with more than 20 years of industry experience. He has a proven ability to increase sales, market share, productivity and profitability. He is the Chief Executive Officer of Charter Health Holdings, LLC.  Steve joined Charter in 2018 after spending time with Pharos Capital as an Operating Partner. There, he provided insight and advised the firm on multiple post-acute and healthcare delivery investment opportunities consisting of home health/hospice, palliative care, ABA therapy, behavioral health, and physician practice/surgical roll-ups. Prior to partnering with Pharos Capital and joining Charter, he worked as a Division President at Compassus, a nationwide network of community-based hospice, home health and palliative care services. As Division President he oversaw the growth and development of 52 programs in 17 states. Steve Larkin holds a Master’s in Business Administration and Health Care Administration from Saint Louis University and Webster University respectively, as well as a Bachelor of Science from Iowa State University.',
                isClicked: false,
                animationTime: 700
            },
            {
                name: 'Sabina Del Rosario',
                title: 'Chief Operating Officer',
                image: sabina,
                linkedIn: null,
                quote: '"In every person there is a sun. Just let it shine." -Socrates',
                bio: 'Sabina is a savvy Operations Leader with an indelible reputation for delivering innovative business strategies and client-focused solutions that improve margins. She’s been recognized for transforming operations systems productively by building strong and solid partnerships with employees and community partners. Sabina wields broad experience building profitable start up healthcare divisions, growth business lines, and streamlined operations. She specializes in creating high performing and innovative culture that consistently achieves goals in competitive markets.',
                isClicked: false,
                animationTime: 900
            },
            {
                name: 'Vincent Castaldo',
                title: 'Chief Financial Officer',
                image: vince,
                linkedIn: 'https://www.linkedin.com/in/vincent-castaldo-29310761/',
                quote: '"From caring comes courage." -Lao Tzu',
                bio: 'Mr. Castaldo currently serves as the Company’s Chief Financial Officer, a position he has held since January 2019. He brings over 25 years of finance experience, 18 of which have been for health care companies. Prior to Charter Health, Mr. Castaldo spent over seven years as Chief Financial Officer for Home and Community Care Services at Providence St. Joseph Health. He also held prior finance, operations, and/or administrative roles at American Dental Partners, at the time a public company, and CPRR, LLC. Mr. Castaldo earned a Bachelor of Science in business administration & economics from St. Mary’s College of California, where he majored in accounting.',
                isClicked: false,
                animationTime: 1100
            },
            {
                name: 'Dr. Jean-Claude Hage',
                title: 'Chief Medical Officer',
                image: jeanclaude,
                linkedIn: null,
                quote: '"This is an inspirational, introductory quote from this team member."',
                bio: '',
                isClicked: false,
                animationTime: 1300
            },
            {
                name: 'Daniel Hodous',
                title: 'Director of Information Technology',
                image: daniel,
                linkedIn: 'https://www.linkedin.com/in/daniel-hodous-9245252a/',
                quote: '"This is an inspirational, introductory quote from this team member."',
                bio: '',
                isClicked: false,
                animationTime: 1500
            },
            {
                name: 'Jerome De Jesus',
                title: 'Director of Business Development',
                image: jerome,
                linkedIn: 'https://www.linkedin.com/in/jerome-de-jesus-394965171/',
                quote: '"This is an inspirational, introductory quote from this team member."',
                bio: '',
                isClicked: false,
                animationTime: 1700
            }
        ]
    )
    //Method that will be passed down as a prop to handle state management and expand cards / animate clickers
    //ID passed down as a prop to child button - which invokes this function and passes its ID when clicked
    const expandBio = (id) => {
        //create a new list from old list, but update whichever child was clicked on
        const newList = teamList.map((teamMember) => {
            if(teamMember.name === id) {
                const newMember = {
                    //state is updated, component rerenders, and new props are passed down to children
                    ...teamMember,
                    isClicked: !teamMember.isClicked
                }
                //must return so .map can enter it into new array list
                return newMember;
            };
            //must return so .map can enter it into new array list
            return teamMember;
        });
        //use setState method to update state
        setTeamList(newList);
    }


  return (
    <div className='TeamGrid'>
        <h2>Meet Our Team</h2>
        <div className='grid-container'>
            <div className='card-container'>
                {teamList.map(teamMember => {
                    return <TeamCard 
                        id={teamMember.name}
                        image={teamMember.image} 
                        name={teamMember.name} 
                        title={teamMember.title} 
                        linkedIn={teamMember.linkedIn}
                        quote={teamMember.quote}
                        bio={teamMember.bio}
                        isClicked={teamMember.isClicked} 
                        animationTime={teamMember.animationTime} 
                        expandBio={expandBio} 
                        key={teamMember.name}
                    />   
                })}
            </div>
        </div>
    </div>
  )
}

export default TeamGrid;