import React from "react";
import {useSelector} from "react-redux";
import "./profile.css"
import {Link} from "react-router-dom"


const ProfileScreen = (props) => {
  const {profile} = useSelector((state) => state);
  console.log(profile);
  return(<>

    <div className="flexRow">
      <i className="fa fa-arrow-left white paddingRight" aria-hidden="true"></i>
      <div>
       <h4 className="white">{profile.firstName} {profile.lastName}</h4><div className="gray">{profile.tweetsCount} tweets</div>
      </div>
    </div>
    <div>
      <img src={profile.bannerPicture} width="100%" alt=""/>
    </div>
    <div className="flex-between">

        <img src={profile.profilePicture} className="rounded-circle" height="170em" width="30%" alt=""/>
        <Link to="/tuiter/editProfile">
        <button className="btn btn-dark editProfileMargin right">Edit Profile</button>
        </Link>

    </div>
    <div>
      <h4 className="white">{profile.firstName} {profile.lastName}</h4>
      <div className="gray">{profile.handle}</div>
    </div>
    <div className="gray">
      {profile.bio}
    </div>
    <div className="flexRow">
      <div className="gray flexRow paddingRight"><i className="fa-solid fa-location-dot"></i><div className="gray">{profile.location}</div></div>
      <div className="gray flexRow paddingRight"><i className="fa-solid fa-magnifying-glass"></i><div className="gray">{profile.dateOfBirth}</div></div>
      <div className="gray flexRow paddingRight"><i className="fa fa-calendar" aria-hidden="true"></i><div className="gray">{profile.dateJoined}</div></div>
    </div>
    <div className="flexRow" >
      <div className="flexRow paddingRight">
      <div className="white">{profile.followingCount}</div>
      <div className="gray">Following</div>
      </div>
      <div className="flexRow">
      <div className="white">{profile.followersCount}</div>
      <div className="gray">Followers</div>
      </div>

    </div>
    </>
  )
}

export default ProfileScreen
