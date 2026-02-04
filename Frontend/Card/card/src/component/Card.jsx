import React from 'react'
import './Card.css'

function Card(props) {
  return (
    <div className='card'>
      <div>
        <img src={props.image} alt="" />
      </div>
      <div>Name - {props.name}</div>
      <div>Class - B.tech</div>
    </div>
  )
}

export default Card
