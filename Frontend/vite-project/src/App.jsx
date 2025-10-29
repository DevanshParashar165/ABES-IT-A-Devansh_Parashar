import './App.css'
import Card from './Component/Card'
import Navbar from './Component/Navbar'

function App() {

  return (
    <>
    <Navbar/>
      <div className='card'>
        <Card name={"Devansh"} age={20}/>
        <Card name={"Parashar"} age={20}/>
      </div>
    </>
  )
}

export default App
