import React from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    hello World
      <div>
        <div>Counter App - {count}</div>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  )
}

export default App
