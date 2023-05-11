import { AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import {GiArmoredBoomerang} from 'react-icons/gi';
import { useEffect } from "react";
import { getAllOrders, processOrder } from "../../redux/actions/admin";
import toast from 'react-hot-toast';
import Loader from '../layout/Loader';

function Orders() {

    const dispatch = useDispatch();

    const {
        loading,
        orders,
        error,
        message,
    } = useSelector((state) => state.admin);
    
    useEffect(() => {

        if(error){
            toast.error(error);
            dispatch({type: "clearError"});
        }
        if(message){
            toast.success(message);
            dispatch({type: "clearMessage"});
        }

        dispatch(getAllOrders());

    }, [dispatch , error , message]);


    const handleProcessOrder = (id) => {

        dispatch(processOrder(id));


        
    }


    return(
        <section className="tableClass">

            {loading === true || orders === undefined ? <Loader /> :
            
                <main>

                    <table>
                        <thead>
                            <tr>
                                <th>Order ID</th>
                                <th>Status</th>
                                <th>Item Qty</th>
                                <th>Amount</th>
                                <th>Payment Method</th>
                                <th>User</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {orders && orders.map((i) => (
                                <tr key={i._id}>
                                    <td>#{i._id}</td>
                                    <td>{i.orderStatus}</td>
                                    <td>{i.orderItems.cheeseBurger.quantity +
                                i.orderItems.vegCheeseBurger.quantity +
                                i.orderItems.burgerWithFries.quantity}</td>
                                    <td>₹{i.totalAmount}</td>
                                    <td>{i.paymentMethod}</td>
                                    <td>{i.user && i.user.name}</td>
                                    <td>
                                        <Link to={`/order/${i._id}`}> <AiOutlineEye/> </Link>
                                        <button onClick={() => handleProcessOrder(i._id)}><GiArmoredBoomerang/></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </main>
            
            }

        </section>
    );
}

export default Orders;