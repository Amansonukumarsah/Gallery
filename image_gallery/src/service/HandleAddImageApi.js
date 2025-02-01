import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ImageApi = createApi({
  reducerPath: 'ImageApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/images' }),

  endpoints: (builder) => ({

    fetchData: builder.query({
      query: ({type,page,limit}) =>{
        // console.log("..........query.11..........",type)
        const queryString = type ? `?type=${encodeURIComponent(type)}&page=${page}&limit=${limit}` : '';
        return `/getImage${queryString}`;

        // return `/getImage?type=Personal`;
      } 
    }),

    // postData: builder.mutation({
    //   query: (user) => ({
    //     url: '/postImage',
    //     method: 'POST',
    //   //   headers: {
    //   //     'Content-Type': 'application/json'
    //   // },
    //   // body: JSON.stringify(user)
    //     body: user,
    //   }),
    //   onError: (error, variables, context) => {
    //     console.error('Failed to submit data:', error);
    //     // You can handle errors here, such as dispatching an error action
    //   },
    // }),

    postData: builder.mutation({
      query: (user) => ({
        url: '/postImage',
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem("authToken")}` // Include JWT token
        },
        body: user, // Send FormData directly (browser sets content-type)
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
