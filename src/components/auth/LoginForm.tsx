import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Loader } from 'lucide-react';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useAuth } from '@/auth/useAuth';
import axiosInstance from '@/config/axiosInstance';
import { FaRegCircleXmark } from 'react-icons/fa6';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axiosInstance.post('/users/login', {
        email,
        password,
      });
      const { token } = response.data;
      login(token);
      navigate('/');
      setError(false);
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {error && (
        <div className="p-2 flex items-center gap-x-3 mb-4 bg-red-50 border border-red-400 rounded">
          <FaRegCircleXmark className="text-red-600" />
          <p className="text-sm">Email dan/atau password Anda salah, silakan coba lagi</p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email" className="block font-medium">
            Email
          </Label>
          <Input id="email" type="email" placeholder="your.email@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full border px-3 py-2 rounded" disabled={isLoading} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between">
            <label htmlFor="password" className="block font-medium">
              Password
            </label>
          </div>
          <div className="relative">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border px-3 py-2 rounded pr-10"
              disabled={isLoading}
            />
            <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500">
              {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>
              <Loader className="mr-2 animate-spin" />
              <span>Loading</span>
            </>
          ) : (
            'Login'
          )}
        </Button>
      </form>
    </>
  );
}
