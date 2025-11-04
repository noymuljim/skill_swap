import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../Provider/AuthProvider';

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