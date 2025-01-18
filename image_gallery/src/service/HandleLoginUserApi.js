import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const HandleLoginUserApi = createApi({

  reducerPath: 'HandleLoginUserApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8081/api/user' }),

  endpoints: (builder) => ({

  // for Login the user
    LoginUser: builder.mutation({
      query: (user) => ({
        url: '/loginUser',
        method: 'POST',
        body: user,
      }),
      onError: (error, variables, context) => {
        console.error('Failed to submit data:', error);
      },
    }),

    LogoutUser:builder.mutation({
      query:(token)=>({
        url:'/logout',
        method:'POST',
        headers: {"Authorization": `Bearer ${token}`}
      }),
      onError:(Error,variables,context)=>{
        console.error('Failed to logout data:',Error);
      },
    }),


  }),
});

export const { useLoginUserMutation,useLogoutUserMutation } = HandleLoginUserApi; // Remove this line

export const { reducer: HandleLoginUserApiReducer } = HandleLoginUserApi;
