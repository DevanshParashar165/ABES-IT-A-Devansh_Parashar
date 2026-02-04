import { useState } from 'react'
import Card from './component/Card'
import './App.css'

function App() {

  return (
    <>
    <div className='app'>
    <Card image = {'https://m.media-amazon.com/images/I/71dX9JnTkwL._AC_UF894,1000_QL80_.jpg'} name = {'Devansh'}/>
    <Card image = {'https://m.media-amazon.com/images/I/71dX9JnTkwL._AC_UF894,1000_QL80_.jpg'} name = {'ABC'}/>
    <Card image = {'https://m.media-amazon.com/images/I/71dX9JnTkwL._AC_UF894,1000_QL80_.jpg'} name = {'XYZ'}/>
    </div>
    </>
  )
}

export default App
