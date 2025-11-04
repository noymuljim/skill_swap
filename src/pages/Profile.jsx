import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import Navbar from '../components/Navbar';

const Profile = () => {
    const { user } = use(AuthContext)

    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div className='w-11/12 mx-auto'>

                {
                    user && 
                    <p>{user.email}{user.name}</p>

                }
            </div>

        </div>
    );
};

export default Profile;