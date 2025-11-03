import React, { use } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const Profile = () => {
    const{user}=use(AuthContext)

    return (
        <div>
            {
                user && user.email
            }
        </div>
    );
};

export default Profile;