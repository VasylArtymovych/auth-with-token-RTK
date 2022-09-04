import { createSlice } from '@reduxjs/toolkit';
// import { authOperations } from 'redux/auth';
import { authApi } from 'redux/auth/authAPI';

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
    builder.addMatcher(authApi.endpoints.register.matchPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(
      authApi.endpoints.register.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.register.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );

    builder.addMatcher(authApi.endpoints.login.matchPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(
      authApi.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.token = payload.token;
        state.user = payload.user;
        state.isLoggedIn = true;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.login.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(authApi.endpoints.logOut.matchPending, state => {
      state.isLoading = true;
    });
    builder.addMatcher(authApi.endpoints.logOut.matchFulfilled, () => {
      return { ...initialState };
    });
    builder.addMatcher(
      authApi.endpoints.logOut.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchPending,
      state => {
        console.log('pending');
        return { ...state, isFetchingCurrentUser: true };
      }
    );
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchFulfilled,
      (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
        state.isFetchingCurrentUser = false;
      }
    );
    builder.addMatcher(
      authApi.endpoints.fetchCurrentUser.matchRejected,
      (state, { payload }) => {
        state.error = payload;
        state.isFetchingCurrentUser = false;
      }
    );
  },
  // {
  //   [authOperations.register.pending](state) {
  //     return { ...state, isLoading: true };
  //   },
  //   [authOperations.register.fulfilled](state, { payload }) {
  //     return {
  //       ...state,
  //       user: payload.user,
  //       token: payload.token,
  //       isLoggedIn: true,
  //       isLoading: false,
  //     };
  //   },
  //   [authOperations.register.rejected](state, { payload }) {
  //     return { ...state, error: payload, isLoading: false };
  //   },

  //   [authOperations.logIn.pending](state) {
  //     return { ...state, isLoading: true };
  //   },
  //   [authOperations.logIn.fulfilled](state, { payload }) {
  //     return {
  //       ...state,
  //       user: payload.user,
  //       token: payload.token,
  //       isLoggedIn: true,
  //       isLoading: false,
  //     };
  //   },
  //   [authOperations.logIn.rejected](state, { payload }) {
  //     return { ...state, error: payload, isLoading: false };
  //   },

  //   [authOperations.logOut.pending](state) {
  //     return { ...state, isLoading: true };
  //   },
  //   [authOperations.logOut.fulfilled]() {
  //     return {
  //       ...initialState,
  //     };
  //   },
  //   [authOperations.logOut.rejected](state, { payload }) {
  //     return { ...state, error: payload, isLoading: false };
  //   },
  //   [authOperations.fetchCurrentUser.pending](state) {
  //     return { ...state, isFetchingCurrentUser: true };
  //   },
  //   [authOperations.fetchCurrentUser.fulfilled](state, { payload }) {
  //     return {
  //       ...state,
  //       user: payload,
  //       isLoggedIn: true,
  //       isFetchingCurrentUser: false,
  //     };
  //   },
  //   [authOperations.fetchCurrentUser.rejected](state, { payload }) {
  //     return { ...state, error: payload, isFetchingCurrentUser: false };
  //   },
  // },
});

export default authSlice.reducer;
