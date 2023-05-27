import { FaUserMinus } from 'react-icons/fa';
import { BsStars, BsMotherboardFill } from 'react-icons/bs';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-full flex-grow flex flex-col py-12 space-y-8 md:space-y-16">
      <div className='w-full flex flex-row justify-between items-center px-[2.5%]'>
        <h1 className="text-lg font-semibold md:text-3xl">Know your <br/> students</h1>
        <p className="max-w-[15rem] text-sm md:max-w-3xl md:text-2xl">Welcome to our student monitoring web page! Stay in control with our user-friendly tools for continuous student tracking.</p>
      </div>

      <div className="flex flex-row">
        <img src="/images/happy_classroom.jpg" className="w-[50%] aspect-[3/1] object-cover"/>
        <div className="bg-gray-600 p-4 w-[45%] md:w-[20%]">
          <p className="text-lg text-white md:text-2xl">Help them reach their full potential</p>
        </div>
      </div>

      <div className='flex flex-col justify-between md:ml-auto px-[2.5%] md:px-0'>
        <h1 className="text-lg font-semibold md:text-3xl">Know their behavior</h1>
        <div className="flex flex-col md:flex-row">

          <div className='min-w-[18rem] bg-gray-700 text-white py-5 pl-8 pr-16 space-y-2 min-h-8rem md:min-h-[12rem]'>
            <FaUserMinus className='text-4xl md:text-5xl'/>
            <Link href="/absenteeism"><h2 className='mt-3 font-semibold text-2xl md:text-4xl'>Absenteeism</h2></Link>
          </div>

          <div className='min-w-[18rem] bg-gray-500 text-white py-5 pl-8 pr-16 min-h-8rem md:min-h-[12rem]'>
            <BsStars className='text-4xl md:text-5xl'/>
            <h2 className='mt-3 font-semibold text-2xl md:text-4xl'>Grades</h2>
            <p className='text-sm'>Coming soon</p>
          </div>

          <div className='min-w-[18rem] bg-gray-400 text-white py-5 pl-8 pr-16 min-h-8rem md:min-h-[12rem]'>
            <BsMotherboardFill className='text-4xl md:text-5xl'/>
            <h2 className='mt-3 font-semibold text-2xl md:text-4xl'>And More</h2>
            <p className='text-sm'>Coming soon</p>
          </div>

        </div>
      </div>

      <p className=" text-center md:text-xl">Behold, our group's final masterpiece!</p>
    </main>
  )
}
