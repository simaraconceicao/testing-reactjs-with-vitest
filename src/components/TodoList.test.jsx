import { beforeEach, test } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import TodoList from './TodoList'

/**
* @vitest-environment jsdom
*/

beforeEach(() => {
  render(<TodoList />)
})


test('deverá ser capaz de criar um novo item quando digitar e clicar no botao', () => {
  const inputElement = screen.getByTestId('input-item')
  const buttonElement = screen.getByTestId('btn-item')
  
  act(() => {
    fireEvent.change(inputElement, {
      target:{
        value: "Estudar"
      }
    })

    fireEvent.click(buttonElement)
  })
  
  expect(screen.queryByText("Estudar")).toBeInTheDocument()

  act(() => {
    fireEvent.change(inputElement, {
      target:{
        value: "Simara"
      }
    })
    
    fireEvent.click(buttonElement)
  })

  expect(screen.queryByText("Estudar")).toBeInTheDocument()
  expect(screen.queryByText("Simara")).toBeInTheDocument()
})

test('não deverá ser capaz de criar um novo item quando o input estiver vazio', () => {
  const buttonElement = screen.getByTestId('btn-item')

  fireEvent.click(buttonElement)

  expect(screen.queryByText("Estudar")).not.toBeInTheDocument()
})

test('deverá ser capaz de apagar um item', () => {
  const inputElement = screen.getByTestId('input-item')
  const buttonElement = screen.getByTestId('btn-item')
    
  act(() =>{
    fireEvent.change(inputElement, {
      target: {
        value: 'Estudar'
      }
    })

    fireEvent.click(buttonElement)
  })

  act(() =>{
    fireEvent.change(inputElement, {
      target: {
        value: 'Treinar'
      }
    })

    fireEvent.click(buttonElement)
  })

  const addedFirstTaskTitle = screen.getByText('Estudar')
  const addedSecondTaskTitle = screen.getByText('Treinar')

  expect(addedFirstTaskTitle).toBeInTheDocument()
  expect(addedSecondTaskTitle).toBeInTheDocument()

  const [addedFirstTaskTitleRemoveButon] = screen.getAllByTestId('btn-remove-item')
  fireEvent.click(addedFirstTaskTitleRemoveButon)

  expect(addedFirstTaskTitle).not.toBeInTheDocument()
  expect(addedSecondTaskTitle).toBeInTheDocument()
})
