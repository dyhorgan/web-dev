import React from "react";

const PostItem = (props) => {
    return(
        <div className="container border-bottom">
           <div className="flexRow">

              <div className="bold white">
                  {props.fullPost.author}
                  <img src="check.jpeg" height="20em" className="rounded-circle" />
              </div>
              <div>
                  {props.fullPost.handle}
              </div>
              <div>
                  {props.fullPost.time}
              </div>


           </div>


           <div className="row">

           <div className="col-6 white">
           {props.fullPost.text}
           </div>

           </div>

           <div className="row">

           <div className="col-12 image-radius">
           <img src={props.fullPost.image} width="100%" height="250em" className="image-radius" />
           </div>

           </div>

           <div className="row">
              <div className="col-3">
                  <i className="fa-solid fa-comment"></i>
                  {props.fullPost.comments}
              </div>
              <div className="col-3">
                  <i className="fa-solid fa-retweet"></i>
                  {props.fullPost.retweets}

              </div>
              <div className="col-3">
              <i className="fa-regular fa-heart"></i>
                  {props.fullPost.likes}
              </div>
              <div className="col-3">
                <i className="fas fa-download"></i>
              </div>
           </div>

        </div>
    );
}
export default PostItem;
