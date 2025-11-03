import React, { use } from 'react';
import logo from '../assets/digital_tech_book_logo_design_template-removebg-preview.png'
import MyLinks from './MyLinks';
import MyContainer from './MyContainer';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';

const Navbar = () => {
    const{user,logOut}=use(AuthContext)
    const handleLogOut=()=>{
       // console.log('logout')

       logOut()
       .then(()=>{
        alert('logout successful')
       })
       .catch(error=>{
        console.log(error)
       })
    }
    const links=<>
    <div className='space-x-5 mr-10 flex flex-col md:flex-row'>
            <MyLinks to={'/'}>Home</MyLinks>
            <MyLinks to={'/profile'}>Profile</MyLinks>
        </div>
        
    </>

    return (
        <div className="navbar bg-base-100 ">
            <MyContainer className='flex justify-between items-center'>
                
                  <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <img className='w-[150px]' src={logo} alt="" /> 
              </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {links}
                </ul>
            </div>
            <div className="flex gap-4 items-center">

               {
                user?  <img className='w-[33px] h-[33px] rounded-full' src="https://img.icons8.com/parakeet/48/user.png" alt="" />: ''
               }
               
               {
                    user ? <button onClick={handleLogOut} className="btn rounded-3xl px-10 bg-primary text-white">LogOut</button>  : <Link to="/auth/login" className="btn rounded-3xl px-10 bg-primary text-white" >Login</Link>

                }
              
            </div>
            </MyContainer>
          
        </div>
    );
};

export default Navbar;