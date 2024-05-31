import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders text', () => {
  const todo = {
    text: 'Write some awesome tests',
    done: false,
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Write some awesome tests')
  expect(element).toBeDefined()
})

test('renders status', () => {
  const todo = {
    text: 'Write some awesome tests',
    done: false,
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('This todo is not done')
  expect(element).toBeDefined()
})
