import { useState } from 'react'
import { nanoid } from 'nanoid'

function TodoList() {
  const [list, setList] = useState([])
  const [item, setItem] = useState('')

  function handleInput(event) {
    setItem(event.target.value)
  }

  function handleCreateNewItem(event) {
    event.preventDefault()

    const newItem = {
      id: nanoid(),
      title: item,
    }

    if (item === '') {
      return
    }

    setList([...list, newItem])
    setItem('')
  }

  function deleteItem(id) {
    const newList = list.filter(item => item.id !== id)

    setList(newList)
  }

  return(
    <>
      <form onSubmit={handleCreateNewItem}>
        <input data-testid="input-item" placeholder="Digite seu item" onChange={handleInput} value={item} />
        <button data-testid="btn-item"type="submit">Criar Item</button>
      </form>
      <main>
        <h1>Minha Lista de Tarefas</h1>
        <div>
          {list.map(item => {
            return (
              <p key={item.id}>
                {item.title}
                <button data-testid="btn-remove-item" onClick={() => {deleteItem(item.id)}}>Apagar</button>
              </p>
            )
          })}
        </div>
      </main>
    </>
  )
}

export default TodoList