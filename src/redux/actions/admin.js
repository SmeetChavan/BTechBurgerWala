import axios from 'axios';
import { server } from '../store';

export const getAllStats = () => async (dispatch) => {

    try {

        dispatch({type: "getAllStatsRequest"});

        const {data} = await axios.get(`${server}/admin/stats` , {
            withCredentials: true,
        });

        dispatch({type: "getAllStatsSuccess" , payload: data});

    } catch (error) {

        dispatch({type: "getAllStatsFail" , payload: error.response.data.message});

    }
};

export const getAllOrders = () => async (dispatch) => {

    try {
        
        dispatch({type: "getAllOrdersRequest"});

        const {data} = await axios.get(`${server}/admin/orders` , {
            withCredentials: true,
        });

        dispatch({type: "getAllOrdersSuccess" , payload: data.orders});

    } catch (error) {

        dispatch({type: "getAllOrdersFail" , payload: error.response.data.message});

    }
};

export const getAllUsers = () => async (dispatch) => {

    try {

        dispatch({type: "getAllUsersRequest"});

        const {data} = await axios.get(`${server}/admin/users` , {
            withCredentials: true,
        });

        dispatch({type: "getAllUsersSuccess" , payload: data.users});

    } catch (error) {

        dispatch({type: "getAllUsersFail" , payload: error.response.data.message});

    }
};

export const processOrder = (id) => async (dispatch) => {

    try {
        
        dispatch({type: "processOrderRequest"});

        const {data} = await axios.get(`${server}/admin/order/${id}` , {
            withCredentials: true,
        });

        dispatch({type: "processOrderSuccess" , payload: data.message});

    } catch (error) {

        dispatch({type: "processOrderFail" , payload: error.response.data.message});

    }
};