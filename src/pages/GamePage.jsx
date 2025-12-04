import React from 'react';
import PlayerHand from '../components/PlayerHand';
import DealerHand from '../components/DealerHand';
import { useBlackjack } from '../hooks/useBlackjack';

function GamePage() {
  const {
    playerCards,
    dealerCards,
    isPlayerTurn,
    result,
    hit,
    stand,
    getTotal,
  } = useBlackjack();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold mb-4">Гра Блекджек</h2>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Карти дилера</h3>
        <p>{dealerCards.join(', ')} (Очки: {getTotal(dealerCards)})</p>
      </div>

      <div className="mb-4">
        <h3 className="text-xl font-semibold">Карти гравця</h3>
        <p>{playerCards.join(', ')} (Очки: {getTotal(playerCards)})</p>
      </div>

      {result ? (
        <h3 className="text-lg font-bold">Результат: {result}</h3>
      ) : (
        isPlayerTurn && (
          <div className="mt-4">
            <button
              className="px-4 py-2 mr-2 bg-green-500 text-white rounded"
              onClick={hit}
            >
              Взяти карту
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded"
              onClick={stand}
            >
              Зупинитися
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default GamePage;
