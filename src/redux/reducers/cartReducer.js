import { createReducer } from "@reduxjs/toolkit";

const initialState = {

    orderItems: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : {

        cheeseBurger:{
            quantity: 0,
            price: 200,
        },

        vegCheeseBurger:{
            quantity: 0,
            price: 500,
        },
        burgerWithFries:{
            quantity: 0,
            price: 1800,
        },
    },
    itemsPrice: localStorage.getItem("cartPrices") ? JSON.parse(localStorage.getItem("cartPrices")).itemsPrice : 0,

    taxPrice: localStorage.getItem("cartPrices") ? JSON.parse(localStorage.getItem("cartPrices")).taxPrice : 0,

    shippingCharges: localStorage.getItem("cartPrices") ? JSON.parse(localStorage.getItem("cartPrices")).shippingCharges : 0,

    totalAmount: localStorage.getItem("cartPrices") ? JSON.parse(localStorage.getItem("cartPrices")).totalAmount : 0,

    shippingInfo: localStorage.getItem("shippingInfo") ? JSON.parse(localStorage.getItem("shippingInfo")) : {},
};

export const cartReducer = createReducer(initialState , {

    cheeseBurgerIncrement: (state) => {
        state.orderItems.cheeseBurger.quantity += 1;
    },
    vegCheeseBurgerIncrement: (state) => {
        state.orderItems.vegCheeseBurger.quantity += 1;
    },
    burgerWithFriesIncrement: (state) => {
        state.orderItems.burgerWithFries.quantity += 1;
    },

    cheeseBurgerDecrement: (state) => {
        state.orderItems.cheeseBurger.quantity -= 1;
    },
    vegCheeseBurgerDecrement: (state) => {
        state.orderItems.vegCheeseBurger.quantity -= 1;
    },
    burgerWithFriesDecrement: (state) => {
        state.orderItems.burgerWithFries.quantity -= 1;
    },


    calculatePrice: (state) => {

        state.itemsPrice = (state.orderItems.cheeseBurger.quantity * state.orderItems.cheeseBurger.price) + (state.orderItems.vegCheeseBurger.quantity * state.orderItems.vegCheeseBurger.price) + (state.orderItems.burgerWithFries.quantity * state.orderItems.burgerWithFries.price);

        state.taxPrice = state.itemsPrice * 0.18; // 18% of total cart amount

        if(state.itemsPrice === 0){
            state.shippingCharges = 0;
        }
        else{
            state.shippingCharges = (state.itemsPrice >= 1000) ? 0 : 200;
        }

        state.totalAmount = state.itemsPrice + state.taxPrice + state.shippingCharges;
    },

    emptyState: (state) => {
        state.orderItems = {
            cheeseBurger: {
                quantity: 0,
                price: 200,
            },
            vegCheeseBurger: {
                quantity: 0,
                price: 500,
            },
            burgerWithFries: {
                quantity: 0,
                price: 1800,
            }
        };
        state.itemsPrice = 0;
        state.taxPrice = 0;
        state.shippingCharges = 0;
        state.totalAmount = 0;
    },

    addShippingInfo: (state , action) => {
        state.shippingInfo = {
            locality: action.payload.locality,
            city: action.payload.city,
            state: action.payload.state,
            country: action.payload.country,
            pincode: action.payload.pincode,
            phone: action.payload.phone,
        }
    }
});