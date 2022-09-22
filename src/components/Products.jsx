import React from 'react';
import Productbox from './Productbox';
import pic1 from '../images/s1.png';
import pic2 from '../images/s2.png';

function Products() {
  return (
    <div id='products'>
        <h1>CHOOSE & ENJOY</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum obcaecati ratione aperiam sequi fugiat, ullam doloremque eum architecto temporibus et provident. Culpa nemo pariatur aliquam suscipit placeat et similique aut.</p>
        <div className='a-containerr'>
            <Productbox image={pic1} title="LOREM IPSUM DOLOR" />
            <Productbox image={pic2} title="LOREM IPSUM DOLOR" />
            <Productbox image={pic1} title="LOREM IPSUM DOLOR" />

        </div>
    </div>
  )
}

export default Products;
