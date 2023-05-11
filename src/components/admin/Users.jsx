import { useEffect } from 'react';

import {useDispatch, useSelector} from 'react-redux';
import { getAllUsers } from '../../redux/actions/admin';

import Loader from '../layout/Loader';

function Users() {

    const dispatch = useDispatch();

    const {
        loading,
        users,
    } = useSelector((state) => state.admin);

    useEffect(() => {
        
        dispatch(getAllUsers());

    }, [dispatch])


    return(
        <section className="tableClass">

            {loading === true || users === undefined ? <Loader/> :
            
                <main>

                    <table>
                        <thead>
                            <tr>
                                <th>User ID</th>
                                <th>Name</th>
                                <th>Photo</th>
                                <th>Role</th>
                                <th>Since</th>
                            </tr>
                        </thead>

                        <tbody>
                            {users && users.map((i) => (
                                <tr key={i._id}>
                                    <td>#{i._id}</td>
                                    <td>{i.name}</td>
                                    <td>
                                        <img src={i.photo} alt="Not found" />
                                    </td>
                                    <td>{i.role}</td>
                                    <td>{i.createdAt.split("T")[0]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </main>
            }

        </section>
    );
}

export default Users;