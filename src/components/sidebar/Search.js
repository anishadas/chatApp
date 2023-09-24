import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='search-form'>
        <input type='text' placeholder='Find a user' />
        <button>
          <img src='https://cdn-icons-png.flaticon.com/128/3077/3077325.png' alt='search' />
        </button>
      </div>
      <div className='userChat'>
        <img src='https://cdn-icons-png.flaticon.com/128/11498/11498793.png' alt='chet' />
        <div className='userInfo'>
          Anisha
        </div>
      </div>
    </div>
  )
}

export default Search
