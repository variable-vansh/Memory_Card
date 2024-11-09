import { useState } from 'react'

import Header from './Header'
import CardCollection from './CardCollection'

import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <CardCollection/>
    </>
  )
}

export default App
