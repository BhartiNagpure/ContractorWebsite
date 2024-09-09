import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

function CountIncrease({ end, duration }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    useEffect(() => {
        if (inView) {
            let start = 0;
            const increment = end / (duration / 100);

            const counter = setInterval(() => {
                start += increment;
                if (start >= end) {
                    clearInterval(counter);
                    setCount(end);
                } else {
                    setCount(Math.ceil(start));
                }
            }, 100);
        }
    }, [inView, end, duration]);

    return (
        <h2 className='heading' ref={ref}>{count}+</h2>
    );
}

export default CountIncrease;