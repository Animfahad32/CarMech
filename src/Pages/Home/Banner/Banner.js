import React from 'react';
import { Carousel } from 'react-bootstrap';
import firstBanner from '../../../images/banner/banner1.jpg';
import secondBanner from '../../../images/banner/banner2.jpg';
import thirdBanner from '../../../images/banner/banner3.jpg';

const Banner = () => {
    return (
        <>
         <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={firstBanner}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>AS DAYS GET SHORTER, CHECK VEHICLE LIGHTS, WIPERS</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={secondBanner}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>WE FIX IT</h3>
     
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={thirdBanner}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>BE AWARE! KEEP YOUR VEHICLE SAFE, DEPENDABLE AND ON THE ROAD LONGER.</h3>
      
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>   
        </>
    );
};

export default Banner;