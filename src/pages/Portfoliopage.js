import React from 'react'
import Banner from '../sections/portfolio/Banner'
import Testimonial from '../sections/home/Testimonial'
import Work from '../sections/portfolio/Work'
import Statisctics from '../sections/portfolio/Statisctics'

function Portfoliopage() {
    return (
        <div>
            <Banner />
            <Statisctics />
            <Work />
            <Testimonial />
        </div>
    )
}

export default Portfoliopage
