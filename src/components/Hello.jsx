import { useState } from 'react'

function Hello() {
  const [name, setName] = useState('')

  function handleInput(e) {
    setName(e.target.value)
  }

  return (
    <div>
      <p>
        Hello,<span data-testid="name">{name}</span>
      </p>
      <input 
        data-testid="name-input" 
        onChange={handleInput}  
        placeholder="Digite seu nome" 
      />
    </div>
  )
}

export default Hello
