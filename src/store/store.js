import { configureStore } from '@reduxjs/toolkit';
import settingsReducer from './settingsSlice';
import resultsReducer from './resultsSlice';

const store = configureStore({
  reducer: {
    settings: settingsReducer,
    results: resultsReducer,
  },
});

export default store;

