import React, { FC } from 'react';

import styles from './MyButton.module.css';

interface MyButtonProps extends React.ComponentProps<'button'> {
  accented?: boolean;
  disabled?: boolean;
}

const MyButton: FC<MyButtonProps> = ({ children, accented, disabled, ...props }) => {
  const btnStyles = [
    styles.myBtn,
    accented ? styles.myBtnActive : '',
    disabled ? styles.myBtnDisabled : ''
  ].join(' ');
  return (
    <button 
      {...props}
      disabled={disabled}
      className={btnStyles}
    >
      {children}
    </button>
  );
}

export default MyButton;
