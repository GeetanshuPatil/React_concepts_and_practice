import React from "react";

const RevenueWidget = ({ revenue }) => {
  console.log("Revenue Widget Rendered");

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <h2 className="text-lg font-semibold">Revenue</h2>
      <p className="text-2xl text-purple-600">{revenue}</p>
    </div>
  );
};

export default React.memo(RevenueWidget);