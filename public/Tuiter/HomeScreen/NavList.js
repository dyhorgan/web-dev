import NavItem from "./NavItem.js";
import data from "./NavData.js"
const NavList = () => {
    return (`

            ${
                          data.map(data => {
                         return(NavItem(data));
                        }).join('')
                       }

`); }
export default NavList;
