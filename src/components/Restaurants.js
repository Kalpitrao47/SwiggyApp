import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Restaurants = () => {
  const [postData, setPostData] = useState({});
  console.log("postData",postData);

  // const handlePostRequest = async () => {
  //   try {
  //     const response = await fetch('https://www.swiggy.com/dapi/restaurants/list/update', {
  //       method: 'POST',
  //       // headers: {
  //       //   'Content-Type': 'application/json',
  //       // },
  //       body: JSON.stringify(postData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Failed to fetch data');
  //     }
  //     const responseData = await response.json();
  //     setPostData(responseData);
  //     console.log('Response data:', responseData);
  //   } catch (error) {
  //     console.error('Error:', error.message);
  //   }
  // };

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // You can customize the condition for triggering the POST request
  //     if (window.scrollY > 1500) {
  //       // You may want to debounce the function to avoid too many requests
  //       handlePostRequest();
  //     }
  //   };

  //   // Attach the event listener to the scroll event
  //   window.addEventListener('scroll', handleScroll);

  //   // Clean up the event listener when the component is unmounted
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [postData]); 



  const data = useSelector((store) => store.data.data);
  // console.log("Restaurants", data);
  const RestaurantsCardsTitle = data[2]?.card.card.title;
  // console.log(RestaurantsCardsTitle);
  const RestaurantsCards =
    data[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
  // console.log("RestaurantsCards", RestaurantsCards);
  // const RestaurantsCardsWithOffer = data[4]?.card?.card.gridElements.infoWithStyle.restaurants
  // console.log("RestaurantsCardsWithOffer",RestaurantsCardsWithOffer);

  return (

    <div className="p-5 w-[80%] m-auto ">
      <h1 className="text-2xl p-2 font-bold mt-5">{RestaurantsCardsTitle}</h1>      
      <div className="flex flex-row justify-center ">
        <div className="grid grid-cols-3">
          {RestaurantsCards?.map((cldImageId) => {
            // console.log(cldImageId.info);
            return (
              <div className="flex flex-col hover:scale-90 ease-in-out duration-300 p-4">
                <div className="flex flex-col relative ">
                  <img
                    className="h-72 w-full rounded-3xl p-2"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cldImageId?.info.cloudinaryImageId}`}
                  />
                  {/*<div className="absolute font-extrabold font- text-white m-4 mt-60 bg-black bg-opacity-50 rounded-lg p-1">{cldImageId.info.aggregatedDiscountInfoV3.header} {cldImageId.info.aggregatedDiscountInfoV3.subHeader}</div>
                */}
                </div>

                <div>
                  <h1 className="ml-2 font-bold text-xl pr-8 text-gray-700">
                    {cldImageId.info.name}
                  </h1>
                </div>

                <div className="ml-2 flex font-bold pr-2 text-gray-700">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" role="img" aria-hidden="true" strokeColor="rgba(2, 6, 12, 0.92)" fillColor="rgba(2, 6, 12, 0.92)"><circle cx="10" cy="10" r="9" fill="url(#StoreRating20_svg__paint0_linear_32982_71567)"></circle><path d="M10.0816 12.865C10.0312 12.8353 9.96876 12.8353 9.91839 12.865L7.31647 14.3968C6.93482 14.6214 6.47106 14.2757 6.57745 13.8458L7.27568 11.0245C7.29055 10.9644 7.26965 10.9012 7.22195 10.8618L4.95521 8.99028C4.60833 8.70388 4.78653 8.14085 5.23502 8.10619L8.23448 7.87442C8.29403 7.86982 8.34612 7.83261 8.36979 7.77777L9.54092 5.06385C9.71462 4.66132 10.2854 4.66132 10.4591 5.06385L11.6302 7.77777C11.6539 7.83261 11.706 7.86982 11.7655 7.87442L14.765 8.10619C15.2135 8.14085 15.3917 8.70388 15.0448 8.99028L12.7781 10.8618C12.7303 10.9012 12.7095 10.9644 12.7243 11.0245L13.4225 13.8458C13.5289 14.2757 13.0652 14.6214 12.6835 14.3968L10.0816 12.865Z" fill="white"></path><defs><linearGradient id="StoreRating20_svg__paint0_linear_32982_71567" x1="10" y1="1" x2="10" y2="19" gradientUnits="userSpaceOnUse"><stop stop-color="#21973B"></stop><stop offset="1" stop-color="#128540"></stop></linearGradient></defs></svg>
                  {cldImageId.info.avgRatingString}{" "}
                  {cldImageId.info.sla.slaString}
                </div>

                <div className="ml-2 text-gray-400 pr-2">
                  {cldImageId.info.cuisines.join(", ")}
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
