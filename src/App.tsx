import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>
        강남대학교 멋쟁이사자처럼 FE 개발현장 🚧
        <img
          alt='죽겠어요'
          src='/public/favicon.ico'
        />
      </h1>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
      </div>
    </div>
  )
}

export default App
