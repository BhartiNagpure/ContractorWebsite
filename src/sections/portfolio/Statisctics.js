import React from 'react';
import Counter from '../../components/count/CountIncrease';

function Statisctics() {
    return (
        <div className='content d-flex my-5 p-5 align-items-center justify-content-around'>

            <div >
                <Counter end={10} duration={2000} />
                <p>Year of Experience</p>
            </div>
            <div >
                <Counter end={26} duration={2000} />
                <p>Business Partners</p>
            </div>
            <div >
                <Counter end={10} duration={2000} />
                <p>Countries of World Wide</p>
            </div>
            <div>
                <Counter end={67} duration={2000} />
                <p>Product Installed</p>
            </div>

        </div>
    )
}

export default Statisctics
