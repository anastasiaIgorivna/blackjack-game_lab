import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';          // ✅ Імпортуємо Provider з Redux
import store from './store/store';               // ✅ Імпортуємо наш Redux store
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>                       {/* ✅ Обгортаємо App у Provider */}
    <App />
  </Provider>
);
