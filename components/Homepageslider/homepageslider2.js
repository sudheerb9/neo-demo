import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from 'reactstrap';
import Image from 'next/image'
import image1 from '../../public/images/slider/3.jpg'
import profilePic from "../../public/images/team/1.jpg";

const items = [
  {
    src: '/../../public/images/slider/3.jpg',
    altText: 'Slide 1',
  },
  {
    src: '/../../public/images/slider/3.jpg',
    altText: 'Slide 2',
    caption: 'Slide 2'
  },

];

const Homepageslider = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
        <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
        >
          {/*<Image src={profilePic} alt="Principal image" layout="responsive" />*/}
          <Image src={item.src} alt={item.altText} layout="fill"/>
          {/*<div className={'carousel-caption fvgb d-none d-md-block'}>*/}
          {/*  <h5 className={'animated bounceInDown cartext' }>Create an Awesome Website Today </h5>*/}
          {/*  <p className={'animated bounceInLeft cartext'}> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam justo neque, <br/>*/}
          {/*    aliquet sit amet elementum vel, vehicula eget eros. Vivamus arcu metus, mattis <br/>*/}
          {/*    sed sagittis at, sagittis quis neque. Praesent.</p>*/}
          {/*  <div className={'row vbh'}>*/}
          {/*    <div className={'btn btn-success animated bounceInUp'}> Apply Online</div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </CarouselItem>
    );
  });

  return (
      <Carousel
          activeIndex={activeIndex}
          next={next}
          previous={previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
  );
}

export default Homepageslider;
