import { createContext, use } from 'react';

export const AuthContext = createContext();

export const useUser = () => use(AuthContext);
