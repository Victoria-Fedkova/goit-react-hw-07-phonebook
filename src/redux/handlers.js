import { addContact, deleteContact, fetchContacts } from './operations';

const { isAnyOf } = require('@reduxjs/toolkit');

export const handlePending = state => {
  state.isLoading = true;
};
export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};
export const handleFetch = (state, action) => {
  state.items = action.payload;
};
export const handleAddItem = (state, action) => {
  state.items.push(action.payload);
};
export const handleDelItem = (state, action) => {
  const index = state.items.findIndex(task => task.id === action.payload);
  state.items.splice(index, 1);
};

const arrThunks = [addContact, deleteContact, fetchContacts];
export const createStatus = type => isAnyOf(...arrThunks.map(el => el[type]));
