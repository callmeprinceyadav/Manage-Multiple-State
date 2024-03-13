import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
