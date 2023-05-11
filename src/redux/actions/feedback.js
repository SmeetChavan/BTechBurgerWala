import axios from 'axios';
import { server } from '../store';

export const postFeedback = (name , email , msg) => async (dispatch) => {

    try {

        dispatch({type: "postFeedbackRequest"});

        const {data} = await axios.post(`${server}/feedback` , {
            name,
            email,
            msg,
        } , {
            headers:{
                'Content-Type' : 'application/json',
            },
            withCredentials: true,
        });


        dispatch({type: "postFeedbackSuccess" , payload: data.message});
        
    } catch (error) {

        dispatch({type: "postFeedbackFail" , payload: error.response.data.message});

    }
};