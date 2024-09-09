import React from 'react';
import Button from 'react-bootstrap/Button';

const BrownButton = ({ children, backgroundColor, color, ...props }) => {
    return (
        <Button
            style={{ backgroundColor, color, borderRadius: '25px', border: 'none', fontWeight: 'bold', padding: '10px 20px ' }}
            {...props}
        >
            {children}
        </Button >
    );
};

export default BrownButton;