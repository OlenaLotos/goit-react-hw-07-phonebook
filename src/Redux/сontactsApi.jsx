import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
  reducerPath: 'contactsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://62ab90ada62365888bde708a.mockapi.io/api/v1/',
  }),
  tagTypes: ['Contacts'],
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts`,
      providesTags: ['Contacts'],
    }),
    addContacts: builder.mutation({
      query(body) {
        return {
          url: `contacts`,
          method: 'POST',
          body,
        };
      },
      invalidatesTags: ['Contacts'],
    }),
    deleteContacts: builder.mutation({
      query(id) {
        return {
          url: `contacts/${id}`,
          method: 'DELETE',
        };
      },
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactsMutation,
  useDeleteContactsMutation,
} = contactsApi;
