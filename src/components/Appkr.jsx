import React from 'react'
import Formulariokr from './formulariokr'
import { useState } from 'react'
import Imagenkr from './Imagenkr'
import Button from "@mui/material/Button";

var Card = {};
const Appkr = () => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState({});

  const getCard = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${user.game}/draw/?count=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.cards[0])
    if(data.cards[0].value===cards.value)
    {
      Card = data.cards[0];
      console.log(Card.value)
      if(Card.suit==='CLUBS' && cards.suit==='DIAMONDS')
      {
        console.log('GANO')
      }
      else if(Card.suit==='HEARTS' && cards.suit==='SPADES')
      {
        console.log('GANO')
      }
    }
    
  };
  return (
    <div>
      <Formulariokr 
        setUser={setUser}
        setCards={setCards}
      ></Formulariokr>

      <Imagenkr imagen={cards.image}></Imagenkr>
      <Button variant="contained" onClick={getCard}>
        Carta
      </Button>
    </div>
  )
}

export default Appkr