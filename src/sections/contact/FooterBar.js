import React from 'react';
import { FaSquareFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

function FooterBar() {
    return (
        <div className='address my-5 col-12 container footerbar p-5 d-flex  justify-content-center'>
            <div className='col-3'>
                <h3>Email</h3>
                <p>XYZ@gmail.com</p>
            </div>
            <div className='col-3'>
                <h3>Phone</h3>
                <p>+91 7087-XX-2058</p>
            </div>
            <div className='col-3'>
                <h3>Follow</h3>
                <div className='d-flex'>
                    <FaSquareFacebook className='foot-icon text-black' />
                    <FaSquareInstagram className=' foot-icon text-black' />
                </div>
            </div>
        </div>
    )
}

export default FooterBar
