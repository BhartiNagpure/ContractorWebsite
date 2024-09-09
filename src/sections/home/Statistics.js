

import React from 'react';
import Counter from '../../components/count/CountIncrease';
import Stasiticimg from '../../assest/bgImage/statiscticsimg.png';

function Statistics() {
    return (
        <div className='my-5 d-flex align-items-center justify-content-center flex-column'>
            <h1 className='heading'>Our Statistics</h1>
            <div className="content d-flex align-items-center justify-content-center">
                <div className="col-3 text-center">
                    <div>
                        <Counter end={10} duration={2000} />
                        <p>Year of Experience</p>
                    </div>
                    <div>
                        <Counter end={26} duration={2000} />
                        <p>Business Partners</p>
                    </div>
                </div>
                <div className="col-6">
                    <img src={Stasiticimg} alt="Statistics" className='img-fluid' />
                </div>
                <div className="col-3 text-center">
                    <div>
                        <Counter end={10} duration={2000} />
                        <p>Countries of World Wide</p>
                    </div>
                    <div>
                        <Counter end={67} duration={2000} />
                        <p>Product Installed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Statistics;