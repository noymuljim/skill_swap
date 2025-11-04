import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import { Link, useLoaderData, useParams } from 'react-router';
import Footer from '../components/Footer';

const SkillDetails = () => {
    const data = useLoaderData();
    const { id } = useParams()

  //  console.log(data, id)
    const [skills, setSkills] = useState({})

    useEffect(() => {
        const skillDetails = data.find(singleSkill => singleSkill.id == id)
        setSkills(skillDetails)
    }, [id, data])

    return (
        <div>
            <header className=''>
                <Navbar></Navbar>
            </header>





            <div className='w-11/12 mx-auto '>
                <h2 className='font-bold text-3xl pt-10'>About this Skill</h2>
                <p className='text-gray-400 mb-5'>{skills.slogan}</p>
            </div>
            <main className="w-11/12 mx-auto flex flex-col md:flex-row gap-5">
              
                <div className="flex-1 p-5 rounded-2xl mb-5 bg-base-200">
                    {skills.image && (
                        <img
                            src={skills.image}
                            alt={skills.skillName}
                            className="w-full h-[350px] object-cover md:h-[600px] mb-4 rounded"
                        />
                    )}
                    <h1 className="font-bold text-xl mb-2">Description</h1>
                    <p>{skills.description}</p>
                </div>


                <div className="w-full md:w-1/3 self-start sticky top-20 space-y-5 p-5 ">
                    <div>
                        <h1 className="font-semibold text-2xl">{skills.skillName}</h1>
                        <p>{skills.providerName}</p>
                    </div>
                    <div>
                        <p className='text-2xl'>price: <span className='text-green-500'>{skills.price}</span>$</p>
                        <p>{skills.providerEmail}</p>
                        <p className='text-orange-500 font-semibold'>Available Slots: {skills.slotsAvailable}</p>
                    </div>

                    <div className="divider divider-success mt-10 text-2xl">Book Section</div>

                    <div className='bg-green-200'>

                        <form className='p-4 space-y-4'>
                            <div>
                                <label className="block text-sm mb-1">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Enter your name"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm mb-1">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter email"
                                    className="input input-bordered w-full"
                                />
                            </div>
                            <button type='submit' className='w-full mt-5 btn btn-outline hover:bg-secondary hover:text-white'>Submit</button>



                        </form>
                    </div>
                </div>


            </main>

            <div className='flex justify-center'>
                <Link to={`/category/${skills.category_id}`} className='btn btn-primary my-4 px-20 rounded-3xl hover:bg-secondary'>Explore More</Link>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default SkillDetails;