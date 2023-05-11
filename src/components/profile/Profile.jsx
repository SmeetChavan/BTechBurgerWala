import { Link } from 'react-router-dom';

import {MdDashboard} from 'react-icons/md'

import {useDispatch, useSelector} from 'react-redux';
import { logout } from '../../redux/actions/user';

import Loader from '../layout/Loader.jsx';

function Profile() {

    const dispatch = useDispatch();
    const {loading , user} = useSelector((state) => state.auth);

    const handleLogout = () => {
        dispatch(logout());
    }

    return(
        <section className="profile">

            {loading === true ? <Loader/>
            
            :
                <main>

                    <img src={user.photo} alt="User" data-aos="fade-down"/>

                    <h5 data-aos="fade-down" data-aos-delay="300">{user.name}</h5>

                    {
                        user.role === "admin" &&
 
                        <div data-aos="fade-right" data-aos-delay="300">
                            <Link to="/admin/dashboard" style={{borderRadius: 0 , backgroundColor: "rgb(40,40,40)"}}><MdDashboard/>Dashboard</Link>
                        </div>
                    }

                    <div>
                        <Link to="/myorders">Orders</Link>
                    </div>

                    <button onClick={() => handleLogout()}>Logout</button>

                </main>
            }

        </section>
    );
}

export default Profile;