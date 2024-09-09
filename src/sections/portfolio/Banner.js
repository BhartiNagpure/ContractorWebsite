import React from 'react';
import img1 from '../../assest/gallary/gimg1.jpg';
import img2 from '../../assest/gallary/gimg2.jpg';
import img3 from '../../assest/gallary/gimg3.jpg';
import img4 from '../../assest/gallary/gimg4.jpg';
import img5 from '../../assest/gallary/gimg5.jpg';
import img6 from '../../assest/gallary/gimg6.jpg';
import img7 from '../../assest/gallary/gimg7.jpg';
function Banner() {

    return (
        <div className='services mb-5 pb-5'>
            <div className="d-flex justify-content-end ">
                <div className="col-8" style={{ backgroundColor: '#FDC200', height: '100vh' }}>

                </div>
            </div>
            <div className='container service-banner align-items-center d-flex justify-content-center'>
                <div className='col-10 d-flex align-items-center'>
                    <div className='col-6 px-3'>
                        <h2 className='heading2 text-black'>Our Portfolio</h2>
                        <p className='text-black'>Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est.s</p>
                    </div>
                    <div className='col-6'>
                        <div className="gimages" >
                            <div div class="d-flex justify-content-end ">
                                <div class="col-md-4 img1 p-1  " >
                                    <img src={img1} class="img-fluid" alt />
                                </div>
                                <div class="col-md-4 p-1">
                                    <img src={img2} class="img-fluid" alt="..." />
                                </div>
                            </div>
                            <div div class="d-flex justify-content-end">
                                <div class="col-md-6 img2 p-1 ">
                                    <img src={img3} class="img-fluid" alt="..." />
                                </div>
                                <div class="col-md-4 p-1">
                                    <img src={img4} class="img-fluid" alt="..." />
                                </div>
                            </div>
                            <div div class="d-flex justify-content-end">
                                <div class="col-md-2 p-1">
                                    <img src={img5} class="img-fluid" alt="..." />
                                </div>
                                <div class="col-md-4 p-1">
                                    <img src={img6} class="img-fluid" alt="..." />
                                </div>
                                <div class="col-md-4 p-1">
                                    <img src={img7} class="img-fluid" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Banner
