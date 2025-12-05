import { createSlice } from '@reduxjs/toolkit';

const savedResults = JSON.parse(localStorage.getItem('results')) || [];

const resultsSlice = createSlice({
  name: 'results',
  initialState: savedResults,
  reducers: {
    addResult: (state, action) => {
      state.push(action.payload);
      localStorage.setItem('results', JSON.stringify(state));
    },
    clearResults: (state) => {
      state.length = 0;
      localStorage.removeItem('results');
    },
  },
});

export const { addResult, clearResults } = resultsSlice.actions;
export default resultsSlice.reducer;

