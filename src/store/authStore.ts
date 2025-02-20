import { create } from 'zustand';
import { User } from 'firebase/auth';

interface UserRole {
  isAdmin: boolean;
}

interface AuthState {
  user: User | null;
  userRole: UserRole | null;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  setUserRole: (role: UserRole | null) => void;
  setLoading: (loading: boolean) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  userRole: null,
  isLoading: true,
  setUser: (user) => set({ user }),
  setUserRole: (role) => set({ userRole: role }),
  setLoading: (loading) => set({ isLoading: loading }),
}));