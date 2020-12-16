import React, {useState, useEffect} from "react";
import './quote-mosaic.css';
import MosaicCard from '../../components/testimonials/mosaic-card';
import ButtonPrimary from '../buttons/button-primary';


const QuoteMosaic = () => {

  //set state properties to implement Show More interface
  const [columnOne, setColumnOne] = useState([]);
  const [columnTwo, setColumnTwo] = useState([]);
  const [columnThree, setColumnThree] = useState([]);
  const [clicks, setClicks] = useState(1);
  const [isFinished, setIsFinished] = useState(false);
  const postsToShow = 3;

  useEffect(() => {
    const quoteList1 = [
      {
        quote: "I cannot put into words how much I appreciate the hospice team that attended to my husband. All were compassionate, caring and gentle at all times. The availability of everyone anytime needed was amazing. I am so grateful for the care and pain free transition for my husband's passing. Thank you to all from the bottom of my heart. And thank you for the continued support offered to me.",
        author: 'Joanne Pevan'
      },
      {
        quote: 'The team we had at the house was the best ever. We looked forward to their visits as they were so caring and treated my mother like a queen. They were especially helpful to me as her caregiver.',
        author: 'Catherine Peterson'
      },
      {
        quote: "Don’t know what I would have done without Cambridge/Charter Hospice. The service and support was amazing. Thank you so much.",
        author: 'Willeta Calloway'
      },
      {
        quote: 'Thank you so much for all that you do for my Aunt Consuelo Ortiz. I would especially like to thank Miraya, Monica and Elizabeth for all their kind help.',
        author: 'Lydia Gonzales'
      },
      {
        quote: 'OUTSTANDING!!! In all areas! Thank you.',
        author: 'Debra Purcell'
      },
      {
        quote: "I appreciate everything you've done for me and I have relayed this to my friends. I'm still having difficult days but in time it should be better. Thank you and your wonderful doctors & staff.",
        author: 'Anna Mae Watts'
      },
    ]
    const quoteList2 = [
      {
        quote: "I would rate Cambridge/Charter Hospice as an A+++. They were very sensitive to my family's needs. Always concerned for if any problems I could call and talk to someone any time day/night. The staff were gentle in their care and sensitive to all our needs. I have recommended hospice in general to all my friends 'when and if' they may have the need with their aging parents.",
        author: 'Sharon Vandoren'
      },
      {
        quote: 'Even though my mom was in hospice for only about 8 days, we were blessed by everything your team did for my mom and our family! Thank you for your loving and caring hearts! God bless you all! The family of Marilee Voelker',
        author: 'Catherine Williams'
      },
      {
        quote: "Cambridge/Charter is top notch. Very professional! Thank you for everything. I would recommend you to anyone.",
        author: 'David Dahlstrom' 
      },
      {
        quote: 'Everyone that came to the home deserves Kudos for a job well done.',
        author: 'Molly Porterfield'
      },
      {
        quote: 'This program was instrumental to my healing process. Bonnie is a considerate professional who comforts while explaining.',
        author: 'James Smith'
      },
      {
        quote: "Without all of you, I wouldn’t have made it through. All of you were angels from day one. I think back in the last year of my mom's life and I wonder how I did it well. But it was all of you that made me do it. Thank you 'all' from the bottom of my heart. God bless all of you. P.S. I still miss my mom, but I am doing good!",
        author: 'Iren Malone'
      },
    ]
    const quoteList3 = [
      {
        quote: "Hospice was my smile during a dark time. Even though my dad was the patient I honestly can't think of a visit by either, nurse, bath ladies or chaplain that I was not asked how I was doing. That meant a lot as my family on the outside didn't care.",
        author: 'Aleta Arbuthnott'
      },
      {
        quote: 'Cambridge/Charter Hospice was a godsent to our family. The caregivers, nurses and aides were excellent! They knew just the right time to e hands on and when to allow our family alone time.',
        author: 'Christine Magnus-Moore'
      },
      {
        quote: "I am so grateful for Charter Healthcare. From the very beginning, through all the tough times, you were always available, kind and caring, then at my wife's passing, help for me was immediate, then continued contact. Blessings on you all!",
        author: 'Harland Would'
      },
      {
        quote: 'Great Assets: Entire Medical staff that cared for my wife in her last days. Hospice Pastor that guided me through pre and post death. Referral to grief support program - so good I attented two consecutive 13 week sessions.',
        author: 'Stan Lenci'
      },
      {
        quote: 'I appreciate the support I have received from Charter. You have been a blessing to me and my family. I cannot thank you enough for your kindness. Much love to all of you.',
        author: 'Clarence Parson'
      },
      {
        quote: 'I will recommend Charter to all of my friends. It was truly a pleasant thoughtful experience which guided me through a very painful time.',
        author: 'Lucy Lewis'
      }
    ]

    const changeButtonText = () => {
      if( (postsToShow*clicks) >= quoteList1.length) {
        setIsFinished(true);
      }
    }

    const updateGrid = () => {
      let newColOne = [];
      let newColTwo = [];
      let newColThree = [];
      for(let i = 0; i < (postsToShow*clicks); i++) {
        if(quoteList1[i]) {
          newColOne.push(quoteList1[i]);
        }
        if(quoteList2[i]) {
          newColTwo.push(quoteList2[i]);
        }
        if(quoteList3[i]) {
          newColThree.push(quoteList3[i]);
        }
      }
      //Set each column state equal to the three lists of quotes
      setColumnOne(newColOne);
      setColumnTwo(newColTwo);
      setColumnThree(newColThree);
    }
    
    updateGrid();
    changeButtonText();
  }, [clicks])


  //onClick, first check if isFinished is true, if it is then reset everything
  //if it's false, add one to the click count which will print another set of quotes
  const handleClick = () => {
    if(isFinished) {
      //reset the click count
      setClicks(1);
      //reset the 'isFinished' state
      setIsFinished(false);
    } else {
      //update clicks
      setClicks(clicks + 1);
    }
  };

  return (
    <div className='QuoteMosaic'>
      <div className="quote-wrapper">
        <div className='col-1'>
          {
            columnOne.map(quote => {
              return <MosaicCard quote={quote.quote} author={quote.author} key={quote.quote} animationTime={500} />
            })
          }
        </div>
        <div className='col-2'>
          {
            columnTwo.map(quote => {
              return <MosaicCard quote={quote.quote} author={quote.author} key={quote.quote} animationTime={700} />
            })
          }
        </div>
        <div className='col-3'>
          {
            columnThree.map(quote => {
              return <MosaicCard quote={quote.quote} author={quote.author} key={quote.quote} animationTime={900} />
            })
          }
        </div>
      </div>
      <div className="button-wrapper" onClick={handleClick} onKeyDown={handleClick} role='button' tabIndex='0'>
        <ButtonPrimary content={`${isFinished ? 'Hide' : 'Show more'}`} />
      </div>
    </div>
  )
}

export default QuoteMosaic;