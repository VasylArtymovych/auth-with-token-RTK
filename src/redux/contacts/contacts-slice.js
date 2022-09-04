import { createSlice } from '@reduxjs/toolkit';
import contactsOperations from './contactsOperations';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    filter: '',
    addLoader: false,
    loader: false,
    error: null,
  },
  reducers: {
    changeFilter(state, { payload }) {
      return { ...state, filter: payload };
    },
  },
  extraReducers: {
    [contactsOperations.getContacts.pending]: (state, _) => ({
      ...state,
      loader: true,
    }),
    [contactsOperations.getContacts.fulfilled](state, { payload }) {
      return { ...state, items: payload, loader: false };
    },
    [contactsOperations.getContacts.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),

    [contactsOperations.addContact.pending]: (state, _) => ({
      ...state,
      addLoader: true,
    }),
    [contactsOperations.addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [payload, ...state.items],
      addLoader: false,
    }),
    [contactsOperations.addContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      addLoader: false,
    }),

    [contactsOperations.deleteContact.pending]: (state, _) => ({
      ...state,
      loader: true,
    }),
    [contactsOperations.deleteContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(({ id }) => id !== payload),
      loader: false,
    }),
    [contactsOperations.deleteContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),

    [contactsOperations.editContact.pending]: (state, _) => ({
      ...state,
      loader: true,
    }),
    [contactsOperations.editContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.map(item => (item.id === payload.id ? payload : item)),
      loader: false,
    }),
    [contactsOperations.editContact.rejected]: (state, { payload }) => ({
      ...state,
      error: payload,
      loader: false,
    }),
  },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
