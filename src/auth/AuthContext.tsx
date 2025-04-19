import { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import axiosInstance from '@/config/axiosInstance';
import axios from 'axios';

interface User {
  id: string;
  name: string;
  email: string;
}

interface AuthContextType {
  token: string | null;
  login: (token: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
  user: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
  isAuthenticated: false,
  user: null,
  isLoading: true,
  error: null,
  fetchUser: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeAuth = async () => {
      const storedToken = localStorage.getItem('token');
      if (storedToken) {
        try {
          setToken(storedToken);
          await fetchUser();
        } catch (error) {
          handleAuthError(error);
        }
      }
      setIsLoading(false);
    };

    initializeAuth();
  }, []);

  const handleAuthError = (error: unknown) => {
    let errorMessage = 'Authentication failed';

    if (axios.isAxiosError(error)) {
      errorMessage = error.response?.data?.message || error.message;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    console.error('Authentication error:', error);
    setError(errorMessage);
    logout();
  };

  const login = async (newToken: string) => {
    try {
      localStorage.setItem('token', newToken);
      setToken(newToken);
      await fetchUser();
      setError(null);
    } catch (error) {
      handleAuthError(error);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setUser(null);
    setError(null);
  };

  const fetchUser = async () => {
    try {
      setIsLoading(true);
      const res = await axiosInstance.get('/users/me');
      setUser(res.data?.user);
      setError(null);
    } catch (error) {
      handleAuthError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const isAuthenticated = !!token && !!user;

  return (
    <AuthContext.Provider
      value={{
        token,
        login,
        logout,
        isAuthenticated,
        user,
        isLoading,
        error,
        fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
