import { createReducer } from "@reduxjs/toolkit";

export const feedbackReducer = createReducer({} , {

    postFeedbackRequest: (state) => {
        state.loading = true;
    },

    postFeedbackSuccess: (state , action) => {
        state.loading = false;
        state.message = action.payload;
    },

    postFeedbackFail: (state , action) => {
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