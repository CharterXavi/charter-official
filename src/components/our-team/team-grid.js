import React, {useState} from 'react'
import './team-grid.css'
import team1 from '../../images/team/team1.png'
import team2 from '../../images/team/team2.png'
import team3 from '../../images/team/team3.png'
import team4 from '../../images/team/team4.png'
import team5 from '../../images/team/team5.png'
import team6 from '../../images/team/team6.png'
import TeamCard from './team-card';

const TeamGrid = () => {
    const [teamList, setTeamList] = useState(
        [
            {
                name: 'Johnny Appleseed',
                title: 'Job Title',
                image: team1,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
            },
            {
                name: 'Jane Appleseed',
                title: 'Job Title',
                image: team2,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
            },
            {
                name: 'John Smith',
                title: 'Job Title',
                image: team3,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
            },
            {
                name: 'Jill Jackson',
                title: 'Job Title',
                image: team4,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
            },
            {
                name: 'Jimmy John',
                title: 'Job Title',
                image: team5,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
            },
            {
                name: 'Jessica Smith',
                title: 'Job Title',
                image: team6,
                quote: '"This is an inspirational, introductory quote from this team member."',
                isClicked: false,
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
                        quote={teamMember.quote} 
                        isClicked={teamMember.isClicked} 
                        expandBio={expandBio} 
                    />   
                })}
            </div>
        </div>
    </div>
  )
}

export default TeamGrid;