import React from "react"
import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.json"
const WhoToFollowList = () => {
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
