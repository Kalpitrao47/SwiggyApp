import React from 'react'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <div>
    <div className='flex justify-center'>
      <img src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0'/>
    </div>
    <div className='flex justify-center'>
    <h1 className='font-bold text-xl text-gray-600'>Your Cart is Empty</h1>
    </div>
    <div className='flex justify-center mt-10'>
    <Link to="/"><button className='bg-orange-600 p-3 rounded-md text-white'>See Restaurants Near You</button>
    </Link>
    </div>
    </div>
  )
}

export default Cart

