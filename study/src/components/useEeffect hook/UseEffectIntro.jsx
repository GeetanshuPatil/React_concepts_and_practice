import React from 'react'
import Task1 from './tasks/Task1'
import Task2 from './tasks/Task2'
import Task3 from './tasks/Task3'
import Task4 from './tasks/Task4'
import Task5 from './tasks/Task5'
import Task6 from './tasks/Task6'
import Task7 from './tasks/Task7'
import Task8 from './tasks/Task8'

const UseEffectIntro = () => {
  return (
    <div>
      {/* <Task1></Task1> */}
      {/* <Task2></Task2> */}
      {/* <Task3></Task3> */}
      {/* <Task4></Task4> */}
      {/* <Task5></Task5> */}
      {/* <Task6></Task6> */}
      {/* <Task7></Task7> */}
      <Task8></Task8>
    </div>
  )
}

export default UseEffectIntro

//! 1️⃣ Task: Console Message on Counter Change

// Create a counter.
// Whenever the counter changes, print a message in the console.

// Requirements

// Button Increase

// Button Decrease

// useEffect runs when count changes

// Log "Counter updated"

// ! 2️⃣ Task: Change Page Title

// Create an input field.

// Requirements

// User types their name

// When name state changes, update the browser tab title

// Example:

// Hello Geetanshu

// Hint:

// document.title
//! 3️⃣ Task: Show Message When Toggle Changes

// Create a toggle button.

// Requirements

// ON / OFF state

// When state changes:

// console log "Toggle changed"

//! 4️⃣ Task: Password Strength Checker

// Create a password input.

// Requirements

// Store password in state

// When password changes:

// Check length

// Show message

// Example:

// Weak password
// Strong password

// Use useEffect to detect password change.

//! 5️⃣ Task: Live Character Counter

// Create a textarea.

// Requirements

// Store text in state

// When text changes:

// Show character count

// useEffect should run whenever text updates.

// Example UI:

// Characters: 35
//! 6️⃣ Task: Background Color Changer

// Create 3 buttons:

// Red
// Green
// Blue
// Requirements

// Store selected color in state

// When color changes:

// Update page background

// Hint:

// document.body.style.backgroundColor
//! 7️⃣ Task: Timer Reset on Button Click

// Create a timer using state.

// Requirements

// Timer increases every second

// When reset button is clicked:

// timer resets to 0

// useEffect logs "Timer reset"

//! 8️⃣ Task: API Call When Search Changes

// Create a search input.

// Requirements

// Store search value in state

// When search value changes:

// call API

// fetch matching results

// Example API:

// https://jsonplaceholder.typicode.com/users

// Use useEffect dependency.

//! 9️⃣ Task: Shopping Cart Total

// Create cart items with prices.

// Requirements

// State:

// items = [10, 20, 30]

// When items change:

// calculate total using useEffect

// Display:

// Total: ₹60

// 🔟 Task: Dark Mode Toggle

// Create dark mode toggle.

// Requirements

// darkMode state

// When state changes:

// change page theme

// Example:

// bg-black text-white