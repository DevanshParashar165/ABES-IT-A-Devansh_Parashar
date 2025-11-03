import React, { useState } from 'react'

function ChangeState() {
    const [count,setCount] = useState(0);
    function change(){
        setCount(count+1);
    }
    function decrease(){
      if(count>0){
          setCount(count-1);
      }
    }
  return (
    <div>
      <button onClick={change}>+</button>
      <p>{count}</p>
      <button onClick={decrease}>-</button>
    </div>
  )
}

export default ChangeState
