import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userId: '',
  difficulty: '',
  speed: 1,
};

const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSettings(state, action) {
      state.userId = action.payload.userId;
      state.difficulty = action.payload.difficulty;
      state.speed = action.payload.speed;
    },
    resetSettings: () => initialState,
  },
});

export const { setSettings, resetSettings } = settingsSlice.actions;
export default settingsSlice.reducer;
