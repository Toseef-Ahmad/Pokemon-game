import React from 'react';
import { Pokecard } from './Pokecard';

const imgSrc =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png';

const styles = {
  devPodedex: {
    display: 'flex',
    backgroundColor: 'lightblue',
    borderRadius: 10,
    flexFlow: 'wrap',
    alignContent: 'space-between',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%'

  },
  isWinner: {
    winner: {
      textAlign: 'center',
      color: 'green'
    },
    looser: {
      textAlign: 'center',
      color: 'red'
    }
  }
};

export const Pokedex = (props) => {
  const pokedexSrc = props.arr;
  const count = 0;
  return (
    <>
      <h1 style={{ textAlign: 'center', color: 'lightgray' }}>Pokedex</h1>
      <h1 style={{textAlign: 'center'}}>{props.isWinner}</h1>
      <p style={{textAlign: 'center'}}>{props.totalExp}</p>
      <div style={styles.devPodedex}>
        {pokedexSrc.map((pokedex) => (
          <Pokecard
            name={pokedex.name}
            type={pokedex.type}
            img={imgSrc.replace('${id}', pokedex.id)}
            exp={pokedex.exp}
          />
        ))}
      </div>
    </>
  );
};

Pokedex.defaultProps = {
  isWinner: 'Looser Hand',
  totalExp: 0
}
