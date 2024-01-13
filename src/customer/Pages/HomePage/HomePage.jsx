import React from 'react'
import MainCrousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'
import { mens_kurta } from "../../../Data/mens_kurta";

function HomePage() {
  return (
    <div>
      <MainCrousel />
      
      <div className='space-y-10 py-20 flex flex-col justify-center px-5 lg:px-10'>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Kurta"}/>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Shoes"}/>
        <HomeSectionCarousel data={mens_kurta} SectionName={"Men's Chapal"}/>
      </div>
    </div>
  )
}

export default HomePage