import React from 'react';
import { FcIdea } from 'react-icons/fc';

const HowWorks = () => {
    return (
        <div>
            <section class="py-16">
                <div class="max-w-7xl mx-auto px-6 text-center">
                    <h2 class="text-3xl text-black font-bold mb-2">How it works</h2>
                    <p className='text-gray-400'>Learn new skills effortlessly connect, learn, and grow with verified instructors.</p>

                    <div class="mt-25 grid gap-8 sm:grid-cols-1 md:grid-cols-3">





                        <div class="relative text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-2xl p-8 shadow-lg">
                            <div class="absolute -top-16 left-40  bg-green-300 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md">
                                <FcIdea size={40}></FcIdea>
                            </div>

                            <h3 class="font-semibold text-lg mb-2">Sign up for free</h3>
                            <p class="text-white text-sm">
                                Join our community in minutes. Tell us what skills you’re interested in — music, coding, fitness, or languages and we will personalize your experience.
                            </p>
                        </div>




                        <div class="relative text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-2xl p-8 shadow-lg">
                           <div class="absolute -top-16 left-40  bg-green-300 text-white w-20 h-20 flex items-center justify-center rounded-full shadow-md">
                                <FcIdea size={40}></FcIdea>
                            </div>

                            <h3 class="font-semibold text-lg mb-2">Explore top-rated skills</h3>
                            <p class="text-white text-sm">
                                Browse hundreds of hands-on skill listings from verified instructors. Compare prices, read reviews, and choose what fits your goals and schedule.
                            </p>
                        </div>




                        <div class="relative text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-2xl p-8 shadow-lg">
                            <div class="absolute -top-16 left-40  bg-green-300  w-20 h-20 flex items-center justify-center rounded-full shadow-md">
                                <FcIdea size={40}></FcIdea>
                            </div>

                            <h3 class="font-semibold text-lg mb-2">Book your session</h3>
                            <p class="text-white text-sm">
                                Pick a time that works for you and securely book your session. Instant confirmation, flexible scheduling, and direct chat with your instructor.
                            </p>
                        </div>


                    </div>
                </div>
            </section>





        </div>
    );
};

export default HowWorks;