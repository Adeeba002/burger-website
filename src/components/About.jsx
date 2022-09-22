import React from 'react';
import aboutimage from '../images/about.png';

function About() {
  return (
    <div id='about'>
        <div className='about-text'>
            <h1>UPCOMING EVENTS</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus cupiditate ad nihil tenetur nam qui, dolore maiores quisquam ullam odio mollitia aspernatur at dolores quasi fugiat voluptatum eveniet velit! Provident!
            </p>
            <button>Read More</button>
        </div>
        <div className='about-image'>
            <img src={aboutimage} alt='about'/>
        </div>
      
    </div>
  )
}

export default About;
