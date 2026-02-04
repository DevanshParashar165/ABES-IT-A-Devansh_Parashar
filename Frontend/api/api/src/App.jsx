import { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [header, setHeader] = useState('')
  const [footer, setFooter] = useState('')

  const apiFetchHead = async()=>{
      try {
      const response = await axios.get('https://dummyjson.com/todos');
      console.log(response.data)
      setHeader(response.data.todos[0]);
    } catch (error) {
      console.log(error)
    }
  }

  const apiFetchFooter = async()=>{
    try {
      const response = await axios.get('https://dummyjson.com/todos');
      setFooter(response.data.todos[5]);
    } catch (error) {
      console.log(error)
    }
  }
  
  useEffect(()=>{
    apiFetchHead();
    apiFetchFooter();
  },[])

  return (
    <>
     <div>
      {header.todo}
     </div>
     <div>
      {footer.todo}
     </div>
     <div>
      {}
     </div>
    </>
  )
}

export default App
