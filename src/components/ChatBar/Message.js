import React from 'react'
const Message = () => {
  return (
    <div className='message owner'>
      <div className='msgInfo'>
        <img src='https://cdn-icons-png.flaticon.com/128/11498/11498793.png' />
        <span>Anisha</span>
      </div>
      <div className='msgCont'>
        <p>Hello, how are you??</p>
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60" alt='img'/>
      </div>
    </div>
  )
}

export default Message
