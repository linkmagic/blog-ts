import { FC, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from 'context';
import MyButton from '../button/MyButton';

import styles from './Navbar.module.css';

interface NavbarProps {

}

const Navbar: FC<NavbarProps> = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);
    const logoutBtnClick = () => {
        setIsAuth(false);
        localStorage.removeItem('auth');
    };
    return (
        <div className={styles.navbar}>
            {isAuth && <MyButton onClick={logoutBtnClick}>logout</MyButton>}
            <div className={styles.navbarLinks}>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    );
};

export default Navbar;