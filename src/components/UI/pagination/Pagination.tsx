import { FC } from 'react';

import { getPagesArray } from 'utils/pages';
import { MyButton } from 'components';

interface PaginationProps {
    totalPages: number;
    page: number;
    changePage: (value: number) => void;
}

const Pagination: FC<PaginationProps> = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <>
            {pagesArray.map((pageNumber) => (
                <MyButton key={pageNumber} accented={pageNumber === page} onClick={() => changePage(pageNumber)}>
                    {pageNumber}
                </MyButton>
            ))}
        </>
    );
}

export default Pagination;
