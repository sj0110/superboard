import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/Hero'

describe('Hero', () => {
  it('renders campaign title', () => {
    render(<Hero />)
    expect(screen.getByText('Defx')).toBeInTheDocument()
  })

  it('renders campaign description', () => {
    render(<Hero />)
    expect(screen.getByText(/Concero V2 has Arrived/i)).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Back')).toBeInTheDocument()
    expect(screen.getByText('Share')).toBeInTheDocument()
  })
})

