import React, { useState } from 'react'

function ButtonColor() {
    const [color,setColor] = useState('red')
    function Change(){
        if(color == 'red'){
            setColor('green')
        }
        else{
            setColor('red')
        }
    }
  return (
    <div>
      <button onClick={Change} style={{color : `${color}`, margin : "20px"}}>{color}</button>
    </div>
  )
}

export default ButtonColor
