import React from "react";
import "./exploreDark.css"

const PostItem = (props) => {
    return(
        <div className="container border-bottom">
           <div className="flexRow">

              <div className="bold white">
                  {props.fullPost.author}
                  <img src="check.jpeg" height="20em" className="rounded-circle" alt=""/>
              </div>
              <div className="white">
                  {props.fullPost.handle}
              </div>
              <div className="white">
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
           <img src={props.fullPost.image} width="100%" height="250em" className="image-radius" alt=""/>
           </div>

           </div>

           <div className="row">
              <div className="col-3 white">
                  <i className="fa-solid fa-comment white"></i>
                  {props.fullPost.comments}
              </div>
              <div className="col-3 white">
                  <i className="fa-solid fa-retweet white"></i>
                  {props.fullPost.retweets}

              </div>
              <div className="col-3 white">
              <i className="fa-regular fa-heart white"></i>
                  {props.fullPost.likes}
              </div>
              <div className="col-3 white">
                <i className="fas fa-download white"></i>
              </div>
           </div>

        </div>
    );
}
export default PostItem;
