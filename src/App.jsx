import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import brainLogo from './assets/brain-svgrepo-com.svg'
import viteLogo from '/vite.svg'

import Header from './Header'
import CardCollection from './CardCollection'

import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      {/* an element here that shows up all 8 cards */}
      <CardCollection/>
    </>
  )
}

export default App
