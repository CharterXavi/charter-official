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
                isClicked: false,
                animationTime: 700
            },
            {
                name: 'Sabina Del Rosario',
                title: 'Chief Operating Officer',
                image: sabina,
                linkedIn: null,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
                animationTime: 900
            },
            {
                name: 'Vincent Castaldo',
                title: 'Chief Financial Officer',
                image: vince,
                linkedIn: 'https://www.linkedin.com/in/vincent-castaldo-29310761/',
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
                animationTime: 1100
            },
            {
                name: 'Dr. Jean-Claude Hage',
                title: 'Chief Medical Officer',
                image: jeanclaude,
                linkedIn: null,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
                animationTime: 1300
            },
            {
                name: 'Daniel Hodous',
                title: 'Director of Information Technology',
                image: daniel,
                linkedIn: 'https://www.linkedin.com/in/daniel-hodous-9245252a/',
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
                animationTime: 1500
            },
            {
                name: 'Jerome De Jesus',
                title: 'Director of Business Development',
                image: jerome,
                linkedIn: 'https://www.linkedin.com/in/jerome-de-jesus-394965171/',
                quote: '"This is an inspirational, introductory quote from this team member."',
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