import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
function HomeSectionCarousel() {
    const responsive = {
        0: { items: 1 },
        720: { items: 4 },
        1024: { items: 5 },
    };
    const items=[1,1,1,1,1].map((item)=><HomeSectionCard/>)
  return (
    <div className='relative px-4 lg:px-8'>
        <div className='relative p-5 '>
         <AliceCarousel
    items={items}
    responsive={responsive}
    disableButtonsControls
    autoPlay
    autoPlayInterval={5000}
    infinite
/>
<button varient="cntained" className="z-50" sx={{position:'absolute', top:"8rem", right:"0rem", transform:"translateX(50%) rotate(90deg)"}} aria-label='next'>
    <ChevronLeftIcon/>
</button>
    </div>
    </div>
  )
}

export default HomeSectionCarousel