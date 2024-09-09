import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assest/gallary/aboutgalaryimg.png';
import profile from '../../assest/gallary/profile.png';
import line from '../../assest/bgImage/Group 22.png'
import BrownButton from '../../components/buttons/BrownBUtton'

const Work = () => {
    const properties = [
        {
            id: 1,
            title: 'Tata Motors',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.',
            imageUrl: img1,
            profileUrl: profile
        },
        {
            id: 2,
            title: 'Tata Motors',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.',
            imageUrl: img1,
            profileUrl: profile
        },
        {
            id: 3,
            title: 'Tata Motors',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.',
            imageUrl: img1,
            profileUrl: profile
        },
        {
            id: 4,
            title: 'Tata Motors',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.',
            imageUrl: img1,
            profileUrl: profile
        },
        {
            id: 5,
            title: 'Tata Motors',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.',
            imageUrl: img1,
            profileUrl: profile
        },
        {
            id: 6,
            title: 'Tata Motors',
            description: 'Lorem ipsum dolor sit amet consectetur. Faucibus arcu nec vitae justo in nunc.',
            imageUrl: img1,
            profileUrl: profile
        },
    ];

    return (
        <div>
            <div className="work p-5 my-5 d-flex flex-wrap align-items-center justify-content-center flex-column">
                <div className='d-flex align-items-center justify-content-enter flex-column'>
                    <h1 className="heading" >Featured Work</h1>
                    <img className='img-fulid' src={line} alt='' />
                </div>
                <div className=' d-flex col-10 py-5'>
                    <div className='col-3'>
                        <p className='mb-0' style={{ color: '#895F00' }}>Filter all</p>
                        <div style={{ borderBottom: '1px solid #895F00', width: '50px' }} />
                    </div>
                    <div className=' content col-9 d-flex align-items-center justify-content-around'>
                        <p>Web Development</p>
                        <p>Ecommerce Development</p>
                        <p>UI/UX Design</p>
                    </div>

                </div>

                <Row>
                    {properties.map(property => (
                        <Col md={4} key={property.id} className="d-flex align-items-stretch mb-4 py-5">
                            <Card className="shadow-sm" style={{ borderRadius: '15px', overflow: 'hidden' }}>
                                <Card.Img variant="top" src={property.imageUrl} />
                                <Card.Body style={{ backgroundColor: '#4F1000', color: '#FFFFFF' }}>
                                    <div className="d-flex justify-content-center position-relative">
                                        <img
                                            src={property.profileUrl}
                                            alt="Profile"
                                            className="rounded-circle position-absolute"
                                            style={{ width: '100px', height: '100px', top: '-60px', }}
                                        />
                                    </div>
                                    <Card.Title className="text-center mt-5" style={{ fontSize: '22px' }}>{property.title}</Card.Title>
                                    <p className="text-center " style={{ fontWeight: '300' }}>{property.description}</p>
                                    <div className="d-flex justify-content-center">
                                        <BrownButton backgroundColor='#FADB36' color='black' >Learn More</BrownButton>
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
                <BrownButton backgroundColor='#4F1000' color='white' >Explore More</BrownButton>
            </div>
        </div>
    );
};

export default Work;
