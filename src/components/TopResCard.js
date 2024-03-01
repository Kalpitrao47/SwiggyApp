import React from "react";
import { useSelector } from "react-redux";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const TopResCard = () => {
  const data = useSelector((store) => store.data.data);
  console.log("ResCardsData", data[1]);
  const TopResCards = data[1]?.card.card.gridElements.infoWithStyle.restaurants;
  //   console.log("TopResCards",TopResCards[0]?.info?.cloudinaryImageId);
  // console.log("TopResCards", TopResCards);
  return (
    // <div>
    // <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${TopResCards[0]?.info.cloudinaryImageId}`}/>
    // </div>

    <React.Fragment>
      <div className="flex flex-row justify-center p-10 w-[80%] m-auto">
        <div className="grid grid-cols-4 ">
          {TopResCards?.map((cldImageId) => {
            console.log(cldImageId.info.cuisines)
            return (
              <div className="flex flex-col hover:scale-90 ease-in-out duration-300">
              <div className="flex">
                <img
                  className="h-72 w-72 rounded-2xl p-2 "
                  src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cldImageId?.info.cloudinaryImageId}`}
                />
                </div>
                <div><h1 className="font-bold text-gray-700">{cldImageId.info.name}</h1></div>
                <div className="font-bold bg flex">
                <div>
                <StarBorderIcon/>
                </div>
                <div className="text-gray-700">
                {cldImageId.info.avgRatingString}{" "}{cldImageId.info.sla.slaString}
                </div>
                </div>
                <div className="text-gray-400">{(cldImageId.info.cuisines).join(", ")}</div>
                </div>
                );
          })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopResCard;
