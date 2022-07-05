import { FC, useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { AuthContext } from 'context';
import { privateRoutes, publicRoutes } from 'router'
import Loader from 'components/UI/loader';

interface AppRouterProps {
}

const AppRouter: FC<AppRouterProps> = () => {
    const { isAuth, isLoading } = useContext(AuthContext);
    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ?
                <Routes>
                    {privateRoutes.map((route) =>
                        <Route
                            path={route.path}
                            element={<route.component/>}
                            key={route.path}
                        />
                    )}
                    <Route path='*' element={<Navigate to='/posts' />} />
                </Routes>
            :
            <Routes>
                {publicRoutes.map((route) =>
                    <Route
                        path={route.path}
                        element={<route.component/>}
                        key={route.path}
                    />
                )}
                <Route path='*' element={<Navigate to='/login' />} />
            </Routes>
    );
};

export default AppRouter;