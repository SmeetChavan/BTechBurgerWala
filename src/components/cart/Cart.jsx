import { useDispatch , useSelector } from 'react-redux';
import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';

import {Link} from 'react-router-dom';
import { useEffect } from 'react';

function CartItem({title , value , img , increment , decrement}){
    return(
        <div className="cartItem">

            <div>
                <h4>{title}</h4>
                <img src={img} alt="Item" />
            </div>

            <div>
                <button onClick={() => decrement()}>-</button>
                <input type="number" readOnly value={value} />
                <button onClick={() => increment()}>+</button>
            </div>

        </div>
    );
}

function Cart(){

    const dispatch = useDispatch();

    const increment = (item) => {

        switch (item) {
            case 1:
                dispatch({type: "cheeseBurgerIncrement"});
                dispatch({type: "calculatePrice"});
                break;
            case 2:
                dispatch({type: "vegCheeseBurgerIncrement"});
                dispatch({type: "calculatePrice"});
                break;
            case 3:
                dispatch({type: "burgerWithFriesIncrement"});
                dispatch({type: "calculatePrice"});
                break;

            default:
                break;
        }
    };

    const decrement = (item) => {

        switch (item) {
            case 1:
                if(cheeseBurger.quantity === 0) break;
                    dispatch({type: "cheeseBurgerDecrement"});
                    dispatch({type: "calculatePrice"});
                break;
            case 2:
                if(vegCheeseBurger.quantity === 0) break;
                    dispatch({type: "vegCheeseBurgerDecrement"});
                    dispatch({type: "calculatePrice"});
                break;
            case 3:
                if(burgerWithFries.quantity === 0) break;
                    dispatch({type: "burgerWithFriesDecrement"});
                    dispatch({type: "calculatePrice"});
                break;

            default:
                break;
        }
    };

    const {

        orderItems:{
            cheeseBurger,
            vegCheeseBurger,
            burgerWithFries,
        },

        itemsPrice, taxPrice, shippingCharges, totalAmount,

    } = useSelector((state) => state.cart);

    const {
        orderItems
    } = useSelector((state) => state.cart);
    useEffect(() => {

        localStorage.setItem("cartItems" , JSON.stringify(orderItems));
        localStorage.setItem("cartPrices" , JSON.stringify({itemsPrice , taxPrice , shippingCharges , totalAmount}));

    }, [orderItems , itemsPrice , taxPrice , shippingCharges , totalAmount]);


    return(
        <section className="cart">

            <main>

                <CartItem title="Cheese Burger" value={cheeseBurger.quantity} img={burger1} increment={() => increment(1)} decrement={() => decrement(1)}/>
                <CartItem title="Jumbo Burger" value={vegCheeseBurger.quantity} img={burger2} increment={() => increment(2)} decrement={() => decrement(2)}/>
                <CartItem title="Chicken Burger with Fries" value={burgerWithFries.quantity} img={burger3} increment={() => increment(3)} decrement={() => decrement(3)}/>

                <article>

                    <div>
                        <h4>Sub-Total</h4>
                        <p>₹{itemsPrice}</p>
                    </div>

                    <div>
                        <h4>Tax</h4>
                        <p>₹{taxPrice}</p>
                    </div>

                    <div>
                        <h4>Shipping Charges</h4>
                        <p>₹{shippingCharges}</p>
                    </div>

                    <hr/>

                    <div>
                        <h3>Total</h3>
                        <b>₹{totalAmount}</b>
                    </div>

                    <Link to='/shipping'>Checkout</Link>

                </article>

            </main>

        </section>
    );
}

export default Cart;