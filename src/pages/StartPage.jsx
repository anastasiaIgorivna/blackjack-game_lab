import React from 'react';
import { useNavigate } from 'react-router-dom';


function StartPage() {
  const navigate = useNavigate();
  return (
    <div className="p-4 text-center">
      <h1 className="text-3xl font-bold">Ласкаво просимо до Блекджека</h1>
      <button className="mt-4 px-6 py-2 bg-blue-500 text-white rounded">Почати гру</button>
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
