import {configureStore} from "@reduxjs/toolkit";
import { authReducer } from "./reducers/userReducer";
import { cartReducer} from "./reducers/cartReducer";
import { myOrdersReducer, orderReducer } from "./reducers/orderReducer";
import { adminReducer } from "./reducers/adminReducer";
import { feedbackReducer } from "./reducers/feedbackReducer";

const store = configureStore({
    reducer: {
        auth: authReducer,
        cart: cartReducer,
        order: orderReducer,
        myOrders: myOrdersReducer,
        admin: adminReducer,
        feedback: feedbackReducer,
    },
});

export default store;

export const server = 'https://bbwbackend.vercel.app/api/v1';