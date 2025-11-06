import React, { use, useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router';
import signinLogo from '../assets/signin1.png'
import { AuthContext } from '../Provider/AuthProvider';

const Login = () => {
    const [error,setError]=useState('')
    const { signIn } = use(AuthContext)
    const [show, setShow] = useState(false)
    const location=useLocation()
    //console.log(location)
    const navigate=useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        //console.log('login')
        const form = e.target

        const email = form.email.value;
        const password = form.password.value;
        // console.log({ email, password })

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                navigate(`${location.state? location.state : '/'}`)

            })
            .catch((error) => {
                const errorCode = error.code;
              //  const errorMessage = error.message;
               // alert(errorCode,errorMessage)
               setError(errorCode)
            });



    }



    return (
        <div className=" flex rounded-2xl items-center justify-center ">


          <div className='w-11/12 mx-auto'>
           <div className=" flex justify-center z-10 gap-10 p-6 lg:p-10 text-white">
                    {/* Left section */}
                    <img src={signinLogo} alt="" />

                    {/* Login card */}
                    <div className="w-full max-w-md backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-2xl p-8">



                        <form onSubmit={handleLogin} className="space-y-5">
                            <h2 className="text-2xl font-semibold mb-2 text-center text-white">
                                Login Your Account
                            </h2>
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

                            <div className='flex flex-col'>
                                <button
                                    className="hover:underline cursor-pointer"
                                    // onClick={handleForgetPassword}
                                    type="button"
                                >
                                    Forget password?
                                </button>

                                <button type='submit' className="btn">
                                    Login
                                </button>
                                {error && <p className='text-orange-500'>{error}</p>}
                            </div>


                            {/* Divider */}
                            <div className="flex items-center justify-center gap-2 my-2">
                                <div className="h-px w-16 bg-white/30"></div>
                                <span className="text-sm text-white/70">or</span>
                                <div className="h-px w-16 bg-white/30"></div>
                            </div>






                            {/* Google Signin */}
                            <button
                                type="submit"
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

                            

                            <p className="text-center text-sm text-white/80 mt-3">
                                Don’t have an account?{" "}
                                <Link
                                    to="/auth/register"
                                    className="text-white font-bold hover:text-white underline"
                                >
                                    Register
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