import React from 'react'
import { Link } from 'react-router-dom'

const LoginPage = () => {
  return (
    <div>
      <h1>Login Page</h1><br />
      <form>
        <div>
            {/* <input type="text" placeholder='type username' />
            <input type="password" placeholder='type password' /> */}
            <Link to="/home" className='bg-blue-600 text-white rounded-2xl p-2 m-1'>Log In</Link>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
