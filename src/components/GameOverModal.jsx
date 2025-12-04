import React from 'react';
import ReactDOM from 'react-dom';

const GameOverModal = ({ result, onRestart, onNext }) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div className="bg-white p-6 rounded shadow-lg text-center max-w-sm w-full">
        <h2 className="text-xl font-bold mb-4">Гра завершена</h2>
        <p className="mb-4">Результат: <strong>{result}</strong></p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={onRestart}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Почати заново
          </button>
          <button
            onClick={onNext}
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
          >
            Наступний тур
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default GameOverModal;





