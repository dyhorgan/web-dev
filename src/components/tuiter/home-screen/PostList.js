import React from "react"
import PostItem from "./PostItem.js";
import fullPost from "./fullPost.json";
import "./exploreDark.css";

const PostList = () => {

    let key = 0;
    return(<>
                            {
                               fullPost.map(fullPost => {
                                key += 1;
                              return(<PostItem fullPost={fullPost} key={key}/> );
                             })
                            }
          </>
    )
}
export default PostList;
