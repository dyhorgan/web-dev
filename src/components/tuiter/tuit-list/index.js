import React, {useEffect, useState} from "react"
import TuitListItem from "./tuit-list-item";
//import "./exploreDark.css";
import {useSelector, useDispatch} from "react-redux";
import {createTuit, deleteTuit, findAllTuits, updateTuit}
  from "../../../actions/tuits-actions";


const TuitList = () => {
    const {tuits} = useSelector((state) => state);
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({
                                                "postedBy": { "username": "NASA", "handle": "@Nasa" },
                                                "tuit": "",
                                                "image": "https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/nyk.png",
                                                "likes": 0,
                                                "comments": 0,
                                                "retweets": 0,
                                                "time": "just now"
                                              });

//     const findAllTuits = async () => {
//       const tuits = await service.findAllTuits();
//       dispatch({
//         type: 'FIND_ALL_TUITS',
//         tuits: tuits
//       });
//     }
//     useEffect(findAllTuits, []);

 useEffect(() =>
   findAllTuits(dispatch),);


    let key = 0;
    return(<>
              <button onClick={() =>
                createTuit(dispatch, newTuit)}
                  className="btn btn-primary float-end">
                Tuit
              </button>
              <textarea className="form-control w-75"
                onChange={(e) =>
                  setNewTuit({...newTuit,
                  tuit: e.target.value})}></textarea>
                            {
                               tuits.map(tuit => {
                                key += 1;
                                tuit["_id"] = key;
                              return(

                              <TuitListItem tuit={tuit} key={key} deleteTuit={deleteTuit} updateTuit={updateTuit}/>

                              );
                             })
                            }
          </>
    )
}
export default TuitList;






//import React from "react";
//import tuits from "./tuits.json";
//import TuitListItem
//       from "./tuit-list-item";
//import './tuits.css';
//
//const TuitList = () => {
//  return (
//    <ul className="ttr-tuits list-group">
//      {
//        tuits.map && tuits.map(tuit =>
//          <TuitListItem key={tuit._id}
//                        tuit={tuit}/>)
//      }
//    </ul>
//  );
//}
//
//export default TuitList;
