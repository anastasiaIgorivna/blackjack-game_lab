import React from 'react';
import { useNavigate } from 'react-router-dom';

function StartPage() {
  const navigate = useNavigate();

  const startGame = () => {
    const settings = JSON.parse(localStorage.getItem('gameSettings'));
    if (settings?.userId) {
      navigate(`/game/${settings.userId}`);
    } else {
      alert('Будь ласка, введіть налаштування користувача перед початком гри.');
    }
  };

  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">Ласкаво просимо до Блекджека</h1>
      <button
        onClick={startGame}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        Почати гру
      </button>
      <br />
      <button
        className="mt-4 px-6 py-2 bg-gray-500 text-white rounded"
        onClick={() => navigate('/settings')}
      >
        Налаштування гри
      </button>
    </div>
  );
}

export default StartPage;

