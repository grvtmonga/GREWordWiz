import React from 'react'
import SectionBlock from './sectionBlock/SectionBlock'
import RSideBar from '../../components/RSideBar'
import './Sections.css'
const sects = ['Expertise Foundations: Begin Your Learning Journey',
                'Skillbridge : The Mastery Midpoint',
                'Zenith Mastery Module '
                ]
export default function Sections() {

    const sectItems = sects.map((sect, index) => (
        <SectionBlock key={index} title={sect} />
      ));
  return (
    <div className='sect'>
        <div className='feed'>
            <div>{sectItems}</div>
        </div>
        
        <div className='rsb'>
            <RSideBar/>
        </div>
    </div>
  
  )
}