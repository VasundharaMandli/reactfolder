import React from 'react';
import './style.css';
import pic from './sea1.jpg';
import pic2 from './img1.jpg';

export default function Courses() {
  return (
    <div className="services">
      <div className="one">
        <img src={pic} alt='Scenic sea view' />
      </div>
      <div className='two'>
        <img src={pic2} alt='environmental image'width={550} />
        <p style={{color:'white',lineHeight:'30px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod magnam asperiores dicta totam deserunt aliquid ab! Soluta animi ullam exercitationem culpa quae modi velit itaque, officia aliquid quaerat iste. Nemo, quod minima repellendus in tempora totam quo laborum vitae quis quibusdam aspernatur labore incidunt eius culpa? Itaque, laboriosam. deserunt molestiae fugiat, quaerat consequatur libero suscipit esse vel excepturi! Repellendus, aliquid assumenda? Repellat laboriosam deleniti blanditiis ducimus amet consequuntur quoe, labore tenetur, maiores in velit? Consectetur ea animi animi quibusdam aliquam incidunt nobis error officiis iusto nemo sit nihil, totam, voluptates, ullam aspernatur quo cupiditate cumque! Eligendi, nisi nesciunt quia hic aliquam sapiente itaque consequatur?</p>


      </div>
    </div>
  );
}
