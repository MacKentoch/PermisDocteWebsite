'use strict';

import React      from 'react';
import {
  Carousel,
  CarouselItem
 }                from 'react-bootstrap';

const ImagesCarousel = (props) => {
  const imagesCarousel = props.carousel.map((image, index) => {
    return (
      <CarouselItem
        index={index}
        key={'imgCarousel_' + index + '_container'}>
        <img
          key={'imgCarousel_' + index}
          src={image.link}
          alt={image.alt}
          className="img-responsive center-block"
          width={308}
          height={642}
          alt={image.name}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      id="imageCarousel"
      nextIcon={null}
      prevIcon={null}
      pauseOnHover={false} >
      { imagesCarousel }
    </Carousel>
  );
};

ImagesCarousel.propTypes = {
  carousel  : React.PropTypes.arrayOf(React.PropTypes.shape({
    link  : React.PropTypes.string.isRequired,
    alt   : React.PropTypes.string.isRequired,
    name  : React.PropTypes.string.isRequired
  })).isRequired
};

export default ImagesCarousel;
