import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrderDetails } from "../../redux/actions/order";
import { useParams } from "react-router-dom";
import Loader from "../layout/Loader";

function OrderDetails() {

    const params = useParams();

    const dispatch = useDispatch();
    
    const {order , loading} = useSelector((state) => state.myOrders)

    useEffect(() => {
        
        dispatch(getOrderDetails(params.id));
        
    }, [dispatch , params.id]);

    return(
        <section className="orderDetails">

            {loading === true || order === undefined ? <Loader/> :

                <main>

                    <h1>Order Details</h1>
    
                    <div>
                        <h1>Shipping</h1>
                        <p>
                            <b>Address:&nbsp;</b>
                            <span>
                                {`${order.shippingInfo.locality} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country}-${order.shippingInfo.pincode}`}
                            </span>
                        </p>
                    </div>
    
                    <div>
                        <h1>Contact</h1>
                        <p>
                            <b>Name:&nbsp;</b>
                            {order.user.name}
                        </p>
                        <p>
                            <b>Phone:&nbsp;</b>
                            {order.shippingInfo.phone}
                        </p>
                    </div>
    
                    <div>
                        <h1>Status</h1>
                        <p>
                            <b>Order Status:&nbsp;</b>
                            {order.orderStatus}
                        </p>
                        <p>
                            <b>Placed At:&nbsp;</b>
                            {order.createdAt.split("T")[0]}
                        </p>
                        <p>
                            <b>Delivered At:&nbsp;</b>
                            {order.deliveredAt ? order.deliveredAt : "Not yet"}
                        </p>
                    </div>
    
                    <div>
                        <h1>Payment:&nbsp;</h1>
                        <p>
                            <b>Payment Method:&nbsp;</b>
                            {order.paymentMethod === "Online" ? order.paymentMethod : "Cash on delivery"}
                        </p>

                        {order.paymentInfo ? 
                            <p>
                                <b>Payment Reference:&nbsp;</b><span className="paymentreference">#{order.paymentInfo}</span>
                            </p>
                        :
                        ""
                        }
                        {order.paidAt ? 
                            <p>
                                <b>Paid At:&nbsp;</b>
                                {order.paidAt.split("T")[0]}
                            </p>
                        :
                        ""
                        }
                    </div>
    
                    <div>
                        <h1>Amount:&nbsp;</h1>
                        <p>
                            <b>Item Total:&nbsp;</b>₹{order.itemsPrice}
                        </p>
                        <p>
                            <b>Shipping Charges:&nbsp;</b>₹{order.shippingCharges}
                        </p>
                        <p>
                            <b>Tax:&nbsp;</b>₹{order.taxPrice}
                        </p>
                        <p>
                            <b>Total Amount:&nbsp;</b>₹{order.totalAmount}
                        </p>
                    </div>

                    <article>

                        <h1>Ordered Items</h1>

                        <div>
                            <h4>Cheese Burger</h4>
                            <div>
                                <span>{order.orderItems.cheeseBurger.quantity}</span> x <span>{order.orderItems.cheeseBurger.price}</span>
                            </div>
                        </div>

                        <div>
                            <h4>Veg Cheese Burger</h4>
                            <div>
                                <span>{order.orderItems.vegCheeseBurger.quantity}</span> x <span>{order.orderItems.vegCheeseBurger.price}</span>
                            </div>
                        </div>

                        <div>
                            <h4>Burger with Fries</h4>
                            <div>
                                <span>{order.orderItems.burgerWithFries.quantity}</span> x <span>{order.orderItems.burgerWithFries.price}</span>
                            </div>
                        </div>
    
                        <div>
                            <h4 style={{fontWeight: 800}}>Sub Total</h4>
                            <div style={{fontWeight: 800}}>₹{order.itemsPrice}</div>
                        </div>
    
                    </article>
    
                </main>
            }

        </section>
    );
}

export default OrderDetails;