import React from 'react';
import projectimg from '../../assest/bgImage/projectimg.png'

function Projects() {
    return (
        <div className='projectdiv py-5 d-flex align-items-center justify-content-centers flex-column'>
            <h1 className='heading text-center mb-5'>Our Projects</h1>
            <div className='project-subdiv d-flex align-items-center justify-content-center  '>
                <div className='col-8 '>
                    <img src={projectimg} alt='project img' className='img-fluid rounded' />
                </div>
            </div>
        </div>
    )
}

export default Projects;
