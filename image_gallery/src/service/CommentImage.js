import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const CommentApi = createApi({
  reducerPath: 'CommentApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8080/comment' }),
  endpoints: (builder) => ({



    fetchData: builder.query({
      query: () => '/',
    }),

    PostCommentData: builder.mutation({
      query: (user) => ({
        url: '/user',
        method: 'POST',
        body: user,
      }),
      onError: (error, variables, context) => {
        console.error('Failed to submit data:', error);
        // You can handle errors here, such as dispatching an error action
      },
    }),

  }),
});

export const { usePostCommentDataMutation,useFetchDataQuery } = CommentApi; 
export const { reducer: CommentApiReducer } = CommentApi;
