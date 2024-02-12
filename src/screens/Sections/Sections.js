import React from 'react'
import Icons from '../../components/icons'
import SectionBlock from './sectionBlock/SectionBlock';
import RSideBar from '../../components/RSideBar';
import foundation from '../../Assets/images/foundation.png'
import skillBridge from '../../Assets/images/skillBridge.png'
import Zenith from '../../Assets/images/Zenith.png'
import './Sections.css'
const sects = [
    {
        title:'Foundations of Expertise',
        subTitle:'Embarking on the Learning Voyage',
        icon : <Icons source={foundation} name="Foundation" />
    },
    {
        title:'Skillbridge',
        subTitle:'The Mastery Midpoint',
        icon : <Icons source={skillBridge} name="SkillBridge" />
    },
    {
        title:'Zenith',
        subTitle:'The Mastery Module',
        icon : <Icons source={Zenith} name="Zenith" />
    }
]   

export default function Sections() {

    const sectItems = sects.map((val, key) => (
        <SectionBlock key={key} title={val.title} subTitle={val.subTitle}  icon={val.icon}/>
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
