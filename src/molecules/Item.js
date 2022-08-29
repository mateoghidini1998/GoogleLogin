import React from 'react'
import Title from '../atoms/Title'
import Description from '../atoms/Description'
import './Item.css'
import CtaBtn from '../atoms/CtaBtn'

const Item = (props) => {
  return (
    <div className='searchItem'>
      <Title title={props.title}/>
      <div className="itemContent">
        <Description description={props.description}/>
        <CtaBtn url={props.url}/>
      </div>
    </div>
  )
}

export default Item