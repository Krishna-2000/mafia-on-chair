// roomSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Initial state for room
const initialState = {
  currentRoom: null,  // This will store the generated room information
  playerData: {
    name: '',
    role: '',
    isAlive: true,
    isHost: false,
  },
  
};

const roomSlice = createSlice({
  name: 'room',
  initialState,
  reducers: {
    createRoom: (state, action) => {
      state.currentRoom = action.payload;  // Store the generated room in the state
    },
    clearRoom: (state) => {
      state.currentRoom = null;  // Clear the room if needed
    },
    setPlayerData: (state, action) => {
      state.playerData = { ...state.playerData, ...action.payload }; // Update player data
    },
    clearPlayerData: (state) => {
      state.playerData = { name: '', role: '', isAlive: true, isHost: false }; // Reset player data
    },
    setNumOfMafias: (state, action) => {
      state.noOfMafias = action.payload;
    },
    
  },
});

// Export actions
export const { createRoom, clearRoom, setPlayerData, clearPlayerData,setNumOfMafias } = roomSlice.actions;

// Export reducer
export default roomSlice.reducer;