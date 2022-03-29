import React, {useState} from "react"
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import "./editProfile.css"



const EditProfile = () => {

  const {profile} = useSelector((state) => state);
  const dispatch = useDispatch();
    const updateProfile = (profile) => {
      dispatch({type: 'update-profile', profile});
    };

  const [tempProfile, setTempProfile] = useState(profile);

  return(<>
  <div className="flex-between">
    <div className="flowRow">
    <Link to="/tuiter/profile">
      <i className="fa-solid fa-xmark gray paddingRight"></i>
    </Link>
    <h4 className="white">Edit Profile</h4>
    </div>
    <Link to="/tuiter/profile">
    <button className="btn btn-dark saveProfileMargin" onClick={() => {
        updateProfile(tempProfile)
      }
    }>Save</button>
    </Link>
  </div>

  <div>
        <img src={tempProfile.bannerPicture} width="100%" alt=""/>
      </div>
      <div>
          <img src={tempProfile.profilePicture} className="rounded-circle picPosition" height="170em" width="30%" alt=""/>
          <i className="fa-solid fa-camera gray cameraPosition"></i>
      </div>
  <div className="border-gray top-border-gray">
  <div className="gray">Name</div>
  <input input="text" value={tempProfile.firstName} onChange={(event) => {setTempProfile({...tempProfile, firstName: event.target.value ?? ""})}} />
  </div>
  <div className="border-gray">
  <div className="gray">Bio</div>
  <input input="text" value={tempProfile.bio} onChange={(event) => {setTempProfile({...tempProfile, bio: event.target.value ?? ""})}}/>
  </div>
  <div className="border-gray">
    <div className="gray">Location</div>
    <input input="text" value={tempProfile.location} onChange={(event) => {setTempProfile({...tempProfile, location: event.target.value ?? ""})}}/>
    </div>
    <div className="border-gray">
      <div className="gray">Website</div>
      <input input="text" value={tempProfile.website} onChange={(event) => {setTempProfile({...tempProfile, website: event.target.value ?? ""})}}/>
      </div>
      <div className="border-gray">
        <div className="gray">Date of Birth</div>
        <input input="text" value={tempProfile.dateOfBirth} onChange={(event) => {setTempProfile({...tempProfile, dateOfBirth: event.target.value ?? ""})}} />
        </div>
  </>
  )
}

export default EditProfile
