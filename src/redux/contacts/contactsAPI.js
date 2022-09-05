import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsAPI = createApi({
  reducerPath: 'contactsApi',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',

    prepareHeaders: (headers, { getState }) => {
      const token = getState().auth.token;
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  tagTypes: ['items'],

  endpoints: builder => ({
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['items'],
    }),

    addContact: builder.mutation({
      query: body => ({
        url: '/contacts',
        method: 'POST',
        body: body,
      }),
      invalidatesTags: ['items'],
    }),

    deleteContact: builder.mutation({
      query: id => ({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['items'],
    }),

    updateContact: builder.mutation({
      query: ({ id, name, number }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { name, number },
      }),
      invalidatesTags: ['items'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useUpdateContactMutation,
} = contactsAPI;
