import { beforeEach, test } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Counter from './Counter'

/**
* @vitest-environment jsdom
*/

beforeEach(() => {
  render(<Counter />)
})

test('should show an initial count of 0', () => {
  expect(screen.getByText('0')).toBeInTheDocument()
  expect(screen.getByTestId('count')).toBeInTheDocument()
  expect(screen.getByTestId('count')).toHaveTextContent('0')
})

test('should increase count when Add is clicked', () => {
  expect(screen.getByTestId('add')).toBeInTheDocument()
  
  fireEvent.click(screen.getByTestId('add'))

  expect(screen.getByTestId('count')).toHaveTextContent('1')
})

test('should decrease count when Subtract is clicked', () => {
  expect(screen.getByTestId('subtract')).toBeInTheDocument()
  
  fireEvent.click(screen.getByTestId('subtract'))

  expect(screen.getByTestId('count')).toHaveTextContent('-1')
})
