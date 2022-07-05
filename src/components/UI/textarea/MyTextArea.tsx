import React, { FC } from 'react';

import styles from './MyTextArea.module.css';

interface MyTextAreaProps extends React.ComponentProps<'textarea'> {}

const MyTextArea: FC<MyTextAreaProps> = ({ ...props }) => {
    return (
        <textarea {...props} className={styles.myTextArea} />
    );
}

export default MyTextArea;
