import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { IPost } from 'components/interfaces';
import MyButton from 'components/UI/button/MyButton';

import styles from './styles.module.css';

interface PostItemProps {
    post: IPost;
    removePost: (id: string) => void;
}

const PostItem: FC<PostItemProps> = ({ post: { id, title, body }, removePost }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <div className={styles.postCardContent}>
                <strong>{id}. {title}</strong>
                <div>{body}</div>
            </div>
            <div className={styles.postBtnsContainer}>
                <MyButton onClick={() => navigate(`/posts/${id}`)}>Open</MyButton>
                <MyButton onClick={() => removePost(id)}>Remove</MyButton>
            </div>
        </div>
    )
}

export default PostItem;
