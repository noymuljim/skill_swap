import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router';

const Profile = () => {
    const { user } = use(AuthContext)

    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <div className='w-11/12 mx-auto'>

                {
                    user && <div className=' min-h-screen flex flex-col justify-center items-center '>
                       <div className='bg-amber-200 border flex flex-col items-center p-10 rounded-2xl'>
                         <img className='w-20 h-20 rounded-full' src={user.photoURL} alt="" />
                        <p className='font-bold'>{user.email}</p>
                        <h1 className='font-semibold mb-10'>{user.displayName}</h1>

                        <Link className='btn btn-secondary' to=''>Update Profile</Link>
                       </div>
                    </div>
                    

                }
            </div>

        </div>
    );
};

export default Profile;