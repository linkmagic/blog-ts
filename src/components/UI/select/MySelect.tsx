import React, { FC } from 'react';

import { ISelectOption } from 'components/interfaces';

import styles from './MySelect.module.css';

interface MySelectProps extends React.ComponentProps<'select'> {
    defaultValue: string;
    options: ISelectOption[];
}

const MySelect: FC<MySelectProps> = ({ defaultValue, options, ...props }) => {
    return (
        <select {...props} className={styles.mySelect}>
            <option disabled>{defaultValue}</option>
            {options.map((item) => (
                <option key={item.value} value={item.value}>{item.name}</option>
            ))}
        </select>
    );
}

export default MySelect;
