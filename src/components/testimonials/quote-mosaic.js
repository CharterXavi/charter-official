import React from "react";
import './quote-mosaic.css';
import MosaicCard from '../../components/testimonials/mosaic-card';

const QuoteMosaic = () => {

  const quoteList = [
    {
      quote: 'Charter is the best ever!',
      author: 'Jane Doe'
    },
    {
      quote: 'Charter helped me recover from some seriously crazy stuff. I am so thankful for my experience there. Would recommend!',
      author: 'Janey Doey'
    },
    {
      quote: 'Charter is the best ever!',
      author: 'Jane Doe'
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac sed non senectus tortor ut. Suspendisse pellentesque sagittis, ullamcorper et in. Et, amet, dictum dolor sagittis, sem consectetur sapien, nunc. Euismod quam dui blandit elit.',
      author: 'Jane Doe'
    },
    {
      quote: 'Charter is the best ever!',
      author: 'Jane Doe'
    },
    {
      quote: 'Charter helped me and they are awesome! Here’s a bunch of words that would make up a longer quote to simulate some variance in quote sizes on the page.',
      author: 'Jane Doe'
    },
    {
      quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit ac sed non senectus tortor ut. Suspendisse pellentesque sagittis, ullamcorper et in.',
      author: 'Jane Doe'
    },
    {
      quote: 'Charter is the best ever!',
      author: 'Jane Doe'
    },
    {
      quote: 'Charter helped me and they are awesome! Here’s a bunch of words that would make up a longer quote to simulate some variance in quote sizes on the page.',
      author: 'Jane Doe'
    }
  ]

  const colOne = [];
  const colTwo = [];
  const colThree = [];

  for(let i = 0; i < 3; i++) {
    colOne.push(quoteList[i]);
  }
  for(let i = 3; i < 6; i++) {
    colTwo.push(quoteList[i]);
  }
  for(let i = 6; i < 9; i++) {
    colThree.push(quoteList[i]);
  }

  return (
    <div className='QuoteMosaic'>
      <div className='col-1'>
        {
          colOne.map(quote => {
            return <MosaicCard quote={quote.quote} author={quote.author} key={quote.quote} />
          })
        }
      </div>
      <div className='col-2'>
        {
          colTwo.map(quote => {
            return <MosaicCard quote={quote.quote} author={quote.author} key={quote.quote} />
          })
        }
      </div>
      <div className='col-3'>
        {
          colThree.map(quote => {
            return <MosaicCard quote={quote.quote} author={quote.author} key={quote.quote} />
          })
        }
      </div>
    </div>
  )
}

export default QuoteMosaic;