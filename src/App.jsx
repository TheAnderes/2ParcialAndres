import { useState } from 'react'
import primerComponente from './componentes/primerComponente'
import segundoComponente from './componentes/segundoComponente'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <primerComponente />
      <segundoComponente />
    </>
  )
}

export default App
