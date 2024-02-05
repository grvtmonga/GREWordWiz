import React from 'react'
import SectionBlock from './sectionBlock/SectionBlock'

const sects = ['Foundations of Expertise: Embarking on the Learning Voyage',
                'Skillbridge : The Mastery Midpoint',
                'Zenith Mastery Module '
                ]
export default function Sections() {

    const sectItems = sects.map((sect, index) => (
        <SectionBlock key={index} title={sect} />
      ));
  return (
    <>
        <div >
            <div>{sectItems}</div>
        </div>
        
    </>
  
  )
}
