import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Book from './Component/Book'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div style={{display : "flex"}}>
      <Book img="https://images.penguinrandomhouse.com/cover/9780593543504" title="Math" price="250"/>
      <Book img="https://booksandyou.in/cdn/shop/files/PhysicsPartITextbookforClassXII_1.webp?v=1713763686" title="Physics" price="300"/>
      <Book img="https://www.tppl.org.in/2020/15522-large_default/chemistry-i-major-book-bsc-first-sem-kukcrs-university.jpg" title="Chemistry" price="200"/>
    </div>
    
  )
}

export default App
