import React from "react";

const UserWidget = ({ users }) => {
  console.log("User Widget Rendered");

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-center">
      <h2 className="text-lg font-semibold">Users</h2>
      <p className="text-2xl text-green-600">{users}</p>
    </div>
  );
};

export default React.memo(UserWidget);