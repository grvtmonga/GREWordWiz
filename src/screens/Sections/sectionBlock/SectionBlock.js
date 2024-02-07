import React from 'react'
import './SectionBlock.css'
import { Link } from 'react-router-dom';
export default function SectionBlock({title,subTitle}) {
  return (
    <div className='sb'>
      <div className='details'>
        <p id="title">{title}</p>
        <p id='subTitle'>{subTitle}</p>
        <div className='progress'></div>
        <Link to="/learn">
          <button id='sect-button'>Start</button>
        </Link>
      </div>
      <div className='sec-icon'>

      </div>
    </div>
  )
}
