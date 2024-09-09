
import React from 'react';
import servicebg from '../../assest/bgImage/servicebg.png'

const cardData = [
    {
        imgSrc: servicebg,
        title: 'Web Design',
        text: 'Crafting memorable user experiences is at the heart of our web design services.'
    },
    {
        imgSrc: servicebg,
        title: 'Web Design',
        text: 'Crafting memorable user experiences is at the heart of our web design services.'
    },
    {
        imgSrc: servicebg,
        title: 'Web Design',
        text: 'Crafting memorable user experiences is at the heart of our web design services.'
    },
    {
        imgSrc: servicebg,
        title: 'Web Design',
        text: 'Crafting memorable user experiences is at the heart of our web design services.'
    },

];

const Service = () => {
    return (
        <div className='pb-5'>
            <div className=" p-5 servicecard d-flex flex-wrap flex-column align-items-center justify-content-center">
                <h1 className='heading text-white '>Our Service</h1>
                <div className=' col-10 d-flex align-items-center justify-content-center flex-wrap p-3'>
                    {cardData.map((card, index) => (
                        <div key={index} className='col-6 p-2'>
                            <div className="card shadow border-0  flex-column justify-content-end " >
                                <div className="body p-3 ">
                                    <h5 className="card-title text-white">{card.title}</h5>
                                    <p className="card-text text-white">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Service;