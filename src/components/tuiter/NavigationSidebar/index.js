import React from "react";
import NavList from "./NavList.js";
import {Link} from "react-router-dom";

const NavigationSidebar = ({active}) => {

    return(
            <div>
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
