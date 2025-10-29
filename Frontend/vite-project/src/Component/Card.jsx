import React from 'react'
import './card.css'
function Card(props) {
  return (
    <div>
      <div id='dev'>
        <img src='https://img.freepik.com/premium-vector/vector-kids-illustration_844724-2742.jpg?semt=ais_hybrid&w=740&q=80' alt='Cartoon' height={200} width={200}/>
        <h1>{props.name}</h1>
        <h3>{props.age}</h3>
      </div>
    </div>
  )
}

export default Card
