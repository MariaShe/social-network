import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

  let postsElements = props.postsData.map( post => <Post message={post.message} likesCount={post.likesCount}/>)
  let newPostElement = React.createRef();

  let addPost = () => {
    props.addPost();
  }

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostChange(text);
  }
    return (
      <div className={classes.postsBlock}>
        <h3>My posts</h3>
        <div>
          <div>
            <textarea onChange={ onPostChange } ref={ newPostElement } value={ props.newPostText }/>
          </div>
          <div>
            <button onClick={ addPost }>Add post</button>
          </div>
        </div>
        <div className={classes.post}>
          { postsElements }
        </div>
      </div>
    );
}

export default MyPosts;