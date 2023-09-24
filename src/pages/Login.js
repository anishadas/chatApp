import React from 'react'

const Login = () => {
  return (
    <div className='form-container'>
      <div className='form-header'>
        <span className='app-logo'><img src='https://cdn-icons-png.flaticon.com/128/3481/3481038.png' alt='logo' /></span>
        <span className='app-title'>Chat App</span>
      </div>
      <div className='form-wrapper'>
        <form>
          <input type='email' name='email' placeholder='Email Id' />
          <input type='password' name='password' placeholder='Password' />
          <button className='register btn'>Register</button>
        </form>
      </div>
      <p>Don't have an account? <a href=''>Register</a></p>
    </div>
  )
}

export default Login
