import React from 'react'
import useGetData from '../CustomHooks/useGetData'
import { useSelector } from 'react-redux';

const Home = () => {
  const data = useSelector((store) => store.data.data);
  console.log("Home_Data",data);
  useGetData();

  

  return (
    <div>
      Home
    </div>
  )
}

export default Home
