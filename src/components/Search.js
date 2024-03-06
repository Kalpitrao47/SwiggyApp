import React, { useState } from 'react'
import {useEffect} from  'react';
import { IoIosSearch } from "react-icons/io";

const Search = () => {
  const [searchData,setSearchData] = useState(null);
  console.log("searchData",searchData);

  const ImageId = searchData?.data.cards[1].card.card.gridElements.infoWithStyle.info
  console.log("ImageId",ImageId)

  async function getSearchData(){
    const data = await fetch ("https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=19.0748&lng=72.8856");
    const json = await data.json();
    setSearchData(json);
  }

  useEffect(()=>{
    getSearchData();
  },[])


  return (
    <div className='flex flex-col mt-20'>
      {/*<input className='w-1/2 m-auto p-3 border border-black rounded-lg text-xl font-normal' placeholder='Search For Restaurants and Food'/>*/}
      <div className="relative p-1 flex align-center items-center justify-center text-xl mt-2 mb-3">
                <div className="flex justify-center items-center border bg-white border-gray-200 rounded-xl p-4 active:outline-2 focus:outline-2 focus:outline-red-500 shadow-sm shadow-gray-200 w-[30vw]">
                  
                  <input
                    type="text"
                    placeholder="Search For Restaurants and Food"
                    // onChange={(e) => setSearch(e.target.value)}
                    className="bg-transparent w-full pr-5 outline-none"
                  />
                  <IoIosSearch  className="mr-2 text-gray-700" />
                </div>
              </div>
      <div className='m-auto text-xl font-semibold text-gray-700 p-2'>{searchData?.data?.cards[1]?.card.card.header.title}</div>
      <div className="flex w-full">
    {ImageId?.map((image) =>{
        return (
          <div className="flex m-auto">
          <img className="h-56 cursor-pointer"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${image.imageId}`}
            />
            </div>
        )
      })}
            </div>
    </div>
  )
}

export default Search
