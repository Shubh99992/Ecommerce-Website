import React from 'react'
import MainCrousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarousel from '../../components/HomeSectionCarousel/HomeSectionCarousel'

function HomePage() {
  return (
    <div>
        <MainCrousel/>
        <div>
           <HomeSectionCarousel/>
        </div>
    </div>
  )
}

export default HomePage