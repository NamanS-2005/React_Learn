import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import tailwindcss from '@tailwindcss/vite'
// import "tailwindcss";

function App() {
  const [count, setCount] = useState(0)
  const [showbtn, setshowbtn] = useState(true)
  const [todos, setTodos] = useState([
    {
      title: "Todo 1",
      desc: "Todo 1 desc"
    },
    {
      title: "Todo 2",
      desc: "Todo 2 desc"
    },
    {
      title: "Todo 3",
      desc: "Todo 3 desc"
    },
  ])

  const Todo = ({ todo }) => {
    return (
      <>
        <div className="m-4 border-1 border-purple-400">

          <div className="todo">{todo.title}</div>
          <div className="todo">{todo.desc}</div>
        </div>
      </>
    )
  }

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
      {showbtn ? <button>showbtn is true</button> : <button>showbtn is false</button>}
      {/* {showbtn && <button>showbtn is true</button>} */}

      {todos.map(
        todo => {
          return (
            <Todo key={todo.title} todo={todo} />
          )
        }
      )}

      <div className="card">
        <button onClick={() => setshowbtn(!showbtn)}>
          Toggle Button
        </button>
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
