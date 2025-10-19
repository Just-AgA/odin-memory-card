import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';
import shuffle from './utils/shuffle';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  // Fetch Pokemon on mount
  useEffect(() => {
    const fetchPokemon = async () => {
      const ids = Array.from({ length: 12 }, (_, i) => i + 1); // Get first 12 Pokémon
      const data = await Promise.all(
        ids.map(async (id) => {
          const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
          const json = await res.json();
          return {
            id: json.id,
            name: json.name,
            image: json.sprites.front_default,
          };
        })
      );
      setCards(shuffle(data));
    };

    fetchPokemon();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.includes(id)) {
      // Game over
      setScore(0);
      setClickedCards([]);
    } else {
      const newScore = score + 1;
      setScore(newScore);
      setClickedCards([...clickedCards, id]);

      if (newScore > bestScore) setBestScore(newScore);

      // Shuffle cards after successful click
      setCards(shuffle([...cards]));
    }
  };

  return (
    <div className="app">
      <h1>Pokémon Memory Game</h1>
      <Scoreboard score={score} bestScore={bestScore} />
      <CardGrid cards={cards} onCardClick={handleCardClick} />
    </div>
  );
}

export default App;
