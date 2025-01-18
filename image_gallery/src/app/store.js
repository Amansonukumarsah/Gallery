import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import { ImageApi, ImageApiReducer } from '../service/HandleAddImageApi';
import { HandleLoginUserApi, HandleLoginUserApiReducer } from '../service/HandleLoginUserApi';
import { HandleUserApi, HandleUserApiReducer } from '../service/HandleRegusterUserApi';
import { notification, notificationApiReducer } from '../service/Notification';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    [ImageApi.reducerPath]: ImageApiReducer,
    [HandleUserApi.reducerPath]: HandleUserApiReducer,
    [HandleLoginUserApi.reducerPath]: HandleLoginUserApiReducer,
    [notification.reducerPath]: notificationApiReducer,


    // Add other reducers here as needed
    auth: authReducer,
    // search:searchReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      ImageApi.middleware,
      HandleUserApi.middleware,
      HandleLoginUserApi.middleware,
      notification.middleware,
    ),

});

setupListeners(store.dispatch);

export default store;
