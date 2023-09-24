import React from 'react'
import SideBar from '../components/sidebar/SideBar'
import ChatBar from '../components/ChatBar/ChatBar'

const Home = () => {
  return (
    <div className='home'>
      <div className='container'>
        <SideBar />
        <ChatBar/>
      </div>
    </div>
  )
}

export default Home
