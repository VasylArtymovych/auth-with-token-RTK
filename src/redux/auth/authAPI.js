import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authAPI = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/users',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: builder => ({
    register: builder.mutation({
      query: credentials => ({
        url: '/signup',
        method: 'POST',
        body: credentials,
      }),
    }),
    login: builder.mutation({
      query: credentials => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    logOut: builder.mutation({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
    fetchCurrentUser: builder.query({
      query: () => '/current',
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useLogOutMutation,
  useFetchCurrentUserQuery,
} = authAPI;
