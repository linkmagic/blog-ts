import { useMemo } from 'react';

import { IPost } from 'components/interfaces';

export const useSortedPosts = (posts: IPost[], sort: string) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a: IPost, b: IPost) => a[sort].localeCompare(b[sort]));
        } 
        return posts;
    }, [sort, posts]);
    return sortedPosts;
};

export const usePosts = (posts: IPost[], sort: string, query: string) => {
    const sortedPosts = useSortedPosts(posts, sort);
    const sortedAndFilteredPosts = useMemo(() => {
        return sortedPosts.filter((post) => post.title.toLowerCase().includes(query.toLowerCase()));
    }, [query, sortedPosts]);
    return sortedAndFilteredPosts;
};