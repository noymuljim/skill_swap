import React from 'react';
import { FcIdea } from 'react-icons/fc';

const HowWorks = () => {
    return (
        <div>
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h2 className="text-3xl text-black font-bold mb-2">How it works</h2>
                    <p className="text-gray-400 mb-16">
                        Learn new skills effortlessly. Connect, learn, and grow with verified instructors.
                    </p>

                    <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3">
                        {/* Card 1 */}
                        <div className=" text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-2xl p-4 shadow-lg">
                            
                           
                            <h3 className="font-semibold text-lg my-5">Sign up for free</h3>
                            <p className="text-white text-sm">
                                Join our community in minutes. Tell us what skills you’re interested in — music, coding, fitness, or languages — and we will personalize your experience.
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="relative text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-2xl p-4 shadow-lg">
                            
                            <h3 className="font-semibold text-lg my-5">Explore top-rated skills</h3>
                            <p className="text-white text-sm">
                                Browse hundreds of hands-on skill listings from verified instructors. Compare prices, read reviews, and choose what fits your goals and schedule.
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="relative text-white bg-gradient-to-tr from-blue-500 to-purple-400 rounded-2xl p-4 shadow-lg">
                           
                            <h3 className="font-semibold text-lg my-5">Book your session</h3>
                            <p className="text-white text-sm">
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
