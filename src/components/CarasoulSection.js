import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import slide1 from './../Assets/images/slide1.png';
import slide2 from './../Assets/images/slide2.png';
import slide3 from './../Assets/images/slide3.png';
import slide4 from './../Assets/images/slide4.png';

function CarasoulSection() {
  return (
    <div className='container pt-5 pb-3' style={{ textAlign: 'center' }}>
      <h2
        className='wow fadeInLeft  mb-3'
        style={{ fontWeight: '700', color: ' #181f2a' }}
      >
        Top picks from the past
      </h2>
      <Carousel
        centerMode
        dynamicHeight={600}
        // dots={false}
        selectedItem={1}
        showStatus={false}
        // showIndicators={false}
        showThumbs={false}
        centerSlidePercentage={60}
      >
        <div>
          <img
            src={slide1}
            alt=''
            style={{ maxheight: '600px', objectFit: 'fill' }}
          />
          {/* <p className='legend'>Legend 1</p> */}
        </div>
        <div>
          <img
            src={slide2}
            alt=''
            style={{ maxheight: '600px', objectFit: 'fill' }}
          />
          {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
          <img
            src={slide3}
            alt=''
            style={{ maxheight: '600px', objectFit: 'fill' }}
          />
          {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
          <img
            src={slide4}
            alt=''
            style={{ maxheight: '600px', objectFit: 'fill' }}
          />
          {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
          <img
            src={slide2}
            alt=''
            style={{ maxheight: '600px', objectFit: 'fill' }}
          />
          {/* <p className='legend'>Legend 2</p> */}
        </div>
        <div>
          <img
            src={slide3}
            alt=''
            style={{ maxheight: '600px', objectFit: 'fill' }}
          />
          {/* <p className='legend'>Legend 3</p> */}
        </div>
      </Carousel>
    </div>
  );
}

export default CarasoulSection;
