import React from 'react';
import abouimg from '../../assest/bgImage/aboutimg.png'

function About() {
    return (
        <div className='container d-flex flex-wrap mb-5 align-items-center justify-content-center'>
            <div className='  col-12 about-div d-flex flex-wrap  '>
                <div className='col-6'>
                    <h1 className='heading'>About Us</h1>
                    {/* <hr className='border-Bottom' /> */}
                    <p>Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est. Enim fusce aliquam enim pellentesque venenatis ullamcorper phasellus massa vitae.</p>
                    <div className=''>
                        <div className='row mb-3 blockdiv'>
                            <div className='col-6 d-flex align-items-center '>
                                <div className='block '></div>
                                <p className='mb-0 ms-2 '>Good Planning</p>
                            </div>
                            <div className='col-6 d-flex align-items-center '>
                                <div className='block'></div>
                                <p className='mb-0 ms-2 '>Good Maintenance</p>
                            </div>
                        </div>
                        <div className='row blockdiv'>
                            <div className='col-6 d-flex align-items-center'>
                                <div className='block'></div>
                                <p className='mb-0 ms-2 '>Awesome Staff</p>
                            </div>
                            <div className='col-6 d-flex align-items-center '>
                                <div className='block '></div>
                                <p className='mb-0 ms-2 '>Quality Construction</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-6 d-flex align-items-center justify-content-center'>
                    <img src={abouimg} alt='aboutimg' className='img-fluid col-10 rounded' />
                </div>
            </div>
        </div>
    )
}

export default About
