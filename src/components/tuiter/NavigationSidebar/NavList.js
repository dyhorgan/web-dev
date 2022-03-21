import React from "react";
import NavItem from "./NavItem.js";
import data from "./NavData.json"
const NavList = (active) => {
    let key = 0;
    return (
             <div>
                          {data.map(data => {
                          key += 1;
                         return<NavItem data={data} active={active} key={key} />;
                        })}
             </div>

); }
export default NavList;
