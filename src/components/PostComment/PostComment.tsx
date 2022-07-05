import { FC } from 'react';

import styles from './PostComment.module.css';

interface PostCommentProps {
    email: string;
    body: string;
}

const PostComment: FC<PostCommentProps> = ({ email, body }) => {
    return (
        <div className={styles.container}>
            <div className={styles.email}>{email}</div>
            <div className={styles.body}>{body}</div>
        </div>
    )
}

export default PostComment;
