import MenuCard from "./MenuCard";

import burger1 from '../../assets/burger1.png';
import burger2 from '../../assets/burger2.png';
import burger3 from '../../assets/burger3.png';
import { useDispatch } from "react-redux";
import { toast } from "react-hot-toast";

function Menu(){

    const dispatch = useDispatch();

    const handleAddToCart = (itemNum) => {

        switch (itemNum) {
            case 1:
                dispatch({type: "cheeseBurgerIncrement"});
                dispatch({type: "calculatePrice"});
                toast.success("Added to cart");
                break;
                
            case 2:
                dispatch({type: "vegCheeseBurgerIncrement"});
                dispatch({type: "calculatePrice"});
                toast.success("Added to cart");
                break;

            case 3:
                dispatch({type: "burgerWithFriesIncrement"});
                dispatch({type: "calculatePrice"});
                toast.success("Added to cart");
                break;

            default:
                break;
        }
        
    }

    return(
        <section id="menu">

            <h1>MENU</h1>

            <div>
                <MenuCard head={"Starter"} itemNum={1} img={burger1} price={200} title="Cheese Burger" cartHandler={handleAddToCart} delay="100"/>
                <MenuCard head={"Snack"} itemNum={2} img={burger2} price={500} title="Jumbo Burger" cartHandler={handleAddToCart} delay="500"/>
                <MenuCard head={"Meal"} itemNum={3} img={burger3} price={1800} title="Burger + Fries" cartHandler={handleAddToCart} delay="800"/>
            </div>

        </section>
    );
}

export default Menu;