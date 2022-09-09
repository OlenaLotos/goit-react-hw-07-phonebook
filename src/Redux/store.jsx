import { configureStore } from '@reduxjs/toolkit';
import { contactsApi } from './ContactsApi';
import { setupListeners } from '@reduxjs/toolkit/query';
import contactsSlice from './contactsSlice';

const store = configureStore({
  reducer: {
    filter: contactsSlice.reducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
});

setupListeners(store.dispatch);

export default store;
