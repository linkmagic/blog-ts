import { FC, useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar, AppRouter } from 'components';
import { AuthContext } from 'context';

interface AppProps {
}

const App: FC<AppProps> = () => {
    const [isAuth, setIsAuth] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setIsAuth(!!localStorage.getItem('auth'));
        setIsLoading(false);
    }, []);
    return (
        <AuthContext.Provider value={{ isAuth, setIsAuth, isLoading }}>
            <BrowserRouter>
                <Navbar />
                <AppRouter />
            </BrowserRouter>
        </AuthContext.Provider>
    );
}

export default App;
