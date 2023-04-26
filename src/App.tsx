import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Layout from './Layout'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div><Layout/></div>
  )
}

export default App
