import React, { FC, useContext } from 'react';

import { AuthContext } from 'context';
import { MyInput, MyButton } from 'components';

interface LoginProps {    
}

const Login: FC<LoginProps> = () => {
    const { setIsAuth } = useContext(AuthContext);
    const login = (event: React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    };
    return (
        <>
            <h3>Login page</h3>
            <form onSubmit={login}>
                <MyInput type="text" placeholder='User name' />
                <MyInput type="password" placeholder='Password' />
                <MyButton type="submit">Login</MyButton>
            </form>
        </>
    );
};

export default Login;