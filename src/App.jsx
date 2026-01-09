import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './api/components/Products'
import CreateProduct from './api/components/CreateProduct'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Products/>
        <CreateProduct/>
      </div>      
    </>
  )
}

export default App
