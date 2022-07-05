import React, { FC } from 'react';

import styles from './MyInput.module.css';

interface MyInputProps extends React.ComponentProps<'input'> { }

const MyInput: FC<MyInputProps> = ({ ...props }) => {
  return (
    <input {...props} className={styles.myInput} />
  );
}

export default MyInput;
