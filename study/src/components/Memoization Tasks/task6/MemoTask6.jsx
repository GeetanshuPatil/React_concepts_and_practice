import React, { useMemo, useState } from "react";

const MemoTask6 = () => {
  let [count, setCount] = useState(0);

  const users = useMemo(
    () => [
      { name: "Rahul", age: 32 },
      { name: "Prasad", age: 28 },
      { name: "Amit", age: 40 },
    ],
    []
  );

  let sortedUsers = useMemo(() => {
    console.log("sorting users...");

    return [...users].sort((a, b) => a.age - b.age);
  }, [users]);
  return (
    <div className="min-h-screen flex flex-col items-center gap-6 p-6 bg-gray-100">
      <h2 className="text-xl font-semibold">Sorted Users</h2>

      <div className="bg-white shadow-md rounded-lg p-4 w-64 space-y-2">
        {sortedUsers.map((user, index) => (
          <div key={index} className="border-b pb-1">
            {user.name} ({user.age})
          </div>
        ))}
      </div>

      {/* Re-render test */}
      <button
        onClick={() => setCount(count + 1)}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Re-render: {count}
      </button>
    </div>
  );
};

export default MemoTask6;

// Task 16 – Sorting Large Data
// Sort a list of users by age.
// Input:
// [
//  {name:"Rahul", age:32},
//  {name:"Prasad", age:28},
//  {name:"Amit", age:40}
// ]
// Expected sorted output:
// Prasad
// Rahul
// Amit
