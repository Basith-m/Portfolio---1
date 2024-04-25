import React from 'react'
import './work.css'
import Works from './Works'

const Work = () => {
  return (
    <div className='work section' id='portfolio'>
        <h2 className="section_title">Portfolio</h2>
        <span className='section_subtitle'>Most recent works</span>
        <Works />
    </div>
  )
}

export default Work
