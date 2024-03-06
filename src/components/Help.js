import React from "react";

const Help = () => {
  return (
    <div className="flex flex-col m-auto">
      <div>
        <img
          className="h-72 w-72 rounded-3xl p-2"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_262/empty-orders-image_acrbbw"
        />
      </div>
      <div>
        <h1 className="text-xl font-semibold text-gray-600">No Orders</h1>
        <h2 className="text-lg font-medium text-gray-500">You haven't placed any orders yet</h2>
      </div>
    </div>
  );
};

export default Help;
