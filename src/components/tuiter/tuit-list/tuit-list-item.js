import React from "react";
//import "./exploreDark.css"
//import DeleteTuit from "./delete-tuit.js"
import {useDispatch} from "react-redux";
//import TuitStats from "./tuit-stats";
import "./tuit.css"

const TuitListItem = (props) => {

    const dispatch = useDispatch();
    console.log("in list item");

    return(<>

        <i className="fas fa-remove fa-2x fa-pull-right"
          onClick={() => props.deleteTuit(
            dispatch, props.tuit)}></i>
        <div className="container border-bottom">
           <div className="flexRow">
              <div className="paddingRight">
                <img src={props.tuit.propic} width="100%" height="50em" alt=""/>
              </div>
              <div className="bold white paddingRight">
                  {props.tuit.postedBy.username}
                  <img src="check.jpeg" height="20em" className="rounded-circle" alt=""/>
              </div>
              <div className="white paddingRight gray">
                  {props.tuit.postedBy.handle}
              </div>
              <div className="gray">
                  {props.tuit.time}
              </div>


           </div>


           <div className="row">

           <div className="col-12 white">
           {props.tuit.tuit}
           </div>

           </div>

           <div className="row">

           <div className="col-12 image-radius">
           <img src={props.tuit.image} width="100%" height="250em" className="image-radius outline" alt=""/>
           </div>

           </div>

           <div className="row">
              <div className="col-3 white">
                  <i className="fa-solid fa-comment white"></i>
                  {props.tuit.comments}
              </div>
              <div className="col-3 white">
                  <i className="fa-solid fa-retweet white"></i>
                  {props.tuit.retweets}

              </div>
              <div className="col-3 white">

                   <i onClick={() => props.updateTuit(dispatch, {
                     ...props.tuit,
                     likes: props.tuit.likes + 1
                   })} className="far fa-thumbs-up ms-2"></i>
                   {props.tuit.likes}
              </div>
              <div className="col-3 white">
                <i className="fas fa-download white"></i>
              </div>
           </div>

        </div>
        </>
    );
}
export default TuitListItem;
