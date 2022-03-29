import React from "react"
import WhoToFollowListItem from "./WhoToFollowListItem.js";

import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const {who} = useSelector((state) => state);
    console.log(who)
    let key = 0;
    return (
            <ul className="list-group">
            {
                          who.map(who => {
                          key += 1;
                         return <WhoToFollowListItem listItem={who} key={key}/>;
                        })
                       }
            </ul>
); }
export default WhoToFollowList;
