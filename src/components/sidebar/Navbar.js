import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='logo'>
        <span><img src='https://cdn-icons-png.flaticon.com/128/3481/3481038.png' alt='logo' /></span>
      </div>
      <div className='user-details'>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='avatar' />
        <span>Anisha Das</span>
        
        <button className='btn'>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
