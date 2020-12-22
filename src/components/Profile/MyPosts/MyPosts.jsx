import React, {Component} from 'react';
import Post from './Post/Post'
import s from './MyPosts.module.css';

const MyPosts = (props) => {

    let postsElements =
        props.stateProfilePagePosts.map( p => <Post message={p.message} like={p.likesCount} />);

    let newPostElement = React.createRef();

    let addPost = () => {
        props.addPost();
    };

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            My posts
            <div className={s.wrap}>
                <textarea ref={newPostElement}
                          onChange={onPostChange}
                          value={props.stateProfilePageNewPostText}
                          className={s.textarea}
                          cols="70" rows="2"/>
                <button onClick={ addPost } className={s.button}>Add post</button>
            </div>

            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;