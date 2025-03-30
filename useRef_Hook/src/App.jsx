import { useState, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let a = 0
  const a = useRef(0)
  const btnRef = useRef()
  
  useEffect(() => {
    a.current = a.current + 1
    // console.log(`rerendering, and the value of a is ${a.current} ..`)
  
  })

  useEffect(() => {
    console.log("First rendering")
    btnRef.current.style.backgroundColor = "Red"
  }, [count])
  
  

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button ref = {btnRef} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={() => {btnRef.current.style.backgroundColor = "Green"}}>Change {a.current} button </button>
    </>
  )
}

export default App
