import React from 'react'

function Address() {
    return (
        <div className='address d-flex align-items-center justify-content-center flex-column'>
            <h1 className='heading'> Address & Location</h1>
            <div className='d-flex align-items-center justify-content-center' >
                <div className='col-5 p-5'>
                    <h2>Address & Location</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <p>1234 Street, City, State, Zip</p>
                    <p>Phone: (123) 456-7890</p>
                    <p>Email:  info@example.com</p>
                </div>
                <div className='col-6 text-center'>
                    <iframe className='col-8' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59636.81291020968!2d74.72636246785892!3d20.90021414380817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdec50e8f4ad7fb%3A0x21b2183626c4f156!2sAchintya%20Developer&#39;s%20Green%20Space%20apartment!5e0!3m2!1sen!2sin!4v1725356806401!5m2!1sen!2sin" height="300px" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div >
    )
}

export default Address
