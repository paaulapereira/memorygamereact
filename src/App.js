import { useEffect, useState } from 'react';

function App() {
  const [openCard, setOpenCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const pokemons = [
    {
      id: 1,
      name: 'balbasaur',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    },
    {
      id: 8,
      name: 'wartotle',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    },
    {
      id: 9,
      name: 'blastoise',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    },
    {
      id: 6,
      name: 'charizard',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    },
  ];
  const pairOfPokemons = [...pokemons, ...pokemons];
  //let make pair of each pokempons

  //handle flip
  const handleClick = (index) => {
    setOpenCard((opened) => [...opened, index]);
  };

  //open only that card which was matched
  useEffect(() => {
    const firstMatch = pairOfPokemons[openCard[0]];
    const secondMatch = pairOfPokemons[openCard[1]];

    if (secondMatch && firstMatch.id === secondMatch.id) {
      setMatched([...matched, firstMatch.id]);
    }

    if (openCard.length === 2) setTimeout(() => setOpenCard([]), 1000);
  }, [openCard]);

  return (
    <div className="app">
      <div className="cards">
        {pairOfPokemons.map((pokemon, index) => {
          let flipCard;
          flipCard = false;

          if (openCard.includes(index)) flipCard = true;

          if (matched.includes(pokemon.id)) flipCard = true;

          return (
            <div
              className={`pokemon-card ${flipCard ? 'flipped' : ''}`}
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="inner">
                <div className="front">
                  <img src={pokemon.img} alt="pokemon" width="100" />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
