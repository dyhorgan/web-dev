import React from "react"
import TuitListItem from "./tuit-list-item";
//import "./exploreDark.css";
import {useSelector} from "react-redux";


const TuitList = () => {
    const {tuits} = useSelector((state) => state);
    let key = 0;
    return(<>
                            {
                               tuits.map(tuit => {
                                key += 1;
                                tuit["_id"] = key;
                              return(

                              <TuitListItem tuit={tuit} key={key}/>

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
