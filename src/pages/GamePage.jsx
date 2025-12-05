import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addResult } from '../store/resultsSlice';

import PlayerHand from '../components/PlayerHand';
import DealerHand from '../components/DealerHand';
import GameOverModal from '../components/GameOverModal';
import { useBlackjack } from '../hooks/useBlackjack';

function GamePage() {
  const { userId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [settings, setSettings] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const {
    playerCards,
    dealerCards,
    isPlayerTurn,
    result,
    hit,
    stand,
    getTotal,
  } = useBlackjack();

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('gameSettings'));
    if (stored) {
      setSettings(stored);
    }
  }, []);

  useEffect(() => {
    if (result) {
      setShowModal(true);
      dispatch(addResult({ userId, result }));
    }
  }, [result, dispatch, userId]);

  const restartGame = () => {
    window.location.reload();
  };

  const nextRound = () => {
    setShowModal(false);
  };

  return (
    <div className="p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-400 text-white rounded"
        onClick={() => navigate('/settings')}
      >
        Налаштування
      </button>
      <h2 className="text-2xl font-semibold mb-4">Гра Блекджек</h2>

      {settings && (
        <div className="mb-4">
          <p>Гравець: {userId}</p>
          <p>Рівень складності: {settings.difficulty}</p>
          <p>Швидкість: {settings.speed}</p>
        </div>
      )}

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

      {showModal && (
        <GameOverModal result={result} onRestart={restartGame} onNext={nextRound} />
      )}
    </div>
  );
}

export default GamePage;







