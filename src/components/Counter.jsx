import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  function increment() {
    setCount(count + 1)
  }

  function decrement() {
    setCount(count - 1)
  }

  return (
    <div>
      <p>
        Count:
        <span data-testid="count">{count}</span>
        <button data-testid="add" onClick={increment}>Add</button>
        <button data-testid="subtract" onClick={decrement}>Subtract</button>
      </p>
    </div>
  )
}

export default Counter
