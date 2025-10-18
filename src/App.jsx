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
}

export default App;
