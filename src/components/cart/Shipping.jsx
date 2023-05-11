import {Country , State , City} from 'country-state-city';
import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';

function Shipping() {

    const {
        shippingInfo
    } = useSelector((state) => state.cart);

    const [locality , setLocality] = useState(shippingInfo.locality);
    const [country , setCountry] = useState(shippingInfo.country);
    const [state , setState] = useState(shippingInfo.state);
    const [city , setCity] = useState(shippingInfo.city);
    const [pincode , setPinCode] = useState(shippingInfo.pincode);
    const [phone , setPhone] = useState(shippingInfo.phone);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleConfirmOrder = (e) => {
        e.preventDefault();
        

        dispatch({
            type: "addShippingInfo",
            payload: {locality , country , state , city , pincode , phone},
        });

        const shippingInfo = {
            locality,
            country,
            state,
            city,
            pincode,
            phone,
        }

        localStorage.setItem("shippingInfo" , JSON.stringify(shippingInfo));

        navigate("/confirmorder");
    }

    return(
        <section className="shipping">

            <main>

                <h1>Shipping Details</h1>
                <form onSubmit={(e) => handleConfirmOrder(e)}>

                    <div>
                        <label>Locality</label>
                        <input type="text" placeholder="Enter Local Address" value={locality} onChange={(e) => setLocality(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Country</label>
                        <select value={country} onChange={(e) => setCountry(e.target.value)} required>
                            <option value="">Select</option>
                            {
                                Country && Country.getAllCountries().map((i) => (
                                    <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                                ))
                            }
                        </select>
                    </div>

                    {country && 
                    
                        <div>
                            <label>State</label>
                            <select value={state} onChange={(e) => setState(e.target.value)} required>
                                <option value="">Select</option>
                                {
                                    State && State.getStatesOfCountry(country).map((i) => (
                                        <option value={i.isoCode} key={i.isoCode}>{i.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    }

                    {state && 
                    
                        <div>
                            <label>City</label>
                            <select value={city} onChange={(e) => setCity(e.target.value)}>
                                <option value="">Select</option>
                                {
                                    City && City.getCitiesOfState(country , state).map((i) => (
                                        <option value={i.isoCode} key={i.name}>{i.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                    }


                    <div>
                        <label>Pincode</label>
                        <input type="number" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPinCode(e.target.value)} required/>
                    </div>

                    <div>
                        <label>Phone No.</label>
                        <input type="number" placeholder="Enter Phone No." value={phone} onChange={(e) => setPhone(e.target.value)} required/>
                    </div>

                    <button type="submit">Confirm Order</button>

                </form>

            </main>

        </section>
    );
}

export default Shipping;