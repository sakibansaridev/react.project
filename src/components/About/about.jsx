import React from 'react'
import Left from './left'
import Right from './right'


function About() {
    return (
        <div className="flex gap-6 pt-[15%] justify-between">
            <Left />
            <Right />
        </div>
    )
}

export default About