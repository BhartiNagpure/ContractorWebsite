import React from 'react'

function Form() {
    return (
        <div style={{ marginTop: '100px' }}>
            <div className='form contact my-5 d-flex align-items-center justify-content-center flex-column'>
                <h1 className='heading'>Start a Conversation</h1>
                <div className='mt-5 card col-8 px-4 py-5'>
                    <form className='d-flex flex-wrap'>
                        <div className='mb-3 col-6 p-1'>
                            <input type='text' className='form-control' id='name' placeholder='Your Name' />
                        </div>
                        <div className='mb-3 col-6 p-1'>
                            <input type='email' className='form-control' id='email' placeholder='Your Email' />
                        </div>
                        <div className='mb-3 col-6 p-1'>
                            <input type='text' className='form-control' id='address' placeholder='Address' />
                        </div>
                        <div className='mb-3 col-6 p-1'>
                            <input type='email' className='form-control' id='services' placeholder='services' />
                        </div>
                        <div className='mb-3 col-12 p-1'>
                            <textarea className='form-control' id='message' rows='5' placeholder='Message.....'></textarea>
                        </div>
                        <div className='col-12 d-flex align-items-center justify-content-center'>
                            <button type='submit' className='btn col-3'>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
