import React from "react";
import NavList from "./NavList.js";
import {Link, Outlet} from "react-router-dom";

const NavigationSidebar = ({active}) => {

    return(
            <div>
            <Link to="/">
            <img src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png" width="15%" alt=""/>
            </Link>

            <NavList active={active} />

            <div className="d-grid mt-2">
                <Link to="/tweet"
                   className="btn btn-primary btn-block rounded-pill">
                    Tweet</Link>
            </div>
            </div>
    );
}
export default NavigationSidebar;
