import { createSlice } from '@reduxjs/toolkit';
import { contactsAPI } from 'redux/contacts';
// import contactsOperations from './contactsOperations';

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
  extraReducers: builder => {
    //getContacts
    builder.addMatcher(
      contactsAPI.endpoints.getContacts.matchPending,
      state => ({
        ...state,
        loader: true,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.getContacts.matchFulfilled,
      (state, { payload }) => ({
        ...state,
        items: payload,
        loader: false,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.getContacts.matchRejected,
      (state, { payload }) => ({
        ...state,
        error: payload,
        loader: false,
      })
    );
    //addContacts
    builder.addMatcher(
      contactsAPI.endpoints.addContact.matchPending,
      state => ({
        ...state,
        addLoader: true,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.addContact.matchFulfilled,
      (state, { payload }) => ({
        ...state,
        items: [payload, ...state.items],
        addLoader: false,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.addContact.matchRejected,
      (state, { payload }) => ({
        ...state,
        error: payload,
        addLoader: false,
      })
    );
    //deleteContact
    builder.addMatcher(
      contactsAPI.endpoints.deleteContact.matchPending,
      state => ({
        ...state,
        loader: true,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.deleteContact.matchFulfilled,
      state => ({
        ...state,
        loader: false,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.deleteContact.matchRejected,
      (state, { payload }) => ({
        ...state,
        error: payload,
        loader: false,
      })
    );
    //updateContact
    builder.addMatcher(
      contactsAPI.endpoints.updateContact.matchPending,
      state => ({
        ...state,
        loader: true,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.updateContact.matchFulfilled,
      state => ({
        ...state,
        loader: false,
      })
    );
    builder.addMatcher(
      contactsAPI.endpoints.updateContact.matchRejected,
      (state, { payload }) => ({
        ...state,
        error: payload,
        loader: false,
      })
    );
  },

  // {

  //   [contactsOperations.editContact.pending]: (state, _) => ({
  //     ...state,
  //     loader: true,
  //   }),
  //   [contactsOperations.editContact.fulfilled]: (state, { payload }) => ({
  //     ...state,
  //     items: state.items.map(item => (item.id === payload.id ? payload : item)),
  //     loader: false,
  //   }),
  //   [contactsOperations.editContact.rejected]: (state, { payload }) => ({
  //     ...state,
  //     error: payload,
  //     loader: false,
  //   }),
  // },
});

export const { changeFilter } = contactsSlice.actions;
export default contactsSlice.reducer;
