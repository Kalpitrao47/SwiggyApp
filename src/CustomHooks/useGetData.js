import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { getSwiggyData } from '../utils/dataSlice';

const useGetData = () => {
    const dispatch = useDispatch();

    async function getData (){
        const data = await fetch ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.2813939&lng=72.8788707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        // console.log("Variouscards",json.data.cards);
        dispatch(getSwiggyData(json.data.cards));
    }

    useEffect(()=>{
        getData();
    },[])
}

export default useGetData