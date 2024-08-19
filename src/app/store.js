import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { ImageApi, ImageApiReducer } from '../service/HandleAddImageApi';

const store = configureStore({
  reducer: {
    [ImageApi.reducerPath]: ImageApiReducer,
    // Add other reducers here as needed
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ImageApi.middleware),

});

setupListeners(store.dispatch);

export default store;
