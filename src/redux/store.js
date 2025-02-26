import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './reducers/registrationReducer';

const store = configureStore({
  reducer: {
    registration: registrationReducer
  }
});

export default store;