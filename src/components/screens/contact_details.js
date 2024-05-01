import React from 'react'
import Profile2 from '../Assets/Profile (3).jpg'
import Property1 from '../Assets/image_processing20220305-7813-19y4c1j.jpg'
import Property2 from '../Assets/image_processing20220225-29217-hv4dvv.jpg'

import './contact_details.css';

function contact_details() {
  return (
    <div className='contact_details'>
        <div className='header'>
            <h1>Contact Details</h1>
            <img src={require("../Assets/Vector.svg").default} alt='vector' />
        </div>
        <div className='profiles'>
            <img src={Profile2} alt='profile2'/>
            <h1>Michael</h1>
            <span>online</span>
        </div>
        <div className='media'>
            <div className='section'>
                <div className='left'>
                    <h6>Media</h6>
                    <span>14 pictures</span>
                </div>
                <div className='right'>
                    <p>view all</p>
                </div>
            </div>
            <div className='images'>
                <img src={Property1} alt='property1' />
                <img src={Property2} alt='property2' />
                <img src={Property1} alt='property1' />
                <p>+11</p>
            </div>
        </div>
        <div className='files'>
            <div className='section'>
                <div className='left'>
                    <h6>Files</h6>
                    <span>12 files</span>
                </div>
                <div className='right'>
                    <p>view all</p>
                </div>
            </div>
            <div className='content'>
                <div className='docs'>
                    <div className='project'>
                        <img src={require("../Assets/Component 96.svg").default} alt='doc'/>
                        <p>Brief Project Real Es..</p>
                    </div>
                    <div className='context'>
                        <div className='left'>
                            <p>DOCS</p>
                        </div>
                        <div className='right'>
                            <p>32kb</p>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <p>12:45PM</p>
                </div>
            </div>
            <div className='content'>
                <div className='docs'>
                    <div className='project'>
                        <img src={require("../Assets/Component 96.svg").default} alt='doc'/>
                        <p>Brief Project Real Es..</p>
                    </div>
                    <div className='context'>
                        <div className='left'>
                            <p>DOCS</p>
                        </div>
                        <div className='right'>
                            <p>32kb</p>
                        </div>
                    </div>
                </div>
                <div className='time'>
                    <p>12:45PM</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default contact_details