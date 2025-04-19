import LoginForm from '@/components/auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-purple-50 to-indigo-50 p-4">
      <div className="absolute top-4 left-4">
        <button onClick={() => navigate('/')} className="text-gray-600 hover:text-black rounded-full p-2">
          <ArrowLeft size={20} />
        </button>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold">PhotoBooking</h1>
      </div>

      <div className="bg-white shadow rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-semibold mb-2">Login</h2>
        <p className="text-sm text-gray-500 mb-6">Enter your email and password to access your account.</p>
        <LoginForm />
      </div>
    </div>
  );
}
