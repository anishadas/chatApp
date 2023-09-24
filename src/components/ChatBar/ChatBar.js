import React from 'react'
import Messages from './Messages'
import Input from './Input'
import cam from '../../img/cam.png';
import add from '../../img/add.png';
import more from '../../img/more.png'
const ChatBar = () => {
  return (
    <div className='chatbar'>
      <div className='chat-header'>
        <span>Anisha</span>
        <div className='icons'>
          <img src={cam} alt='cam' />
          <img src={add} alt='add' />
          <img src={more} alt='more' />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default ChatBar
