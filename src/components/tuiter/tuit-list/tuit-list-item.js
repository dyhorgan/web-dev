import React from "react";
//import "./exploreDark.css"
//import DeleteTuit from "./delete-tuit.js"
import {useDispatch} from "react-redux";
//import TuitStats from "./tuit-stats";
import "./tuit.css"

const TuitListItem = (props) => {
//    console.log(props.tuit)
//    let {deleteTuit} = props;
    const dispatch = useDispatch();
//      const deleteTuit = (tuit) => {
//        dispatch({type: 'delete-tuit', tuit})
//      };

    return(<>

        <i className="fas fa-remove fa-2x fa-pull-right"
          onClick={() => props.deleteTuit(
            dispatch, props.tuit)}></i>
        <div className="container border-bottom">
           <div className="flexRow">

              <div className="bold white paddingRight">
                  {props.tuit.postedBy.username}
                  <img src="check.jpeg" height="20em" className="rounded-circle" alt=""/>
              </div>
              <div className="white paddingRight">
                  {props.tuit.postedBy.handle}
              </div>
              <div className="white">
                  {props.tuit.time}
              </div>


           </div>


           <div className="row">

           <div className="col-6 white">
           {props.tuit.tuit}
           </div>

           </div>

           <div className="row">

           <div className="col-12 image-radius">
           <img src={props.tuit.image} width="100%" height="250em" className="image-radius" alt=""/>
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
