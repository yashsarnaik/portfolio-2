import { render, screen } from '@testing-library/react'
import { Link } from '@tszhong0411/ui'

describe('<Link />', () => {
  it('renders internal links', () => {
    render(<Link href='/'>Home</Link>)

    expect(screen.getByText('Home')).toBeInTheDocument()
  })

  it('renders external links', () => {
    render(<Link href='https://google.com'>Google</Link>)

    expect(screen.getByText('Google')).toBeInTheDocument()
    expect(screen.getByText('Google')).toHaveAttribute('target', '_blank')
    expect(screen.getByText('Google')).toHaveAttribute(
      'rel',
      'noopener noreferrer'
    )
  })

  it('renders hash links', () => {
    render(<Link href='#hash'>Hash</Link>)

    expect(screen.getByText('Hash')).toBeInTheDocument()
  })
})
