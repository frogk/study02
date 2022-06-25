import React from 'react';
import { useState ,useEffect } from 'react';
import Card from './Card.jsx'
import '../css/Card.css'

const CardList = () => {
  const [cardData, setCardData] = useState([]);
  const dataUrl = './data/cardData.json'
  useEffect(()=>{
    (async () => {
      const response = await fetch(dataUrl);
      const json = await response.json();
      setCardData(json);
    })();
},[])
  return (
    <div className='card_area'>
      <h3>CardList</h3>
      <ul className='card_wrap'>
        {
          cardData.map((card)=> <Card key={card.id} card={card} />)
        }
      </ul>      
    </div>
  );
};

export default CardList;