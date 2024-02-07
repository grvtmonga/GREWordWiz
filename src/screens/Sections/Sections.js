import React from 'react'
import SectionBlock from './sectionBlock/SectionBlock';
import RSideBar from '../../components/RSideBar';
import './Sections.css'
const sects = [
    {
        title:'Foundations of Expertise',
        subTitle:'Embarking on the Learning Voyage',
    },
    {
        title:'Skillbridge',
        subTitle:'The Mastery Midpoint',
    },
    {
        title:'Zenith',
        subTitle:'The Mastery Module',
    }
]   

export default function Sections() {

    const sectItems = sects.map((val, key) => (
        <SectionBlock key={key} title={val.title} subTitle={val.subTitle} />
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
