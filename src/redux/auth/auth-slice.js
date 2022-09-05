import { createSlice } from '@reduxjs/toolkit';
import { authAPI } from 'redux/auth';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isLoading: false,
  error: null,
  isFetchingCurrentUser: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder.addMatcher(authAPI.endpoints.register.matchPending, state => {
      state.isLoading = true;
    });
    //userRegister
    builder.addMatcher(authAPI.endpoints.register.matchPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(
      authAPI.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.register.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    //userLogin
    builder.addMatcher(authAPI.endpoints.login.matchPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(
      authAPI.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    //userLogOut
    builder.addMatcher(authAPI.endpoints.logOut.matchPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(authAPI.endpoints.logOut.matchFulfilled, () => {
      return { ...initialState };
    });
    builder.addMatcher(
      authAPI.endpoints.logOut.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    //fetchCurrentUser
    builder.addMatcher(
      authAPI.endpoints.fetchCurrentUser.matchPending,
      state => {
        state.isFetchingCurrentUser = true;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      authAPI.endpoints.fetchCurrentUser.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isFetchingCurrentUser = false;
      }
    );
  },
});

export default authSlice.reducer;
