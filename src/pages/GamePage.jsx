import React from 'react';
import PlayerHand from '../components/PlayerHand';
import DealerHand from '../components/DealerHand';

function GamePage() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Гра триває</h2>
      <DealerHand />
      <PlayerHand />
    </div>
  );
}

export default GamePage;
