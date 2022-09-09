import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import s from './Profile.module.scss'


const Profile = (props) => {
    return (
        <div className={s.profile}>
            <ProfileInfo profile={props.profile} status={props.status}
                updateStatus={props.updateStatus} isOwner={props.isOwner} savePhoto={props.savePhoto} />
            <MyPostsContainer />
        </div>
    )
}
export default Profile;

