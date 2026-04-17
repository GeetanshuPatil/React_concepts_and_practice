import React from "react";

const NotificationWidget = ({ notifications }) => {
  console.log("Notification Widget Rendered");

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <h2 className="text-lg font-semibold">Notifications</h2>
      <p className="text-2xl text-red-600">{notifications}</p>
    </div>
  );
};

export default React.memo(NotificationWidget);