import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, likesCount: 100, message: 'My first post!'},
            {id: 2, likesCount: 200, message: 'My second post!'},
            {id: 3, likesCount: 300, message: 'My third post!'},
            {id: 4, likesCount: 400, message: 'My fourth post!'},
        ],
        newPostText: 'Hello Roma!',
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Boba', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true'},
            {id: 2, name: 'Bo', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Bo.jpg?raw=true'},
            {id: 3, name: 'Grif', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Grif%20Carga.jpg?raw=true'},
            {id: 4, name: 'Grogo', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Grogo.jpg?raw=true'},
            {id: 5, name: 'Cara', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Cara.jpg?raw=true'},
            {id: 6, name: 'Gideon', url: 'https://github.com/Ivan-F-Dev/imgs/blob/main/Moff.jpg?raw=true'},
        ],
        messages: [
            {id: 1, message: 'message1'},
            {id: 2, message: 'message2'},
            {id: 3, message: 'message3'},
            {id: 4, message: 'message4'},
            {id: 5, message: 'message5'},
        ],
    },
    navbarPage: {
        friends: [
            {id: 1, name: 'Boba Fett', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Boba.jpg?raw=true'},
            {id: 2, name: 'Bo Katan', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Bo.jpg?raw=true'},
            {id: 3, name: 'Grif Carga', friendImgUrl:'https://github.com/Ivan-F-Dev/imgs/blob/main/Grif%20Carga.jpg?raw=true'}
        ]
    }

}

export let  addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
};

export let  updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
};

export default state;