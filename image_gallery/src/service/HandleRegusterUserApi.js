import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HandleUserApi = createApi({

  reducerPath: 'HandleUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/user' }),

  endpoints: (builder) => ({

  // for register the user
    RegisterUser: builder.mutation({
      query: (user) => ({
        url: '/registerUser',
        method: 'POST',
        body: user,
      }),
      onError: (error, variables, context) => {
        console.error('Failed to submit data:', error);
        // You can handle errors here, such as dispatching an error action
      },
    }),


    // for get the value of user

    GetUser: builder.query({
      query: () => ({
        url: '/getAllUser', // The correct way to return the URL
        method: 'GET',      // Specify the method (GET in this case)
      }),
      onError: (error, variables, context) => {
        console.error('Failed to fetch user data:', error);
        // You can handle errors here, such as dispatching an error action
      },
    }),
    
    
  }),
});

export const { useRegisterUserMutation,useGetUserQuery } = HandleUserApi; // Remove this line

export const { reducer: HandleUserApiReducer } = HandleUserApi;
