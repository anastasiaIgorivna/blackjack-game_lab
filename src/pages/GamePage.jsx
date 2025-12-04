import PlayerHand from '../components/PlayerHand';
import DealerHand from '../components/DealerHand';
import { useBlackjack } from '../hooks/useBlackjack';
import { useNavigate, useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import GameOverModal from '../components/GameOverModal';

function GamePage() {
  const navigate = useNavigate();
  const { userId } = useParams();
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
    }
  }, [result]);

  const restartGame = () => {
    window.location.reload();
  };

  const nextRound = () => {
    setShowModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 font-sans p-4">
      <button
        className="mb-4 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
        onClick={() => navigate('/settings')}
      >
        Налаштування
      </button>

      <h2 className="text-3xl font-bold mb-4 text-center">
        Гра Блекджек для {userId}
      </h2>

      {settings && (
        <div className="mb-4 bg-white shadow p-4 rounded">
          <p>Рівень складності: <strong>{settings.difficulty}</strong></p>
          <p>Швидкість: <strong>{settings.speed}</strong></p>
        </div>
      )}

      <div className="mb-4 bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-1">Карти дилера</h3>
        <p>{dealerCards.join(', ')} (Очки: {getTotal(dealerCards)})</p>
      </div>

      <div className="mb-4 bg-white shadow p-4 rounded">
        <h3 className="text-xl font-semibold mb-1">Карти гравця</h3>
        <p>{playerCards.join(', ')} (Очки: {getTotal(playerCards)})</p>
      </div>

      {result ? (
        <h3 className="text-lg font-bold text-center">Результат: {result}</h3>
      ) : (
        isPlayerTurn && (
          <div className="mt-4 flex justify-center gap-4">
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={hit}
            >
              Взяти карту
            </button>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={stand}
            >
              Зупинитися
            </button>
          </div>
        )
      )}

      {showModal && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.4)', zIndex: 9999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div className="bg-white p-6 rounded shadow-md w-96 border-2 border-blue-400 text-center">
            <h2 className="text-2xl font-bold mb-4">Гра завершена</h2>
            <p className="text-lg mb-4">Результат: <strong>{result}</strong></p>
            <div className="flex justify-center gap-4">
              <button onClick={restartGame} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Почати заново</button>
              <button onClick={nextRound} className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">Наступний тур</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GamePage;





