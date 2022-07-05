import { FC } from 'react';

import { ISelectOption, IFilter } from 'components/interfaces';
import { selectSortValue } from 'constants/sorting';
import { MyInput, MySelect } from 'components';

import styles from './PostFilter.module.css'

interface MySelectProps {
    filter: IFilter;
    setFilter: (filter: IFilter) => void;
}

const sortPostOptions: ISelectOption[] = [
    { value: selectSortValue.BY_TITLE, name: 'Title' },
    { value: selectSortValue.BY_BODY, name: 'Body' },
];

const limitOptions: ISelectOption[] = [
    { value: '5', name: '5' },
    { value: '10', name: '10' },
    { value: '25', name: '25' },
    { value: '50', name: '50' },
    { value: '-1', name: 'Show all' },
];

const PostFilter: FC<MySelectProps> = ({ filter, setFilter }) => {
    const queryOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilter({ ...filter, query: e.target.value });
    };
    const sortOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({ ...filter, sort: e.target.value });
    };
    const limitSelectOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilter({ ...filter, limit: e.target.value });
    };
    
    return (
        <div className={styles.container}>
            <MySelect
                value={filter.sort}
                onChange={sortOnChange}
                defaultValue={'Sorting'}
                options={sortPostOptions}
            />
            <MyInput
                value={filter.query}
                onChange={queryOnChange}
            />
            <MySelect
                value={filter.limit}
                onChange={limitSelectOnChange}
                defaultValue={'Posts per page'}
                options={limitOptions}
            />
        </div>
    );
};

export default PostFilter;