import React from 'react';
import founderimg from '../../assest/gallary/whyusimg.png'

function Whyus() {
    return (
        <div className='why content pt-5  d-flex align-items-center justify-content-center'>
            <div className='col-8 d-flex  '>
                <div className='col-7 p-5  d-flex justify-content-between flex-column'>
                    <h2 className='heading2 ' style={{ color: ' #4F1000' }}>Why Us</h2>
                    <p >Lorem ipsum dolor sit amet consectetur. Ultrices ut a donec quis amet in integer sed cras. Risus risus vivamus tellus habitant magna pulvinar tempor est.s</p>
                    <button className='btn btn-warning col-4'  >Hire Us</button>
                </div>
                <div className='col-5 p-1'>
                    <img src={founderimg} alt='' className='img-fluid' />
                </div>
            </div>

        </div>
    )
}

export default Whyus
