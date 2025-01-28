import React from 'react'
import HobbyCard from './HobbyCard'
import gardning from "../assets/gardning.jpg"
import painting from "../assets/painting.jpg"
import reading from "../assets/reading.jpg"
import sewing from "../assets/sewing.jpg"
import paperQuiling  from "../assets/paperQuiling.jpg"
import cooking  from "../assets/cooking.jpg"

function Hobbies() {
  return (
    <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ml-10 mr-10'>
        
      <HobbyCard
      image={gardning}
      hobby="Gardning"
      />
      <HobbyCard
      image={sewing}
      hobby="Sewing"
      />
      <HobbyCard
      image={painting}
      hobby="Painting"
      />
       <HobbyCard
      image={reading}
      hobby="Reading"
      />
      <HobbyCard
      image={cooking}
      hobby="Cooking"
      />
      <HobbyCard
      image={paperQuiling}
      hobby="Paper Quiling"
      />
    </div>
  )
}

export default Hobbies
