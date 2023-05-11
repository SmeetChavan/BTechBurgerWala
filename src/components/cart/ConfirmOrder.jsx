import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createOrder, createOrderOnline } from "../../redux/actions/order";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import Loader from "../layout/Loader";

function ConfirmOrder() {

    const [paymentMethod , setPaymentMethod] = useState('');
    const [disableBtn , setDisableBtn] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {
        shippingInfo,
        orderItems, 
        itemsPrice,
        taxPrice, 
        shippingCharges,
        totalAmount
    } = useSelector((state) => state.cart);

    const {
        message,
        error,
        loading,
    } = useSelector((state) => state.order);

    const handleSubmit = (e) => {
        e.preventDefault();
        setDisableBtn(true);

        if(paymentMethod === "COD"){

            dispatch(createOrder(shippingInfo , paymentMethod , orderItems , itemsPrice , taxPrice , shippingCharges , totalAmount));

        }else{

            dispatch(createOrderOnline(shippingInfo , paymentMethod , orderItems , itemsPrice , taxPrice , shippingCharges , totalAmount));

        }
    };

    useEffect(() => {
        
        if(message){
            toast.success(message);
            dispatch({type: "clearMessage"});
            dispatch({type: "emptyState"});
            navigate("/success");
        }

        if(error){
            toast.error(error);
            dispatch({type: "clearError"});
            setDisableBtn(false);
        }

    }, [dispatch , error , message , navigate]);
    

    return(
        <section className="confirmOrder">

            {loading === true ? <Loader/> : 

                <main>

                    <h1>Confirm Order</h1>

                    <form onSubmit={handleSubmit}>

                        <div>
                            <label>Cash On Delivery</label>
                            <input type="radio" name="payment" onChange={() => setPaymentMethod("COD")} required/>
                        </div>

                        <div>
                            <label>Online</label>
                            <input type="radio" name="payment" onChange={() => setPaymentMethod("Online")} required/>
                        </div>

                        <button disabled={disableBtn} type="submit">Place Order</button>

                    </form>
            
                </main>
            }

        </section>
    );
}

export default ConfirmOrder;