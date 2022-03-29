import React from "react";
//import "./exploreDark.css"
//import DeleteTuit from "./delete-tuit.js"
import {useDispatch} from "react-redux";
import TuitStats from "./tuit-stats";
import "./tuit.css"

const TuitListItem = (props) => {
    console.log(props)
    const dispatch = useDispatch();
      const deleteTuit = (tuit) => {
        dispatch({type: 'delete-tuit', tuit})
      };

    return(<>
        <i onClick={() => deleteTuit(props.tuit)} className="fas fa-remove fa-2x fa-pull-right"></i>
        <div className="container border-bottom">
           <div className="flexRow">

              <div className="bold white paddingRight">
                  {props.tuit.author}
                  <img src="check.jpeg" height="20em" className="rounded-circle" alt=""/>
              </div>
              <div className="white paddingRight">
                  {props.tuit.handle}
              </div>
              <div className="white">
                  {props.tuit.time}
              </div>


           </div>


           <div className="row">

           <div className="col-6 white">
           {props.tuit.text}
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
              <TuitStats tuit={props.tuit}/>
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
