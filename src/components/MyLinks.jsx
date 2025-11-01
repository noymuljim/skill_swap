import React from 'react';
import { NavLink } from 'react-router';

const MyLinks = ({to,className,children}) => {
    return (
        <NavLink 
        className={({isActive})=> isActive? 'text-green-500 font-semibold':`${className}`} 
        to={to} >


        {children}
        </NavLink>
        

    );
};

export default MyLinks;