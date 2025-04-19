import { render, screen } from '@testing-library/react';
import { Button } from '@/components/ui/button';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

describe('Button component', () => {
  it('renders with default text', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: /click me/i })).toBeInTheDocument();
  });

  it('accepts and applies custom className', () => {
    render(<Button className="custom-class">Click</Button>);
    const button = screen.getByRole('button', { name: /click/i });
    expect(button).toHaveClass('custom-class');
  });

  it('fires onClick event', async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Click Me</Button>);
    const button = screen.getByRole('button', { name: /click me/i });

    await user.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('is disabled when prop is set', () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole('button', { name: /disabled/i });
    expect(button).toBeDisabled();
  });
});
