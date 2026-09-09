import React from 'react'


function Header() {
    return (


        <div className='flex justify-between w-[100%] items-center '>
            <div className='text-2xl font-[600] text-amber-50 leading-0.5 '>
                <a href="#"> <p>SaulDesign</p></a>

            </div>


            <div>
                <ul className='  flex justify-center gap-7 text-[#EEEEEE] ' >
                    <li>
                        <a href="#">Home</a></li>
                    <li><a href="#">About Me</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>




    )
}

export default Header