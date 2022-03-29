import {Outlet} from "react-router-dom";
import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./WhoToFollowList"
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer"
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";

const reducer = combineReducers({
  tuits: tuitsReducer, who: whoReducer, profile: profileReducer
});


const store = createStore(reducer);
//import "./tuiter.css";

const Tuiter = () => {
  return (
        <Provider store={store}>
            <div className="row mt-2">
                 <div className="col-2 col-md-2 col-lg-1 col-xl-2 container firstColumnPad">
                   <NavigationSidebar/>
                 </div>
                 <div className="bottom-border-gray col-7 col-md-7 col-lg-7 col-xl-7">
                   <Outlet/>
                 </div>
                 <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3 container">
                   <WhoToFollowList />
                 </div>
               </div>
        </Provider>
  );
};
export default Tuiter;
