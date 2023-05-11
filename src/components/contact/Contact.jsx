import { useEffect, useState } from 'react';
import burger2 from '../../assets/burger2.png';
import {useDispatch, useSelector} from 'react-redux';
import {toast} from 'react-hot-toast';
import { postFeedback } from '../../redux/actions/feedback';
import Loader from '../layout/Loader';

function Contact(){

    const dispatch = useDispatch();

    
    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    const [msg , setMsg] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(postFeedback(name , email , msg));
        setName('');
        setEmail('');
        setMsg('');
    };

    const {
        loading,
        message,
        error,
    } = useSelector((state) => state.feedback);

    useEffect(() => {

        if(error){
            toast.error("Not Logged In");
            dispatch({type: "clearError"});
        }
        if(message){
            toast.success(message);
            dispatch({type: "clearMessage"});
        }

    }, [dispatch , message , error]);


    return(
        <section className="contact">

            {loading === true ? <Loader /> :

                <main>

                    <form data-aos="fade-right" data-aos-duration="700" data-aos-easing="ease-out" onSubmit={(e) => handleSubmit(e)}>

                        <h2>Contact Us</h2>
                        <input type="text" placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
                        <input type="email" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>

                        <textarea placeholder='Message...' cols="30" rows="10" value={msg} onChange={(e) => setMsg(e.target.value)}></textarea>

                        <button type='submit'>Send</button>
                    </form>

                    <div className='formBorder' data-aos="fade-left" data-aos-duration="1000" data-aos-easing="ease-in-out">

                        <div>

                            <img src={burger2} alt="Burger" data-aos="fade-down" data-aos-delay="1000" data-aos-duration="500" />

                        </div>

                    </div>
                </main>
            
            }


        </section>
    );
}

export default Contact;