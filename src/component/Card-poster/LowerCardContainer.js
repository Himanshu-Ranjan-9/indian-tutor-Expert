import React from 'react'
import LowerCardposter from './LowerCardposter'
import "./LowerCardContainer.css"

function LowerCardContainer() {
  return (
    <div className='cards'>
          <div className='LowerCardContainer w-full '>
      <LowerCardposter/>
      <LowerCardposter/>
      <LowerCardposter/>

      </div>

      
    </div>
  )
}

export default LowerCardContainer
