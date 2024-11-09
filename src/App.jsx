import Header from './Header'
import CardCollection from './CardCollection'
import { useState } from 'react'
import './styles/App.css'

function App() {
  const [score, setScore]=useState(0)
  const [highScore, sethighScore]=useState(0)
  return (
    <>
      <Header score={score} highScore={highScore}/>
      <CardCollection score={score} highScore={highScore} setScore={setScore} sethighScore={sethighScore}/>
    </>
  )
}

export default App
