import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const MobileApp = () => {
    const data = useSelector((store)=>store.data.data);
    // console.log("Mobile appp data",data[9]?.card?.card);



  return (
    <div>
      <div className='flex justify-center bg-gray-300 p-5'>
      <h1 className='text-3xl font-bold text-gray-700 mr-2 mt-4'>{data[9]?.card?.card?.title}</h1>
        <div className='flex'>
        <Link to={data[9]?.card?.card?.androidAppLink}>
        <img className='h-20 mr-5' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/play_store.png'/>
        </Link>
        <Link to={data[9]?.card?.card?.iosAppLink}>
        <img className='h-20' src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/app_store.png'/>
        </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
