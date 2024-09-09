import React from 'react';
import logo from '../assest/logo/footerlogo.png';
import { FiPhone } from "react-icons/fi";
import { HiOutlineMapPin } from "react-icons/hi2";
import { RiArrowDropRightLine } from "react-icons/ri";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiYoutube } from "react-icons/ci";

function Footer() {
    return (
        <div className='footer'>
            <div className=' col-10 container d-flex py-3 justify-content-center align-items-center flex-column'>
                <div className='col-12 d-flex  justify-content-between'>
                    <div className='col-4 '>
                        <div className='text-center'>
                            <img src={logo} alt='footer logo' className='img-fluid col-6' />
                        </div>
                        <p className='p-1 footer-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </p>
                        <div>
                            <div className='d-flex align-items-center my-2'>
                                <FiPhone className='foot-icon col-2' />
                                <span>+123 456 7890</span>
                            </div>
                            <div className='d-flex align-items-center my-2'>
                                <HiOutlineMapPin className='foot-icon col-2' />
                                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do </span>
                            </div>
                        </div>
                    </div>
                    <div className='d-flex  align-items-center col-7'>
                        <div className='col-6 p-5'>
                            <h6 className='px-2'>About Us</h6>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                        </div>
                        <div className='col-6 p-5'>
                            <h6 className='px-2'>Services</h6>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                            <div className='my-2'>
                                <RiArrowDropRightLine className='icon' />
                                <span>Lorem ipsum dolor</span>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className='col-12 d-flex'>
                    <div className='col-6'>
                        <CiFacebook className='foot-icon m-0' />
                        <CiInstagram className='foot-icon m-0' />
                        <CiLinkedin className='foot-icon m-0' />
                        <CiTwitter className='foot-icon m-0' />
                        <CiYoutube className='foot-icon m-0' />
                        <PiWhatsappLogoThin className='foot-icon m-0' />
                    </div>
                    <div className='col-3'>
                        <p className='footsubtext'>Terms & condition </p>
                    </div>
                    <div className='col-3'>
                        <p className='footsubtext '> Privacy policy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
