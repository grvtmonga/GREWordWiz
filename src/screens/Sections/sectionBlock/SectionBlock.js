import React from 'react'
import './SectionBlock.css'
export default function SectionBlock({title}) {
  return (
    <div className='sb'>
      <div className='details'>
      {title}
      <div className='progress'></div>
      <button>Start</button>
      </div>
      <div className='sec-icon'>

      </div>
    </div>
  )
}
