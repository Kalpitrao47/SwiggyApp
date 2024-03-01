import React from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const Restaurants = () => {
  const data = useSelector((store) => store.data.data);
  console.log("Restaurants", data);
  const RestaurantsCardsTitle = data[2]?.card.card.title;
  console.log(RestaurantsCardsTitle);
  const RestaurantsCards =
    data[4]?.card.card.gridElements.infoWithStyle.restaurants;
  console.log("RestaurantsCards", RestaurantsCards);
  return (
    <div className="p-5 w-[80%] m-auto">
      <h1 className="text-2xl p-2 font-bold">{RestaurantsCardsTitle}</h1>
      <div className="flex flex-row justify-center ">
        <div className="grid grid-cols-4 ">
          {RestaurantsCards?.map((cldImageId) => {
            console.log(cldImageId.info.cuisines);
            return (
              <div className="flex flex-col hover:scale-90 ease-in-out duration-300">
                <div className="flex">
                  <img
                    className="h-72 w-72 rounded-2xl p-2 "
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cldImageId?.info.cloudinaryImageId}`}
                  />
                </div>
                <div>
                  <h1 className="font-bold text-gray-700">
                    {cldImageId.info.name}
                  </h1>
                </div>
                <div className="font-bold text-gray-700">
                  <StarBorderIcon />
                  {cldImageId.info.avgRatingString}{" "}
                  {cldImageId.info.sla.slaString}
                </div>
                <div className="text-gray-400">
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
