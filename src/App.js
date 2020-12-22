import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from './components/Profile/Profile';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar stateNavbarFriends={props.state.navbarPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           stateProfilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}/>}

                />
                <Route path='/dialogs'
                       render={() => <Dialogs
                           stateDialogsPage={props.state.dialogsPage}
                           addMessage={props.addMessage}
                           updateNewMessageText={props.updateNewMessageText}/>}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
                <Route path='/settings' component={Settings}/>
            </div>
        </div>
    );
}

export default App;
