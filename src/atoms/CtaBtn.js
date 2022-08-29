import React from 'react'
import './CtaBtn.css'

const CtaBtn = (props) => {
  return (
    <button className='ctaBtn'>
      <a href={props.url}>Open</a>
    </button>
  )
}

export default CtaBtn