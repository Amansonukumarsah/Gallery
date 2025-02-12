import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Correct import

export const notification = createApi({
    reducerPath: 'notification',
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:8081/api/notify",
        prepareHeaders: (headers) => {
            headers.set('Content-Type', 'application/json');
            return headers;
        },

     }),  // Corrected baseQuery to include baseUrl
    endpoints: (builder) => ({
        // For posting notifications
        postNotify: builder.mutation({
            query: (username) => ({
                url: '/postNotify',
                method: 'POST',
                body: username,
            }),
            onError: (error, variables, context) => {
                console.error('Failed to submit data:', error);
            },
        }),

        // For getting notifications
        getNotify: builder.query({
            query: () => ({
                url: '/getNotify',
                method: 'GET',
            }),
            onError: (error, variables, context) => {
                console.error('Failed to fetch data:', error);
            },
        }),
    }),
});

// Correctly export the mutation and query hooks
export const { usePostNotifyMutation, useGetNotifyQuery } = notification;

export const { reducer: notificationApiReducer } = notification;
