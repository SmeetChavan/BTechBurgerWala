import axios from 'axios';
import {server} from '../store';

import me from '../../assets/founder.jpg';

export const createOrder = (
    shippingInfo,
    paymentMethod,
    orderItems, 
    itemsPrice,
    taxPrice, 
    shippingCharges,
    totalAmount,
) => async (dispatch) => {

    try {

        dispatch({
            type: "placeOrderRequest",
        });

        const {data} = await axios.post(`${server}/createorder`, {
            shippingInfo,
            paymentMethod,
            orderItems,
            itemsPrice,
            taxPrice, 
            shippingCharges,
            totalAmount,
        } , {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        dispatch({
            type: "placeOrderSuccess",
            payload: data.message,
        });
    } catch (error) {

        dispatch({
            type: "placeOrderFail",
            payload: error.response.data.message,
        });
    }
};

export const createOrderOnline = (
    shippingInfo,
    paymentMethod,
    orderItems, 
    itemsPrice,
    taxPrice, 
    shippingCharges,
    totalAmount,
) => async (dispatch) => {

    try {

        dispatch({
            type: "placeOrderRequest",
        });

        const {data} = await axios.post(`${server}/createorder`, {
            shippingInfo,
            paymentMethod,
            orderItems,
            itemsPrice,
            taxPrice, 
            shippingCharges,
            totalAmount,
        } , {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        const options = {
            key: "rzp_test_SIntskbOo4jlGn",
            amount: totalAmount,
            currency: "INR",
            name: "BTech Burger Wala",
            description: "Burger App",
            image: me,
            order_id: data.order.id,


            handler: function (response){

                const {razorpay_order_id , razorpay_payment_id , razorpay_signature} = response;

                dispatch(paymentVerification(razorpay_order_id , razorpay_payment_id , razorpay_signature , data.orderOptions))
            },

            theme: {
                color: "#9c003c",
            }
        };
        const razorpay = new window.Razorpay(options);
        razorpay.open();

        dispatch({
            type: "placeOrderSuccess",
            payload: data.message,
        });
    } catch (error) {

        dispatch({
            type: "placeOrderFail",
            payload: error.response.data.message,
        });
    }
};

export const paymentVerification = (
    razorpay_order_id,
    razorpay_payment_id,
    razorpay_signature,
    orderOptions,
) => async (dispatch) => {

    try {

        dispatch({
            type: "paymentVerificationRequest",
        });

        const {data} = await axios.post(`${server}/paymentverification`, {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
            orderOptions,
        } , {
            headers: {
                'Content-Type': 'application/json',
            },
            withCredentials: true,
        });

        dispatch({
            type: "paymentVerificationSuccess",
            payload: data.message,
        });
    } catch (error) {

        dispatch({
            type: "paymentVerificationFail",
            payload: error.response.data.message,
        });
    }
};

export const getMyOrders = () => async (dispatch) => {

    try {
        
        dispatch({type: "getMyOrdersRequest"});

        const {data} = await axios.get(`${server}/myorders` , {
            withCredentials: true,
        });

        dispatch({type: "getMyOrdersSuccess" , payload: data.orders});

    } catch (error) {
        dispatch({type: "getMyOrdersFail" , payload: error.response.data.message});
    }

}

export const getOrderDetails = (id) => async (dispatch) => {

    try {

        dispatch({type: "getOrderDetailsRequest"});

        const {data} = await axios.get(`${server}/order/${id}` , {
            withCredentials: true,
        });

        dispatch({type: "getOrderDetailsSuccess" , payload: data.order});

    } catch (error) {
        dispatch({type: "getOrderDetailsFail" , payload: error.response.data.message});
    }
}