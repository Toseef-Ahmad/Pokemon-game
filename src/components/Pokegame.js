import React from 'react';
import { checkObjExest } from './HelperFunctions';
import { Pokedex } from './Pokedex';

export const Pokegame = (props) => {
  const pokedexOne = props.pokedexOne;
  const pokedexTwo = props.pokedexTwo;
  const pokedexOneExp = props.pokedexOneExp;
  const pokedexTwoExp = props.pokedexTwoExp;

  if (pokedexOneExp > pokedexTwoExp) {
    return (
      <>
        <Pokedex arr={pokedexOne} totalExp={pokedexOneExp} isWinner="Winner" />
        <Pokedex arr={pokedexTwo} totalExp={pokedexTwoExp} />
      </>
    );
  } else {
    return (
      <>
        <Pokedex arr={pokedexOne} totalExp={pokedexOneExp} />
        <Pokedex arr={pokedexTwo} totalExp={pokedexTwoExp} isWinner="Winner" />
      </>
    );
  }
};
