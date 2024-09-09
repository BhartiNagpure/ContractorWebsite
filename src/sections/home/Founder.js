import React from 'react';
import founderimg from '../../assest/bgImage/founderimg.png'

function Founder() {
    return (
        <div className=' founder p-4 d-flex my-5 align-items-center justify-content-center flex-column'>
            <h1 className='heading text-white '>Meet the Founder</h1>
            <div className='content d-flex align-items-center justify-content-center container col-12'>
                <div className='col-6 p-5 '>
                    <img src={founderimg} alt='founder' className='img-fluid col-10' />
                </div>
                <div className='col-6'>
                    <h1 className='heading2 mb-4'>Rahul Choudhary</h1>
                    <p className='text-white'>Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est. Enim fusce aliquam enim pellentesque venenatis ullamcorper phasellus massa vitae.</p>
                </div>
            </div>
        </div>
    )
}

export default Founder
