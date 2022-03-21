import React from "react";

import {Link} from "react-router-dom";

const NavItem = ({active: {active}, data : {active2, href, icon, text}}) => {

    let cssActiveColor = '"navRow container ';

    let forceWhite = ""

        if(active === active2){
          cssActiveColor += 'blue"';
        }else{
          forceWhite = "white";
        }

    return(

           <div className={cssActiveColor}>
                     <img src={icon} className="d-xl-none tinyIconAdjust" height="20em" alt=""/>

                     <div className="row">
                       <img src={icon} className="col-3 tinyTopPad smallIconAdjust d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" height="20em" alt=""/>

                       <div className="d-sm-none d-md-none d-lg-none d-xl-block col-xxl-2 col-xl-2 smallLabelAdjust white">
                       <Link to={href} className={forceWhite}>
                         {text}
                         </Link>
                       </div>
                     </div>
                   </div>
    );
}
export default NavItem;
