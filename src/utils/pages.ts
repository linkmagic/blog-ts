export const getPagesCount = (totalCount: number, limit: string): number => {
    return Math.ceil(totalCount / +limit);
};

export const getPagesArray = (totalPages: number) => {
    let pagesArray = [];
    for (let i = 0; i < totalPages; i++) {
        pagesArray.push(i + 1);
    }
    return pagesArray;
};
