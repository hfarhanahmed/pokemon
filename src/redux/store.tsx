import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';
import { pokemonApi } from './apiServices/pokemonApi';

const queryReducer = combineReducers({
  [pokemonApi.reducerPath]: pokemonApi.reducer,
});

const persistConfig = {
  key: '@pokemonStore-1',
  storage,
};

const persistedReducer = persistReducer(persistConfig, queryReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      pokemonApi.middleware
    ),
});

export const persistor = persistStore(store);
