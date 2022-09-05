import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { authReducer } from 'redux/auth';
import { contactsReducer } from 'redux/contacts';
import { authAPI } from 'redux/auth';
import { contactsAPI } from 'redux/contacts';
const persistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const store = configureStore({
  reducer: {
    auth: persistReducer(persistConfig, authReducer),
    contacts: contactsReducer,
    [authAPI.reducerPath]: authAPI.reducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    authAPI.middleware,
    contactsAPI.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export { store, persistor };
