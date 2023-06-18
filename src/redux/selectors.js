export const getContacts = state => state.contacts;

export const selectFilter = state => state.filter.filter;

export const selectContacts = state => state.contacts.items;

export const selectIsLoading = state => state.contacts.isLoading;

export const selectError = state => state.contacts.error;

export const selectVisibleTasks = state => {
  const contacts = selectContacts(state);
  const filter = selectFilter(state);
  if (filter !== '') {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  } else {
    return contacts;
  }
};
