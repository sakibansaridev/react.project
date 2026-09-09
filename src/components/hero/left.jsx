import React from 'react'

function Left() {
    return (
        <div className='relative'>
            <img className='absolute top-[42px] w-[14%] left-[-78px] z-100' src="/right-arrow.svg" alt="arrow-imges" />
            <h2 className='font-bold text-[90px] text-[#EEEEEE] leading-[90px]'>
                <a href="#">  CREATIVE UI <br />
                    <span className='text-[#00ADB5]'>  DESIGNER</span></a>

            </h2>
            <div className='flex gap-3 pt-[48px]'>
                <button className='bg-[#00ADB5] text-white px-4 py-2 rounded-full font-bold'> <a href="#">Hire me</a></button>
                <button className='bg-[#393E46] font-[500] text-white px-4 py-2 rounded-full font-bold'>  <a href="#">Download CV</a></button>
            </div>

        </div>
    )
}

export default Left