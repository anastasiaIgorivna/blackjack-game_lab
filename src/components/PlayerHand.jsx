import React from "react";

export default function PlayerHand({ cards }) {
  return (
    <div>
      <h3>Карти гравця</h3>

      <div>
        {cards && cards.length > 0 ? (
          cards.map((c, i) => <span key={i}>{c} </span>)
        ) : (
          <p>Немає карт</p>
        )}
      </div>
    </div>
  );
}