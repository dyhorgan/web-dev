import React from "react";
import NavList from "./NavList.js"
const NavigationSidebar = ({active = 'explore'}) => {
    return(
            <div>
            <NavList active={active} />

            <div className="d-grid mt-2">
                <a href="tweet.html"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
            </div>
    );
}
export default NavigationSidebar;
