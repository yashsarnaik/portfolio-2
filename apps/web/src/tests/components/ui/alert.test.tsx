import { render, screen } from '@testing-library/react'
import {
  Alert,
  AlertDescription,
  AlertTitle,
  alertVariants
} from '@tszhong0411/ui'

describe('<Alert />', () => {
  it('renders with title and description', () => {
    render(
      <Alert>
        <AlertTitle>Alert title</AlertTitle>
        <AlertDescription>Alert description</AlertDescription>
      </Alert>
    )

    expect(screen.getByText('Alert title')).toBeInTheDocument()
    expect(screen.getByText('Alert description')).toBeInTheDocument()
  })

  it('renders with specific variant', () => {
    render(<Alert variant='info' data-testid='alert-info' />)

    expect(screen.getByTestId('alert-info')).toHaveClass(
      alertVariants({ variant: 'info' })
    )

    render(<Alert variant='warning' data-testid='alert-warning' />)
    expect(screen.getByTestId('alert-warning')).toHaveClass(
      alertVariants({ variant: 'warning' })
    )

    render(<Alert variant='danger' data-testid='alert-danger' />)
    expect(screen.getByTestId('alert-danger')).toHaveClass(
      alertVariants({ variant: 'danger' })
    )
  })
})
