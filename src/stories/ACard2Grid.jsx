import React from 'react'
import ACard2 from './ACard2'
import './ACard2Grid.css'

const ACard2Grid = ( { cards }) => {
    return (
        <div className="ACard2Grid">
          {cards.map((card, index) => (
            <ACard2 key={index} firstName={card.firstName} lastName={card.lastName} buttonText={card.buttonText} />
          ))}
        </div>
      );
    };

export default ACard2Grid