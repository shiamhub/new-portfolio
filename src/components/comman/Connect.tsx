import React from 'react'
import { HiOutlineMail } from 'react-icons/hi';
import { FiPhone } from 'react-icons/fi';
import { SlLocationPin } from 'react-icons/sl';

export default function Connect() {
    return (
        <div className='container'>
            <div className='lg:grid space-y-6 lg:space-y-0 grid-cols-3 gap-8 items-center bg-neutral lg:p-24 p-12 my-24 rounded-xl text-white bg-slate-400'>
                <div>
                    <HiOutlineMail className='text-7xl'></HiOutlineMail>
                    <p>Email: skshiam129@gmail.com</p>
                </div>
                <div>
                    <FiPhone className='text-5xl'></FiPhone>
                    <p>Phone Number: 01568235129</p>
                </div>
                <div>
                    <SlLocationPin className='text-5xl'></SlLocationPin>
                    <p>Address: Rupsha, Khulna</p>
                </div>

            </div>
        </div>
    )
}
