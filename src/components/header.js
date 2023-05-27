'use client';

import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai'
import Link from 'next/link';

const Header = () => {
    const [ isSideMenuOpen, setIsSideMenuOpen ] = useState(false);

    const menuButtonHandler = (e) => {
        e.preventDefault();
        setIsSideMenuOpen(!isSideMenuOpen);
    }

    return (
        <div className="fixed flex w-full justify-center bg-white">
            <div className="flex flex-row justify-between items-center w-[95%] border-b border-b-black">
                <Link href="/">
                    <div className="flex flex-row items-center space-x-2 md:space-x-4 transform hover:scale-105">
                        <img src="/images/icon.png" className="w-12 md:w-24"/>
                        <span className="text-lg font-semibold md:text-2xl">Class Tracker</span>
                    </div>
                </Link>

                <AiOutlineMenu className={`text-xl transition-all transform hover:scale-105 hover:cursor-pointer md:text-4xl ${isSideMenuOpen && 'rotate-90'}`} onClick={menuButtonHandler}/>
            </div>
            <div className={`absolute sideMenu transition-all bg-white border-l border-black p-12 pr-20 top-full ${isSideMenuOpen? 'right-0' : '-right-80'}`}>
                <h1 className='font-bold text-2xl'>Class Tracker</h1>
                <ul className='mt-3 text-xl space-y-3'>
                    <Link href="/absenteeism">
                        <li className='font-semibold hover:underline'>Absenteeism</li>
                    </Link>
                    <li className='font-semibold text-gray-300'>Grades</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;