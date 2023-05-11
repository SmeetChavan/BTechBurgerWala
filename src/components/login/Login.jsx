import {FcGoogle} from 'react-icons/fc';
import { server } from '../../redux/store';

function Login() {

    const handleLogin = () => {

        window.open(`${server}/googlelogin` , "_self");

    }

    return(
        <section className="login">
            
            <button data-aos="fade-down" onClick={handleLogin}>Login with Google <FcGoogle/></button>

        </section>
    );
}

export default Login;