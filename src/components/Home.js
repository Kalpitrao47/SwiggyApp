import React from "react";
import useGetData from "../CustomHooks/useGetData";
import { useSelector } from "react-redux";
import TopResCard from "./TopResCard";
import Restaurants from "./Restaurants";
import BestResCities from "./BestResCities";
import MobileApp from "./MobileApp";
import ResCards2 from "./ResCards2";

const Home = () => {
  const data = useSelector((store) => store.data.data);
  console.log("Home_Data", data);

  const ImageCardsId = data[0]?.card?.card?.imageGridCards?.info;
  // console.log("ImageCardsId", ImageCardsId);
  useGetData();

  return (
    <React.Fragment>
    <div className="w-[80%] m-auto">
        <h1 className="text-2xl p-10 font-bold">
          Hey {data[0]?.card?.card?.header?.title}
        </h1>
      </div>
      
    <div className=" invisible-scrollbar overflow-scroll w-[80%] m-auto">
      <div className="flex  w-[70%] ">
      {ImageCardsId?.map((image) => {
        console.log(image.action.link)
        return (
          // <div className="w-[50%] h-56  border border-black">
            <img className="h-56 cursor-pointer"
              src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${image.imageId}`}
            />
          // </div>
        );
      })}
      </div>
    </div>

      {/*<ResCards2/>*/}
      {/*<Restaurants/>*/}
      <div className="text-2xl font-bold p-5 w-[80%] m-auto">
        <h1>
        {data[1]?.card?.card?.header?.title}
        </h1>
      </div>
      <TopResCard/>
      <BestResCities/>
      <MobileApp/>
      
    </React.Fragment>
  );
};

export default Home;
