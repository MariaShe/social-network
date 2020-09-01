import React from 'react';
import classes from './Post.module.css';

const Post = (props) => {
    return (
            <div className={classes.item}>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS6BZZseJoOlvLfyAsLORk4kWkaub9Nbv3pFQ&usqp=CAU'/>
              { props.message }
              <div>
              <span>like</span> { props.likesCount }
              </div>
            </div>
    );
}

export default Post;