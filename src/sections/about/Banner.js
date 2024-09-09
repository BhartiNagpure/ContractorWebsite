import React from 'react';
import img1 from '../../assest/gallary/aboutimg.png';

function Banner() {

    return (
        <div className='services mb-5'>
            <div className="d-flex justify-content-end ">
                <div className="col-8" style={{ backgroundColor: '#FDC200', height: '100vh' }}>

                </div>
            </div>
            <div className='container service-banner  align-items-center d-flex justify-content-center'>
                <div className='col-10 d-flex align-items-center justify-content-center'>
                    <div className='col-6 px-3'>
                        <h2 className='heading2 text-black'>Attract customers like
                            never before</h2>
                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est.s</p>
                    </div>
                    <div className='col-5  p-2 aboutimg'>
                        <img src={img1} alt='img' className='img-fluid' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
