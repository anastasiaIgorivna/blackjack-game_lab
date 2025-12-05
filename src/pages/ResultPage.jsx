import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function ResultPage() {
  const results = useSelector((state) => state.results);
  const navigate = useNavigate();

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Таблиця результатів</h2>
      {results.length === 0 ? (
        <p>Ще немає результатів гри.</p>
      ) : (
        <table className="w-full border">
          <thead>
            <tr>
              <th className="border px-2 py-1">Користувач</th>
              <th className="border px-2 py-1">Результат</th>
            </tr>
          </thead>
          <tbody>
            {results.map((res, index) => (
              <tr key={index}>
                <td className="border px-2 py-1">{res.userId}</td>
                <td className="border px-2 py-1">{res.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => navigate('/')}
      >
        На головну
      </button>
    </div>
  );
}

export default ResultPage;

