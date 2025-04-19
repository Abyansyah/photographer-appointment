import { render, screen } from '@testing-library/react';
import { Input } from '@/components/ui/input';
import userEvent from '@testing-library/user-event';

describe('Input component', () => {
  it('renders an input element', () => {
    render(<Input placeholder="Type here" />);
    expect(screen.getByPlaceholderText(/type here/i)).toBeInTheDocument();
  });

  it('accepts type prop', () => {
    render(<Input type="email" placeholder="Your email" />);
    const input = screen.getByPlaceholderText(/your email/i);
    expect(input).toHaveAttribute('type', 'email');
  });

  it('handles user typing', async () => {
    const user = userEvent.setup();
    render(<Input placeholder="Your name" />);
    const input = screen.getByPlaceholderText(/your name/i);
    await user.type(input, 'Jane Doe');
    expect(input).toHaveValue('Jane Doe');
  });

  it('is disabled when prop is set', () => {
    render(<Input disabled placeholder="Disabled" />);
    const input = screen.getByPlaceholderText(/disabled/i);
    expect(input).toBeDisabled();
  });
});
