import React from 'react'

function Left() {

    return (
        <div >
            <div className='relative'>
                <h2 className=' font-bold text-[64px] text-[#EEEEEE] leading-[90px]'>
                    <a href="#">  About<span className='text-[#00ADB5]'> me </span></a>
                    <img className='absolute top-0 left-80' src="./imges/lightbulb.svg" alt="lightbulb.svg" />
                </h2>
            </div>



            <p className='text-[#EEEEEE] text-[18px] leading-[40px]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Nunc vulputate libero et velit interdum, ac aliquet odio mattis.<br />
                Class aptent taciti sociosqu ad litora torquent per conubia<br />
                nostra, per inceptos himenaeos. Curabitur tempus urna at<br />
                turpis condimentum lobortis.... Read more
            </p>
            <div className='relative'>
                <div >
                    <img className='absolute top-10 left-55' src="./imges/arrow-2.svg" alt="arrow-2.svg" />
                </div>
            </div>



        </div >
    )
}

export default Left