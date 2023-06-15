import React from 'react'
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import { useEffect } from 'react';

var Game = '';

const Formulariokr = ({ setUser,setCards}) => {

  const handlerUser = () => {
    getInitialCards();
    const userInicial = {
      id:1,
      name: document.getElementById("1").value,
      game: Game
    };
    setUser(userInicial);
  }

  const getInitialCards = async () => {
    const url = `https://deckofcardsapi.com/api/deck/${Game}/draw/?count=1`;
    const response = await fetch(url);
    const data = await response.json();
    setCards(data.cards[0]);
  };

  useEffect(() => {
		const query = async () => {
			const url = `https://deckofcardsapi.com/api/deck/new/shuffle/`;
      const response = await fetch(url);
      const data = await response.json();
      Game = data.deck_id;
		};
		query();
	},[]);

  return (
    <div>
      <TextField
        defaultValue='Name'
        id='1'
        label={`Name`}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
      <Button variant="contained" onClick={handlerUser}>
        Empezar
      </Button>
    </div>
  )
}

export default Formulariokr