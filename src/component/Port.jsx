
import React from 'react';
import upline from '../assets/fit.webp';
import shop from '../assets/shop1.jpg';
import Qr from '../assets/qr1.jpg';


const Port = () => {
    const Portfolios = [
        {
            id: 1,
            src: upline
        },
        {
            id: 2,
            src: shop
        },
        {
            id: 3,
            src: Qr
        },
    ];

    return (
        <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:min-h-screen py-20'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>

                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 justify-center'>
                    {Portfolios.map(({ id, src }) => (
                        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                            <img src={src} alt={`portfolio-${id}`} className='rounded-md duration-200 hover:scale-105' />
                            <div className='flex items-center justify-center'>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Port;

