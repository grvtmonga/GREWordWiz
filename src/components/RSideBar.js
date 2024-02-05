import React from 'react'
import './RSideBar.css';
export default function RSideBar() {
  return (
    <div className='r-bar'>
        <header>
          <div className='streak'>

          </div>
          <div className='gems'>
            <img /><span></span>
          </div>
          <div className='lives'>

          </div>
        </header>

        <div className='leaderBoard'>
          Leader Boards
        </div>

        <div className='quest'>
          Daily Quests
        </div>

        <div className='profile'>
          Create Profile
        </div>
        
        
    </div>
  )
}
