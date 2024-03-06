import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
  return (
    <div>
    <div className='flex justify-center'>
    <img className='mt-10  h-80' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/empty_404_3x_rgdw87'/>
  </div>
  <div className="flex justify-center">
        <h1 className="font-bold text-xl text-gray-600">Page Not Found</h1>
      </div>
      <div className="flex justify-center">
        <h1 className=" text-gray-600">Uh-oh! Looks like the page you are trying to access, doesn't exist. Please start afresh.</h1>
      </div>
      <div className="flex justify-center mt-10">
        <Link to="/">
          <button className="font-bold bg-orange-500 p-3 rounded-md text-white">
            Go Home
          </button>
        </Link>
      </div>
      
    </div>
  )
}

export default PageNotFound
