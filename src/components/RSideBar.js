import React from 'react'
import './RSideBar.css';
import Streak from '../Assets/images/streak.png'
import Lives from '../Assets/images/lives.png'
import Gems from '../Assets/images/gems.png'

export default function RSideBar() {
  return (
    <div className='r-bar'>
        <header>
          <div className='streak'>
            <img src={Streak} width={30} height={40}/><span id='Streak'>0</span>
          </div>
          <div className='gems'>
            <img src={Gems} width={24} height={30}/><span>500</span>
          </div>
          <div className='lives'>
            <img src={Lives} width={35} height={35}/><span id='live'>5</span> 
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
