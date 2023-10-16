import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginComponent from './routes/LoginComponent/LoginComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <LoginComponent/>
  )
}

export default App
