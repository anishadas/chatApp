import React from 'react'
import upload from '../../img/attach.png'
const Input = () => {
  return (
    <div className='input'>
      <input type='text' placeholder='Enter something...' />
      <div className='send'>
        <input type='file' style={{ display: "none" }} id='file2' />
        <label htmlFor='file2'>
          <img src={upload} alt='upload' />
        </label>
        <button>
          send
        </button>
      </div>
    </div>
  )
}

export default Input
