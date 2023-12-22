// sotre/index.js
import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import albumReducer from "./albumSlice";

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, albumReducer);

export const store = configureStore({
  reducer: {
    album: persistedReducer,
  },
});

export const persistor = persistStore(store);
