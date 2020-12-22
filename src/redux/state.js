import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, likesCount: 100, message: 'My first post!'},
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

        ],
        newMessageText: "",
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

export let  addMessage = () => {
    let newMessage = {
        id: 2,
        message: state.dialogsPage.newMessageText,
    };
    state.dialogsPage.messages.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderEntireTree(state);
};

export let  updateNewMessageText = (newText) => {
    state.dialogsPage.newMessageText = newText;
    rerenderEntireTree(state);
};

export default state;