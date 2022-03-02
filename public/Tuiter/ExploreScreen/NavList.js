import NavItem from "./NavItem.js";
import data from "./NavData.js"
const NavList = (active) => {
    return (`

            ${
                          data.map(data => {
                         return(NavItem(data, active));
                        }).join('')
                       }

`); }
export default NavList;
