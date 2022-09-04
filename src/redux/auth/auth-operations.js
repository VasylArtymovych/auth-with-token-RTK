import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

//set Authorization fild with token in requset headers:
const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unSet() {
    axios.defaults.headers.common.Authorization = '';
  },
};

//register user
const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/users/signup', credentials);
    token.set(data.token);
    toast.success('SignUp success!');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

//login user
const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/users/login', credentials);
    token.set(data.token);
    toast.success('LogIn success!');
    return data;
  } catch (error) {
    console.log(error.message);
  }
});

//logOut user
const logOut = createAsyncThunk('auth/logOut', async () => {
  try {
    await axios.post('/users/logout');
    token.unSet();
    toast.success('LogOut!');
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
});

//fetch cuurentUser
const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (!persistedToken) {
      return thunkAPI.rejectWithValue('imposible to persist token');
    }
    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      console.log(error);
      return error.message;
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  fetchCurrentUser,
};
export default operations;
