import React, { useEffect, useState } from 'react';
import Scoreboard from './components/Scoreboard';
import CardGrid from './components/CardGrid';
import shuffle from './utils/shuffle';

function App() {
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
}

export default App;
