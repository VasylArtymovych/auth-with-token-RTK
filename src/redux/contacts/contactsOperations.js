import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const getContacts = createAsyncThunk('contacts/fetchContacts', async () => {
  try {
    const { data } = await axios.get('/contacts');
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const addContact = createAsyncThunk('contacts/add', async contact => {
  try {
    const { data } = await axios.post('/contacts', contact);
    return data;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const deleteContact = createAsyncThunk('contacts/delete', async id => {
  try {
    await axios.delete(`/contacts/${id}`);
    return id;
  } catch (error) {
    console.log(error);
    return error.message;
  }
});

const editContact = createAsyncThunk(
  'contacts/edit',
  async ({ id, name, number }) => {
    try {
      const { data } = await axios.patch(`/contacts/${id}`, { name, number });
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const operations = { getContacts, addContact, deleteContact, editContact };
export default operations;
