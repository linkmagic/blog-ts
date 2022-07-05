import { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { IAPIResponse } from 'api/interfaces';
import { IPost, IPostComment } from 'components/interfaces';
import PostService from 'api/postService';
import { useFetching } from 'hooks/useFetching';
import { Loader, MyButton } from 'components';

import styles from './PostIdPage.module.css';
import PostComment from 'components/PostComment';

interface PostIdPageProps {}

const PostIdPage: FC<PostIdPageProps> = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState<IPost>({
        id: '',
        title: '',
        body: '',
    });
    const [comments, setComments] = useState<IPostComment[]>([]);
    
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id);
        setPost(response.data);
    });
    const [fetchPostCommentsById, isLoadingComments, errorComments] = useFetching(async () => {
        const response: IAPIResponse = await PostService.getPostCommentsById(params.id);
        setComments(response.data as IPostComment[]);
    });

    useEffect(() => {
        fetchPostById();
        fetchPostCommentsById();
    }, [])
    
    return (
        <>
            {error && (
                <h3>Error loading post: {error}</h3>
            )}
            {isLoading
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
                : (
                    <div className={styles.container}>
                        <div>
                            <MyButton onClick={() => navigate(-1)}>BACK</MyButton>
                        </div>
                        <h2>{post.id}. {post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                )
            }
            {errorComments && (
                <h3>Error loading comments: {errorComments}</h3>
            )}
            <hr className={styles.horisontalLine} />
            {isLoadingComments
                ? <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}><Loader /></div>
                : (
                    <div className={styles.container}>
                        <h3>Comments:</h3>
                        {comments.map((comment) =>
                            <PostComment
                                email={comment.email}
                                body={comment.body}
                                key={comment.id}
                            />
                        )}
                    </div>
                )
            }
        </>
    )
}

export default PostIdPage;
