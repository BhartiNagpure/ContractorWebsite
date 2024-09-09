import React from 'react'
import Banner from '../sections/home/Banner'
import About from '../sections/home/About'
import Projects from '../sections/home/Projects'
import Statistics from '../sections/home/Statistics'
import Founder from '../sections/home/Founder'
import Testimonial from '../sections/home/Testimonial'
import Contactpage from '../sections/home/Contact'

function Homepage() {
    return (
        <div>
            <Banner />
            <About />
            <Projects />
            <Statistics />
            <Founder />
            <Testimonial />
            <Contactpage />
        </div>
    )
}

export default Homepage
