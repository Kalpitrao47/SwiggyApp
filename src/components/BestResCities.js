import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';

const BestResCities = () => {
    const data = useSelector((store)=>store.data.data);
    // console.log("BestResCitiesData",data)
    const Cities = data[6]?.card?.card?.brands
    // console.log("Cities",Cities)
  return (
    <div className="p-5 w-[80%] m-auto ">
        <h1 className="text-2xl p-2 font-bold mt-5">{data[6]?.card?.card.title}</h1>
        <div className='flex justify-center'>
        <div className='grid grid-cols-4 '>
        {Cities?.map((cities)=>{
            return (
                <Link to={cities.link}>
                <div>
                <div className='m-5 cursor-pointer'></div>
                <div className='p-5 m-2 border font-semibold text-gray-600 border-gray-500 rounded-xl'>{cities.text}</div>
                </div>
                </Link>
                )
        })}
        </div>
        </div>
    </div>
  )
}

export default BestResCities
