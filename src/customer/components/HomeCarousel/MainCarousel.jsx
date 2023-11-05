import React from 'react';
import {MainCrouselData} from './MainCrouselData';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const MainCarousel = ()=> {

    const items = MainCrouselData.map((item)=> <img className= 'cursor-pointer'role='presentation' src={item.image} alt=""/>)

  return (
    <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={1000}
    infinite
/>
  )
}

export default MainCarousel