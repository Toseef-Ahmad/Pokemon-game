import React from 'react';
import { checkObjExest } from '../components/HelperFunctions';
import { Pokegame } from '.././components/Pokegame';

export const PokegameContainer = (props) => {
  let pokedexOne = props.arr;
  const pokedexTwo = [];
  let randomCard = {};
  let randomIndex = null;

  const genrateRandomArrayOfCards = () => {
    randomIndex = Math.floor(Math.random() * pokedexOne.length);
    randomCard = pokedexOne[randomIndex];

    if (!checkObjExest(randomCard, pokedexTwo)) {
      pokedexTwo.push(randomCard);
      pokedexOne.splice(randomIndex, 1);
    }
  };

  while (pokedexTwo.length !== 4) {
    genrateRandomArrayOfCards();
  }

  const calculateExp = (pokedexArr) => {
    let exp = 0;
    pokedexArr.forEach((item) => {
      exp += item.base_experience;
    });
    return exp;
  };


  return (
    <>
      {
        <Pokegame
          pokedexOne={pokedexOne}
          pokedexTwo={pokedexTwo}
          pokedexOneExp={calculateExp(pokedexOne)}
          pokedexTwoExp={calculateExp(pokedexTwo)}
        />
      }
    </>
  );
};
