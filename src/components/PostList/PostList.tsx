import { FC } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import { IPost } from 'components/interfaces';
import PostItem from 'components/PostItem';

import styles from './PostList.module.css';
import postListAnimation from './PostListAnimation.module.css';

interface PostListProps {
	posts: IPost[];
	removePost: (id: string) => void
}

const PostList: FC<PostListProps> = ({ posts, removePost }) => {
	if (!posts.length) {
		return (
			<h1 className={styles.noPostsMsg}>No Posts</h1>
		);
	}
	return (
		<TransitionGroup>
			{posts.map((post) => (
				<CSSTransition
					key={post.id}
					timeout={500}
					classNames={postListAnimation}
				>
					<div className={styles.post}>
						<PostItem key={post.id} post={post} removePost={removePost} />
					</div>
				</CSSTransition>
			))}
		</TransitionGroup>
	)
}

export default PostList;
