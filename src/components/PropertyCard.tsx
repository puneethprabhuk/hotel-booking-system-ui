import React from 'react'
import './propertycard.css'
import { GoStarFill } from "react-icons/go";
import { MdOutlineCurrencyRupee } from "react-icons/md";



const PropertyCard = () => {
  return (
    <div className='property-card'>
      <div className='property-card-container'>
        <div className='property-card-image'>
          <img src="https://a0.muscache.com/im/pictures/miso/Hosting-1345956125003785522/original/4c3504fc-8cf2-4a37-b5ed-472156d7693e.jpeg?im_w=720" alt="" />
        </div>
        <div className='property-card-details'>
          <div className='basic-details'>
            <h2>Bangalore Plaza 5 star</h2>
            <div className='ratings'>
              <GoStarFill />
              <span>
                4.78 (589)
              </span>
            </div>
          </div>
          <p className='description'>
            Lorem ipsum dolor sit amet consectetur.
          </p>
          <div className='price-details'>
              <MdOutlineCurrencyRupee />
              1200
              <span>&nbsp;per night</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PropertyCard