import PropertyCard from '@/components/PropertyCard'
import React from 'react'

const array = [1,2,3,4,5,6,7,8,9,10];

const Home = () => {
  return (
    <div className='p-4 property-list'>
      {
        array.map((arr) => (
          <PropertyCard />
        ))
      }
    </div>
  )
}

export default Home