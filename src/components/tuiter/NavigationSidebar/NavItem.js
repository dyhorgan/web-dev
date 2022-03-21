import React from "react";

import {Link} from "react-router-dom";

const NavItem = (props) => {

    let cssActiveColor = '"navRow container ';

    let forceWhite = ""

        if(props.active.active === props.data.active){
          cssActiveColor += 'blue"';
        }else{
          forceWhite = "white";
        }

    return(

           <div className={cssActiveColor}>
                     <img src={props.data.icon} className="d-xl-none tinyIconAdjust" height="20em" alt=""/>

                     <div className="row">
                       <img src={props.data.icon} className="col-3 tinyTopPad smallIconAdjust d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" height="20em" alt=""/>

                       <div className="d-sm-none d-md-none d-lg-none d-xl-block col-xxl-2 col-xl-2 smallLabelAdjust white">
                       <Link to={props.data.href} className={forceWhite}>
                         {props.data.text}
                         </Link>
                       </div>
                     </div>
                   </div>
    );
}
export default NavItem;
