import { Link } from "react-router-dom";

function PaymentSuccess() {
    return(
        <section className="paymentSuccess">

            <main>
                <h1>Order Confirmed</h1>
                <p>Order placed successfully, you can check the order status below:</p>

                <Link to="/myorders">Check Status</Link>
            </main>
        </section>
    );
}

export default PaymentSuccess;