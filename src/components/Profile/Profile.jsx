import React, {Component} from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from './MyPosts/MyPosts'
import s from './Profile.module.css'
import ProfilePoster from "./ProfilePoster/ProfilePoster";

const Profile = (props) => {

    return (
        <div className={s.profile}>

            <ProfilePoster />

            <ProfileInfo/>

            <MyPosts
                stateProfilePagePosts={props.stateProfilePage.posts}
                stateProfilePageNewPostText={props.stateProfilePage.newPostText}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText}/>

        </div>
    )
}

export default Profile;