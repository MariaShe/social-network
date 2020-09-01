import { renderEntireTree } from "../render";

let state = {
  profilePage: {
    postsData: [
      {id: 1, message:'Hi! How are you?', likesCount: '25'},
      {id: 2, message:'I would like to pass IELTS 8.0', likesCount: '101'},
      {id: 3, message:'This is my first post', likesCount: '12'},
      {id: 4, message:'How are you?', likesCount: '40'},
    ],
    newPostText: 'Write your post here'
  },
  dialogsPage: {
    dialogsData: [
      {id: 1, name: 'Viktor'},
      {id: 2, name: 'Maria'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Andrey'},
      {id: 5, name: 'Katya'},
      {id: 6, name: 'Vera'},
    ],
    messagesData: [
      {id: 1, message:'Hi'},
      {id: 2, message:'How is your project?'},
      {id: 3, message:'Hey'},
      {id: 4, message:'How are you?'},
      {id: 5, message:'Cool!'},
      {id: 6, message:'Nice to see you!'},
    ]
  }
}

window.state = state;

export let addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0
  };

  state.profilePage.postsData.push(newPost);
  state.profilePage.newPostText = "";
  renderEntireTree(state);
}

export let updateNewPostChange = (newText) => {

  state.profilePage.newPostText = newText;
  renderEntireTree(state);
}
    
export default state;