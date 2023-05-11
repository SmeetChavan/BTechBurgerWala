import { createReducer } from "@reduxjs/toolkit";

export const orderReducer = createReducer({} , {

    placeOrderRequest: (state) => {
        state.loading = true;
    },

    placeOrderSuccess: (state , action) => {
        state.loading = false;
        state.message = action.payload;
    },

    placeOrderFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },

    paymentVerificationRequest: (state) => {
        state.loading = true;
    },

    paymentVerificationSuccess: (state , action) => {
        state.loading = false;
        state.message = action.payload;
    },

    paymentVerificationFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    },

})

export const myOrdersReducer = createReducer({
    orders: [],
} , {

    getMyOrdersRequest: (state) => {
        state.loading = true;
    },
    getMyOrdersSuccess: (state , action) => {
        state.loading = false;
        state.orders = action.payload;
    },
    getMyOrdersFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },


    getOrderDetailsRequest: (state) => {
        state.loading = true;
    },
    getOrderDetailsSuccess: (state , action) => {
        state.loading = false;
        state.order = action.payload;
    },
    getOrderDetailsFail: (state , action) => {
        state.loading = false;
        state.error = action.payload;
    },

    clearMessage: (state) => {
        state.message = null;
    },
    clearError: (state) => {
        state.error = null;
    },
})