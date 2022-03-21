import React from "react";
import "./exploreDark.css";

const PostSummaryItem = (postSummary) => {

    return(

    <div className="topic-height border-bottom container row">

              <div className="col-9">
                <div className="grayed-text">{postSummary.topic}</div>
                <div className="grayed-text flexRow">


                      <div className="bold white"> {postSummary.postSummary.userName}</div>
                      <div>
                      <img src="check.jpeg" width="20px" height="20px" className="rounded-circle"/>
                      </div>


                   <div>- {postSummary.postSummary.time}</div>
                </div>
                <div className="ps-4 bold white">{postSummary.postSummary.title}</div>

              </div>

              <div className="pt-1 pe-1 col-3">
                <img src={postSummary.postSummary.image} height="90em" width="140em" className="image-radius"/>
              </div>

            </div>
    );
}
export default PostSummaryItem;
