import React from 'react';
import BrownButton from '../../components/buttons/BrownBUtton';
// import banner from '../assest/bgImage/Mask group.png'

export default function Banner() {
    return (
        <>
            <div className="d-flex justify-content-end ">
                <div className="col-8" style={{ backgroundColor: '#FDC200', height: '100vh' }}>

                </div>
            </div>
            <div className='container banner align-items-center d-flex justify-content-center'>
                <div className='col-8'>
                    <h1 style={{ fontWeight: '800' }}>Weaving Dreams into Code</h1>
                    <p className='col-8'>Beyond Websites Crafting Digital Journeys that Inspire, Engage, and Convert</p>
                    <BrownButton backgroundColor='#895F00' color='#FFFFFF'>Get In Touch</BrownButton>
                </div>
            </div>
        </>
    )
}
