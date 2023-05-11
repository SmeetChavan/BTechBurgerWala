import { createReducer } from "@reduxjs/toolkit";

export const adminReducer = createReducer({
    orders: [],
    users: [],
} , {

        
    getAllStatsRequest: (state) => {
        state.loading = true;
    },

    getAllStatsSuccess: (state , action) => {
        state.loading = false;
        state.usersCount = action.payload.usersCount;
        state.ordersCount = action.payload.ordersCount;
        state.totalIncome = action.payload.totalIncome;
    },
    
    getAllStatsFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },



    getAllOrdersRequest: (state) => {
        state.loading = true;
    },

    getAllOrdersSuccess: (state , action) => {
        state.loading = false;
        state.orders = action.payload;
    },

    getAllOrdersFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },



    getAllUsersRequest: (state) => {
        state.loading = true;
    },

    getAllUsersSuccess: (state , action) => {
        state.loading = false;
        state.users = action.payload;
    },

    getAllUsersFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },



    processOrderRequest: (state) => {
        state.loading = true;
    },

    processOrderSuccess: (state , action) => {
        state.loading = false;
        state.message = action.payload;
    },

    processOrderFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    },
});