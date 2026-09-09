import React from 'react'
import Right from './right'
import Left from './left'


function Hero() {
    return (
        <div className='flex justify-between gap-[0px ] pt-30  pr-[6vh] pl-[6vh] items-center'>
            <Left />
            <Right />

        </div>
    )
}

export default Hero