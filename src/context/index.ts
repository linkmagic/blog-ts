import { createContext } from 'react';

type TAuthContext = {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
    isLoading: boolean;
}

const DefaultValuesAuthContext = {
    isAuth: false,
    setIsAuth: (value: boolean) => {},
    isLoading: true,
}

export const AuthContext = createContext<TAuthContext>(DefaultValuesAuthContext);
