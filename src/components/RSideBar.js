import React, { useState } from 'react';
import Model from 'react-modal';
import Streak from '../Assets/images/streak.png';
import Lives from '../Assets/images/lives.png';
import Gems from '../Assets/images/gems.png';
import './RSideBar.css';
import PopUpForm from './popupform';

const RSideBar = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleCreateProfileClick = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='r-bar'>
      <header>
        <div className='streak'>
          <img src={Streak} width={30} height={40} alt='Streak' />
          <span id='Streak'>0</span>
        </div>
        <div className='gems'>
          <img src={Gems} width={24} height={30} alt='Gems' />
          <span>500</span>
        </div>
        <div className='lives'>
          <img src={Lives} width={35} height={35} alt='Lives' />
          <span id='live'>5</span>
        </div>
      </header>

      <div className='leaderBoard'>
        <h3>Unlock Leaderboard!</h3>
      </div>

      <div className='quest'>
        <h3>Daily Quests</h3>
      </div>

      <div className='profile'>
        <h3>To save your Progress:</h3>
        <button id='create' onClick={handleCreateProfileClick}>
          Create Profile
        </button>
        <button id='sign-in'>Sign In</button>
      </div>

      <PopUpForm isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default RSideBar;
