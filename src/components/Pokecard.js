import React from 'react';

const styles = {
  divPokecard: {
    width: 170,
    height: 220,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    textAlign: 'center',
    margin: 10,
    
  },
  name: {
    color: 'blue',
    fontSize: 16,
    paddingTop: 10,
  },
  img: {
    position: 'relative',
    // width: 70
  },
  p: {
    fontSize: 11,
  },
};

export const Pokecard = (props) => {
  const { name, img, type, exp } = props;

  return (
    <>
      <section style={styles.divPokecard}>
        <h1 style={styles.name}>{name}</h1>
        <img style={styles.img} src={img} />
        <p style={styles.p}>Type: {type}</p>
        <p style={styles.p}>Exp: {exp}</p>
      </section>
    </>
  );
};
