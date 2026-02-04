import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [rightInc, setRightInc] = useState(100)
  const [upInc, setUpInc] = useState(100)

  return (
    <>
      <div>
        <img src="https://m.media-amazon.com/images/I/71dX9JnTkwL._AC_UF894,1000_QL80_.jpg" alt="" height={rightInc} width={upInc}/>
        <div className='buttons'>
        <button onClick={()=>setRightInc(rightInc+1)}>col+</button>
        <button onClick={()=>setRightInc(rightInc-1)}>col-</button>
        <button onClick={()=>setUpInc(upInc+1)}>row+</button>
        <button onClick={()=>setUpInc(upInc-1)}>row-</button>
        </div>
      </div>
    </>
  )
}

export default App
