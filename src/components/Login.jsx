import React, { useState } from 'react';
import MyContainer from './MyContainer';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router';
// import signinLogo from'../assets/signin1.png'

const Login = () => {
        const [show, setShow] = useState(false)

    return (
        <div className=" flex rounded-2xl items-center justify-center bg-gradient-to-br from-green-400 via-black to-white overflow-hidden">
          

            <MyContainer>
                <div className="relative z-10 gap-10 p-6 lg:p-10 text-white">
                    {/* Left section */}
                   

                    {/* Login card */}
                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">



                    <form className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Login
                            </h2>

                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"

                                    // value={email}
                                    // onChange={(e) => setEmail(e.target.value)}
                                    placeholder="example@email.com"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>

                            <div className="relative">
                                <label className="block text-sm mb-1">Password</label>
                                <input
                                    type={show ? "text" : "password"}
                                    name="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                                <span onClick={() => setShow(!show)} className="absolute right-[8px] top-[36px] cursor-pointer z-50">
                                    {show ? <FaEye /> : <FaEyeSlash />
                                    }
                                </span>
                            </div>

                            <button
                                className="hover:underline cursor-pointer"
                                // onClick={handleForgetPassword}
                                type="button"
                            >
                                Forget password?
                            </button>

                            <button className="my-btn">
                                Login
                            </button>
                      

                        {/* Divider */}
                        <div className="flex items-center justify-center gap-2 my-2">
                            <div className="h-px w-16 bg-white/30"></div>
                            <span className="text-sm text-white/70">or</span>
                            <div className="h-px w-16 bg-white/30"></div>
                        </div>






                        {/* Google Signin */}
                        <button
                            type="button"
                            // onClick={handleGoogleSignin}
                            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <img
                                src="https://www.svgrepo.com/show/475656/google-color.svg"
                                alt="google"
                                className="w-5 h-5"
                            />
                            Continue with Google
                        </button>

                        {/* Github Signin */}
                        <button
                            type="button"
                            // onClick={handleGithubSignin}
                            className="flex items-center justify-center gap-3 bg-white text-gray-800 px-5 py-2 rounded-lg w-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
                        >
                            <img
                                src="https://img.icons8.com/fluency/48/github.png"
                                alt="google"
                                className="w-5 h-5"
                            />
                            Continue with Github
                        </button>

                        <p className="text-center text-sm text-white/80 mt-3">
                            Don’t have an account?{" "}
                            <Link
                                to="/auth/register"
                                className="text-green-800 font-bold hover:text-white underline"
                            >
                                Register
                            </Link>
                        </p>
                        </form>

                    </div>
                </div>
            </MyContainer>
        </div>
    );
};

export default Login;