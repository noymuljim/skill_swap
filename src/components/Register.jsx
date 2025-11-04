import React, { use, useState } from 'react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';


const Login = () => {
    const { createUser, setUser } = use(AuthContext)
    const [show, setShow] = useState(false)


    const handleRegister = (e) => {
        e.preventDefault()
        //console.log(e.target)

        const form = e.target
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        //console.log({ name, photoURL, email, password })

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                setUser(result.user)

            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage)
            });


    }

    return (
        <div className=" flex rounded-2xl items-center justify-center ">


            <div className='w-11/12 mx-auto'>

                <div className=" flex justify-center z-10 gap-10 p-6 lg:p-10 text-white">


                    {/* Login card */}
                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">



                        <form onSubmit={handleRegister} className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Register Now
                            </h2>

                            {/* name */}
                            <div>
                                <label className="block text-sm mb-1">User Name</label>
                                <input className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"

                                    name='name' required type="text" placeholder='Enter your name' />
                            </div>
                            {/* photo url */}
                            <div>
                                <label className="block text-sm mb-1">Upload Photo</label>
                                <input className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"

                                    name='photo' type="text" required placeholder='Photo URL' />
                            </div>
                            {/* email */}
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="example@email.com"
                                    required
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            {/* password */}
                            <div className="relative">
                                <label className="block text-sm mb-1">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    required
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                                    {show ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>



                            <button type='submit' className="btn w-full">
                                Register
                            </button>


                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>




                            <p className="text-center text-sm text-white/80 mt-3">
                                Already have an account?{" "}
                                <Link
                                    to="/auth/login"
                                    className="text-white font-bold hover:text-white underline"
                                >
                                    Login
                                </Link>
                            </p>
                        </form>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Login;