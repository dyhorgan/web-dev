import React from "react";
import "./exploreDark.css";

const PostSummaryItem = ({postSummary: {topic, userName, time, title, image, tweets}}) => {

    return(

    <div className="topic-height border-bottom container row">

              <div className="col-9">
                <div className="grayed-text smallerFont">{topic}</div>
                <div className="grayed-text flexRow">


                      <div className="bold white"> {userName}</div>
                      <div>
                      <img src="../check.jpeg" width="20px" height="20px" className="rounded-circle" alt=""/>
                      </div>


                   <div>- {time}</div>
                </div>
                <div className="ps-4 bold white">{title}</div>

              </div>

              <div className="pt-1 pe-1 col-3">
                <img src={image} height="90em" width="140em" className="image-radius" alt=""/>
              </div>

            </div>
    );
}
export default PostSummaryItem;
