import React from 'react'
import projectsBg from '../../../imges/Projects Page.svg'

function work() {
    return (
        <div className='w-full min-h-screen bg-cover bg-center bg-no-repeat mt-[172px] relative '>

            <img src={projectsBg} alt="Projects" className="w-full h-auto block" />
            <div className=' absolute text-white top-[-200px] left-[-300px] w-full h-full flex justify-center items-center text-6xl font-bold'>
                My recent <span className='text-[#00ADB5]'> &nbsp;works </span></div>
            <div className=' absolute top-[360px] left-[80px]'>
                <ul className='flex gap-5'>
                    <li className='text-white bg-[#00ADB5] px-6 py-1 rounded-full'>All</li>
                    <li className='text-[#ffff] bg-[#2D333B] px-6 py-1 rounded-full'>UI / UX</li>
                    <li className='text-[#ffff] bg-[#2D333B] px-6 py-1 rounded-full'>Web Design</li>
                    <li className='text-[#ffff] bg-[#2D333B] px-6 py-1 rounded-full'>Logo Design</li>
                </ul>
            </div>
            <div className='absolute flex justify-between  top-[450px] left-[40px] gap-5'>
                <img src="./imges/card-1.svg" alt="card-1" />
                <img src="./imges/card-2.svg" alt="card-2" />
                <img src="./imges/card-3.svg" alt="card-3" />
            </div>

        </div>
    )
}

export default work