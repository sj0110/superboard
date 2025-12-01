import { render, screen } from '@testing-library/react'
import { Header } from '@/components/Header'

describe('Header', () => {
  it('renders search input', () => {
    render(<Header />)
    const searchInput = screen.getByLabelText('Search Quests')
    expect(searchInput).toBeInTheDocument()
  })

  it('renders action buttons', () => {
    render(<Header />)
    expect(screen.getByText('Unlock Daily Treats')).toBeInTheDocument()
    expect(screen.getByText('Sign In')).toBeInTheDocument()
  })
})

