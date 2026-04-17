import React, { useState } from "react";
import SalesWIdget from "./widgets/SalesWIdget";
import UserWidget from "./widgets/UserWidget";
import RevenueWidget from "./widgets/RevenueWidget";
import NotificationWidget from "./widgets/NotificationWidget";

const Dashboard = () => {
  const [sales, setSales] = useState(100);
  const [users, setUsers] = useState(50);
  const [revenue, setRevenue] = useState(1000);
  const [notifications, setNotifications] = useState(5);

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-2xl font-bold text-center">Dashboard</h1>

      {/* Buttons to simulate updates */}
      <div className="flex flex-wrap gap-4 justify-center items-center p-4 bg-white shadow-md rounded-xl">
        <button
          onClick={() => setSales(sales + 10)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition active:scale-95"
        >
          📈 Update Sales
        </button>

        <button
          onClick={() => setUsers(users + 1)}
          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition active:scale-95"
        >
          👤 Update Users
        </button>

        <button
          onClick={() => setRevenue(revenue + 100)}
          className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg font-medium transition active:scale-95"
        >
          💰 Update Revenue
        </button>

        <button
          onClick={() => setNotifications(notifications + 1)}
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-medium transition active:scale-95"
        >
          🔔 Update Notifications
        </button>
      </div>

      {/* Widgets */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SalesWIdget sales={sales} />
        <UserWidget users={users} />
        <RevenueWidget revenue={revenue} />
        <NotificationWidget notifications={notifications} />
      </div>
    </div>
  );
};

export default Dashboard;
