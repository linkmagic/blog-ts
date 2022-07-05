import { FC } from 'react';

import styles from './styles.module.css';

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <div className={styles.loader} />
  )
}

export default Loader;
