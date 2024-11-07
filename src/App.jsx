import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import brainLogo from './assets/brain-svgrepo-com.svg'
import viteLogo from '/vite.svg'

import Header from './Header'

import './styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={brainLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}

{/* 
      header bar with logo, title, score, high score
      body of page that contains all cards */}

      <Header/>
    </>
  )
}

export default App
