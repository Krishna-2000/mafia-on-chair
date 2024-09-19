import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sharedData: {},
  mafiaList: [],
  doctorList: [],
  policeList: []
};

const sharedSlice = createSlice({
  name: 'shared',
  initialState,
  reducers: {
    updateSharedData: (state, action) => {
      state.sharedData = action.payload;
    },
    setMafiaList: (state, action) =>{
        state.mafiaList = action.payload;
      },
      setDoctorList: (state,action) => {
        state.doctorList = action.payload;
      },
      setPoliceList: (state,action) => {
        state.policeList = action.payload;
      },
      resetGameState: (state) => {
        state.mafiaList = [];
        state.doctorList = [];
        state.policeList = [];
      },
  },
});

export const { updateSharedData,setDoctorList,setMafiaList,setPoliceList, resetGameState } = sharedSlice.actions;
export default sharedSlice.reducer;