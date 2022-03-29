import profile from "../data/profile.json"
const profileReducer = (state = profile, action) => {
  switch(action.type){
    case 'update-profile':
      console.log(action);
      return action.profile;
    default: return(state)
  }
}

export default profileReducer
