import React from 'react';
import { Link } from "react-scroll";

const Herosection = () => {
  return (
    <section className='hero'>
      <img src="/restaurant.jpg" alt="restaurant" />
      <div className="item">
        <h3>Dream Maker</h3>
        <div>
          <h1>Where Every Detail Becomes a Memory</h1>
          <p>Delivering seamless events that exceed expectations, every time</p>
          <Link to="contact" spy={true} smooth={true} duration={500}>
          BOOK NOW
          </Link>
        </div>

      </div>

    </section>
  )
}

export default Herosection