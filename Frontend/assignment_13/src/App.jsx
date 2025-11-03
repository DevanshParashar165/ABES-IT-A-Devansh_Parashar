import './App.css'
import Card from './Component/Card'
import Navbar from './Component/Navbar'
import ChangeState from './Component/ChangeState'
import ButtonColor from './Component/ButtonColor'

function App() {

  return (
    <>
    <Navbar/>
      <div className='card'>
        <Card name={"Pizza"} rate={180} image={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_366/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/26/d112a6d7-d173-4ca7-a5ee-40f845719d18_841144.JPG"}/>
        <Card name={"Burger"} rate={50} image={"https://static.vecteezy.com/system/resources/previews/022/911/694/non_2x/cute-cartoon-burger-icon-free-png.png"}/>
      </div>
      <ChangeState/>
      <ButtonColor/>
    </>
  )
}

export default App
