import React from "react";

const NavItem = (item, active) => {

    let cssActiveColor = '"navRow container ';
        if(active === item.active){
          cssActiveColor += 'blue"'
        }
    console.log("thing");
    console.log(item);
    return(

           <div className={cssActiveColor}>
                     <img src={item.data.icon} className="d-xl-none tinyIconAdjust" height="20em"/>

                     <div className="row">
                       <img src={item.data.icon} className="col-3 tinyTopPad smallIconAdjust d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" height="20em"/>

                       <div className="d-sm-none d-md-none d-lg-none d-xl-block col-xxl-2 col-xl-2 smallLabelAdjust white">
                       <a href={item.data.href}>
                         {item.data.text}
                         </a>
                       </div>
                     </div>
                   </div>
    );
}
export default NavItem;
