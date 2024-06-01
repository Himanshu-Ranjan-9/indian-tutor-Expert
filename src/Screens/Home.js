import React from 'react'
import Navbar from '../component/Navbar/Navbar'
import PosterCard from '../component/PosterCard'
import SubjectCard from '../component/Subjects/SubjectCard'
import OurPrevilage from '../component/OurPrevilage/OurPrevilage'
import Services from '../component/OurServices/Services'
import Footer from '../component/Footer/Footer'
import LowerCardContainer from '../component/Card-poster/LowerCardContainer'
import Banner from '../component/New Contents/Banner/Banner'
import ContactUs from '../component/Contact  us/ContactUs'

function Home() {
  return (
    <div className='w-full'>
    
         <Navbar>

      </Navbar>

      <Banner/>
     

      <PosterCard/>
       <SubjectCard/>

   <ContactUs/> 
      <LowerCardContainer/>
      <OurPrevilage/>
      <Services/>
     <Footer/> 
       
      
    </div>
  )
}

export default Home
