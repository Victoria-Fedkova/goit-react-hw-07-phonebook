import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './operations';
import {
  createStatus,
  handleAddItem,
  handleDelItem,
  handleFetch,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './handlers';

const STATUSES = {
  PENDING: 'pending',
  REJECTED: 'rejected',
  FULFILLED: 'fulfilled',
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    const { PENDING, REJECTED, FULFILLED } = STATUSES;
    builder
      .addCase(fetchContacts.fulfilled, handleFetch)
      .addCase(addContact.fulfilled, handleAddItem)
      .addCase(deleteContact.fulfilled, handleDelItem)
      .addMatcher(createStatus(PENDING), handlePending)
      .addMatcher(createStatus(REJECTED), handleRejected)
      .addMatcher(createStatus(FULFILLED), handleFulfilled);
  },
});

export const contactsReducer = contactsSlice.reducer;
