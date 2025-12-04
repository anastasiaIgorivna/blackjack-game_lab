
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  difficulty: yup.string().required("Оберіть рівень складності"),
  speed: yup.number().min(1).max(10).required("Оберіть швидкість (1-10)"),
});

function GameSettings() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    localStorage.setItem('gameSettings', JSON.stringify(data));
    navigate('/game');
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Налаштування гри</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Рівень складності:</label>
          <select {...register("difficulty")} className="border p-2 rounded w-full">
            <option value="">Оберіть</option>
            <option value="easy">Легкий</option>
            <option value="medium">Середній</option>
            <option value="hard">Складний</option>
          </select>
          {errors.difficulty && <p className="text-red-500">{errors.difficulty.message}</p>}
        </div>

        <div>
          <label className="block mb-1 font-medium">Швидкість (1-10):</label>
          <input
            type="number"
            {...register("speed")}
            className="border p-2 rounded w-full"
            min={1}
            max={10}
          />
          {errors.speed && <p className="text-red-500">{errors.speed.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Зберегти і почати гру
        </button>
      </form>
    </div>
  );
}

export default GameSettings;


