import React from 'react'
import MainCrousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <div>
      <MainCrousel />
      <div className='space-y-10 py-20 flex flex-col justify-center px-6 lg:px-10'>
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />
        <HomeSectionCarousel />

      </div>
    </div>
  )
}

export default HomePage