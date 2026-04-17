import React from "react";

const SalesWidget = ({ sales }) => {
  console.log("Sales Widget Rendered");

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <h2 className="text-lg font-semibold">Sales</h2>
      <p className="text-2xl text-blue-600">{sales}</p>
    </div>
  );
};

export default React.memo(SalesWidget);