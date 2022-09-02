import { beforeEach, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Hello from './Hello'

/**
* @vitest-environment jsdom
*/

beforeEach(() => {
  render(<Hello />)
})

test('should show Hello', () => {
  expect(screen.getByText('Hello,')).toBeInTheDocument()
})

test('should show the Hello and the name when input is filled', () => {
  const inputElement = screen.getByTestId('name-input')
  
  fireEvent.change(inputElement, {
    target:{
      value: "Simara"
    }
  })

  expect(screen.getByText('Hello,')).toBeInTheDocument()
  expect(screen.getByText('Simara')).toBeInTheDocument()
})

