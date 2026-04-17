import React from 'react'
import Parent from './task1/Parent'
import MemoTask2 from './task2/MemoTask2'
import MemoTask3 from './task3/MemoTask3'
import MemoTask4 from './task4/MemoTask4'
import MemoTask5 from './task5/MemoTask5'
import MemoTask6 from './task6/MemoTask6'

const MemoIntro = () => {
  return (
    <div>
      {/* <Parent></Parent> */}
      {/* <MemoTask2></MemoTask2> */}
      {/* <MemoTask3></MemoTask3> */}
      {/* <MemoTask4></MemoTask4> */}
      {/* <MemoTask5></MemoTask5> */}
      <MemoTask6></MemoTask6>
    </div>
  )
}

export default MemoIntro


 
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