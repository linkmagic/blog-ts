import { FC, useEffect, useRef, useState } from 'react';

import { IPost, IFilter } from 'components/interfaces';
import { IAPIResponse } from '../../api/interfaces';
import { getPagesCount } from 'utils/pages';
import { usePosts } from 'hooks/usePosts';
import { useFetching } from 'hooks/useFetching';
import PostService from 'api/postService';
import {
    Loader,
    PostFilter,
    PostForm,
    PostList,
    MyModal,
    MyButton,
    Pagination
} from 'components'

import styles from './Posts.module.css';
import { useObserver } from 'hooks/useObserver';

interface PostsProps {
}

const Posts: FC<PostsProps> = () => {
    const [posts, setPosts] = useState<IPost[]>([]);
    const [isModalVisible, setModalVisible] = useState<boolean>(false);
    const [filter, setFilter] = useState<IFilter>({ sort: '', query: '',  limit: '10' });
    const [totalPages, setTotalPages] = useState<number>(0);
    const [page, setPage] = useState<number>(1);
    const lastElement = useRef<HTMLDivElement>(null);

    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isLoading, postError] = useFetching(async () => {
        const response: IAPIResponse = await PostService.getAll(filter.limit, page);
        setPosts([...posts, ...response.data]);
        const totalPosts = +response.headers['x-total-count'];
        setTotalPages(getPagesCount(totalPosts, filter.limit));
    });

    useObserver(lastElement, page < totalPages, isLoading, () => setPage(page + 1));

    useEffect(() => {
        fetchPosts();
    }, [filter.limit, page]);

    const addNewPost = (post: IPost) => {
        setPosts([...posts, post]);
        setModalVisible(false);
    };

    const removePost = (id: string): void => {
        setPosts(posts.filter((item) => item.id !== id));
    };

    const newPostBtnClick = () => {
        setModalVisible(true);
    };

    return (
        <div className={styles.mainContainer}>
            <MyModal isVisible={isModalVisible} setVisible={setModalVisible}>
                <PostForm addNewPost={addNewPost} />
            </MyModal>
            <div className={styles.appTitle}>
                <h3>React Application</h3>
            </div>
            <hr className={styles.horisontalLine} />
            <div className={styles.toolbarBtns}>
                <MyButton onClick={newPostBtnClick}>Create new Post</MyButton>
            </div>
            <PostFilter filter={filter} setFilter={setFilter} />
            
            {postError && (
                <h3>Error {postError}</h3>
            )}
            <PostList posts={sortedAndSearchedPosts} removePost={removePost} />
            <div ref={lastElement} style={{ height: '20px' }} />
            {isLoading &&
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                    <Loader />
                </div>
            }
            <Pagination totalPages={totalPages} page={page} changePage={setPage} />
        </div>
    );
}

export default Posts;
