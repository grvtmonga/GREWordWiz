import React from 'react'
import './RSideBar.css';
export default function RSideBar() {
  return (
    <div className='r-bar'>
        <header>
          <div className='streak'>
            <img /><span>0</span>
          </div>
          <div className='gems'>
            <img /><span>500</span>
          </div>
          <div className='lives'>
            <img /><span>5</span> 
          </div>
        </header>

        <div className='leaderBoard'>
          <h3>Unlock Leaderboard !</h3>
        </div>

        <div className='quest'>
          <h3>Daily Quests</h3>
        </div>

        <div className='profile'>
          <h3>To save your Progress:</h3>
          <button id='create'>
            Create Profile
          </button>
          <button id='sign-in'>
            Sign In
          </button>
        </div>
        
        
    </div>
  )
}
