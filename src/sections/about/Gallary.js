import React from 'react';
import { Card, Button, Container, Row, Col } from 'react-bootstrap';
import img1 from '../../assest/gallary/aboutgalaryimg.png';
import profile from '../../assest/gallary/profile.png';
import BrownButton from '../../components/buttons/BrownBUtton'

const PropertyGallery = () => {
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
    ];

    return (
        <Container className=" my-5 container d-flex flex-wrap align-items-center justify-content-center">
            <h1 className="heading" >PROPERTY GALLERY</h1>
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
        </Container>
    );
};

export default PropertyGallery;
