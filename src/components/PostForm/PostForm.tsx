import React, { FC, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { IPost } from 'components/interfaces';
import { MyButton, MyInput, MyTextArea } from 'components'

import styles from './PostForm.module.css';

interface PostFormProps {
    addNewPost: (post: IPost) => void;
}

const PostForm: FC<PostFormProps> = ({ addNewPost }) => {
    const [newPost, setNewPost] = useState<IPost>({ id: '', title: '', body: '' });
    
    const titleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPost({
            ...newPost,
            title: e.target.value,
        })
    };
    
    const bodyOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewPost({
            ...newPost,
            body: e.target.value,
        })
    };
    
    const submitForm = (e: React.MouseEvent) => {
        e.preventDefault();
        addNewPost({
            ...newPost,
            id: uuidv4(),
        });
        setNewPost({ id: '', title: '', body: '' })
    };

    const isSubmitAvailable = (): boolean => {
        return !(newPost.title && newPost.body);
    };
    
    return (
        <form className={styles.container}>
            <MyInput
                type='text'
                placeholder='Post title'
                value={newPost.title}
                onChange={titleOnChange}
            />
            <MyTextArea
                placeholder='Post body'
                value={newPost.body}
                onChange={bodyOnChange}
            />
            <MyButton disabled={isSubmitAvailable()} onClick={submitForm}>Create new post</MyButton>
        </form>
    );
}

export default PostForm;
