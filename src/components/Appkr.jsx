import React from 'react'
import Formulariokr from './formulariokr'
import { useState } from 'react'
import Imagenkr from './Imagenkr'
import Button from "@mui/material/Button";
import Ganokr from './Ganokr';

var Card = {};
var Gano = false;
const Appkr = () => {
  const [user, setUser] = useState({});
  const [cards, setCards] = useState({});
  const [card, setCard] = useState({});

  const getCard = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${user.game}/draw/?count=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data.cards[0])
    setCard(data.cards[0])
    Card = data.cards[0];
    validar();
  };
  const validar = ()=>{
    if(Card.value===cards.value)
    {
      console.log(Card.value)
      console.log(Card.suit)
      console.log(cards.suit)
      if(Card.suit==='CLUBS' && cards.suit==='DIAMONDS' || Card.suit==='DIAMONDS' && cards.suit==='CLUBS')
      {
        console.log('GANO')
        Gano = true
      }
      else if(Card.suit==='HEARTS' && cards.suit==='SPADES' || Card.suit==='SPADES' && cards.suit==='HEARTS')
      {
        console.log('GANO')
        Gano = true
      }
    }
  }
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
      <Imagenkr imagen={card.image}></Imagenkr>
      {Gano?<p>Gano</p>:null}
    </div>
  )
}

export default Appkr