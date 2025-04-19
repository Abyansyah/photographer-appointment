import { render } from '@testing-library/react';
import { screen, fireEvent } from '@testing-library/dom';
import LoginForm from '@/components/auth/LoginForm';
import { vi } from 'vitest';
import { BrowserRouter } from 'react-router-dom';

vi.mock('@/config/axiosInstance', () => ({
  default: {
    post: vi.fn(),
  },
}));

describe('LoginForm', () => {
  it('renders email and password input', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });

    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Password/i)).toBeInTheDocument();
  });

  it('can type email and password', () => {
    render(<LoginForm />, { wrapper: BrowserRouter });

    const emailInput = screen.getByLabelText(/Email/i);
    const passwordInput = screen.getByLabelText(/Password/i);

    fireEvent.input(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.input(passwordInput, { target: { value: '12345678' } });

    expect((emailInput as HTMLInputElement).value).toBe('test@example.com');
    expect((passwordInput as HTMLInputElement).value).toBe('12345678');
  });
});
