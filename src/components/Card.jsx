import React from 'react';

function Card({ card, onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <img src={card.image} alt={card.name} />
      <p>{card.name.charAt(0).toUpperCase() + card.name.slice(1)}</p>
    </div>
  );
}

export default Card;
