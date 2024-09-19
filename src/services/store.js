import { configureStore } from '@reduxjs/toolkit';
import roomReducer from './roomSlice';  // Import the reducer
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import sharedSlice from './sharedSlice';

const persistConfig = {
  key: 'root',
  storage,
};

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, roomReducer);
const persistedReducerSharedData = persistReducer(persistConfig, sharedSlice);

export const store = configureStore({
  reducer: {
    room: persistedReducer,  // Add the room reducer to the store
    shared: persistedReducerSharedData,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore the actions and states related to redux-persist
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/FLUSH', 'persist/PAUSE', 'persist/REGISTER'],
        ignoredPaths: ['persist'],
      },
    }),
});
export const persistor = persistStore(store);
export default store;