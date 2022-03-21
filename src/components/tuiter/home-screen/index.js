import React from "react";
//import {Link} from "react-router-dom";
import NavigationSidebar from "../NavigationSidebar"
import WhoToFollowList from "../WhoToFollowList"
import PostList from "./PostList"
import "./exploreDark.css"

const HomeScreen = () => {
    return(
     <div className="row mt-2">

        <div className="col-2 col-md-2 col-lg-1 col-xl-2 container firstColumnPad">
          <NavigationSidebar active="home" />
        </div>
        <div className="border-left bottom-border-gray col-7 col-md-7 col-lg-7 col-xl-7">
          <PostList />
        </div>
     <div className="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3 border-left container">
       <div className="row border-right backgroundDarkGray">
          <div className="bold white">
           Who to Follow
          </div>
       </div>
        <WhoToFollowList />
     </div>

     </div>
    )
};

export default HomeScreen;
