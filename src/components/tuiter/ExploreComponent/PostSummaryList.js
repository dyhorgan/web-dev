import React from "react";
import PostSummaryItem from "./PostSummaryItem.js";
import post from "./post.json"

const PostSummaryList = () => {
    console.log(post);
    let key = 0;
    return ( <div>
            { post.map(postSummary => {
                         key += 1;
                         return <PostSummaryItem postSummary={postSummary} key={key} />;
                        })
            }
           </div>
); }
export default PostSummaryList;
