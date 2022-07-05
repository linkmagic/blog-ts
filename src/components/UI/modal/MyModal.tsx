import React, { FC } from 'react';

import styles from './MyModal.module.css';

interface MyModalProps {
  children: React.ReactNode;
  isVisible: boolean;
  setVisible: (value: boolean) => void;
}

const MyModal: FC<MyModalProps> = ({ isVisible, setVisible, children }) => {
  const rootClasses = [styles.myModal];
  if (isVisible) {
    rootClasses.push(styles.active);
  }
  const rootDivOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setVisible(false);
  };
  const contentDivOnClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  }
  return (
    <div className={rootClasses.join(' ')} onClick={rootDivOnClick}>
      <div className={styles.myModalContent} onClick={contentDivOnClick}>
        {children}
      </div>
    </div>
  )
}

export default MyModal;
