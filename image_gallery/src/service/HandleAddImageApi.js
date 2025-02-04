import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ImageApi = createApi({

  reducerPath: 'ImageApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8081/api/images',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('authToken');
      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }
      return headers;
    },
  }),

  endpoints: (builder) => ({
    fetchData: builder.query({
      query: ({ type, page, limit }) => {
        const queryString = type ? `?type=${encodeURIComponent(type)}&page=${page}&limit=${limit}` : '';
        return `/getImage${queryString}`;
      }
    }),

    postData: builder.mutation({
      query: (user) => ({
        url: '/postImage',
        method: 'POST',
        body: user,
      }),
      onError: (error, variables, context) => {
        console.error('Failed to submit data:', error);
      },
    }),

    putData: builder.mutation({
      query: (user) => ({
        url: `/user/${user.userId}`,
        method: 'PUT',
        body: user,
      }),
      onError: (error, variables, context) => {
        console.error('Failed to update data:', error);
      },
    }),

    deleteData: builder.mutation({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: 'DELETE',
      }),
      onError: (error, variables, context) => {
        console.error('Failed to delete data:', error);
      },
    }),
  }),

});

export const {
  useFetchDataQuery,
  usePostDataMutation,
  usePutDataMutation,
  useDeleteDataMutation,
} = ImageApi;

export const { reducer: ImageApiReducer } = ImageApi;
