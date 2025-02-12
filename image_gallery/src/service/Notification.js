import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; // Correct import

export const notification = createApi({
    reducerPath: 'notification',
    baseQuery: fetchBaseQuery({ 
        baseUrl: "http://localhost:8081/api/notify",
        prepareHeaders: (headers) => {
            const token = localStorage.getItem('authToken');
            if (token) {
                headers.set('Authorization', `Bearer ${token}`);
            }
            return headers;
        },
     }),
    endpoints: (builder) => ({
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

export const { usePostNotifyMutation, useGetNotifyQuery } = notification;
export const { reducer: notificationApiReducer } = notification;
