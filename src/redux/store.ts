import { configureStore } from '@reduxjs/toolkit';
import filmReducer from './slices/film/filmSlice';
import detailsReducer from './slices/details/detailsSlice';
import usersReducer from './slices/users/usersSlice';

const store = configureStore({
  reducer: {
    films: filmReducer,
    details:detailsReducer,
    users: usersReducer 
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;