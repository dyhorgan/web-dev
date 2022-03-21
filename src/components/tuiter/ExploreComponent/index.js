import React from "react";
import PostSummaryList from "./PostSummaryList.js";
import "./exploreDark.css";

const ExploreComponent = () => {

    return( <div>
             <div className="center">

                    <div className="container searchMargin">
                      <form action="/" method="GET" className="form searchWidth">
                        <div className="search-icon">
                          <img src="glass.png" className="mb-2" alt=""/>
                        </div>
                        <input type="search" className="searchInput p-4 me-1" placeholder="Search Tuiter"/>
                        <img src="whiteGear.png" className="gears" alt=""/>
                      </form>
                    </div>

                  </div>

           <div className="container rounded">

                   <div className="row pt-3">

                     <div className="col-2 other-border-gray white">

                       <a className="linkSize noDec white" href="/sample">For You</a>
                     </div>
                     <div className="col-2 bottom-border-thicker-gray white">
                       <a className="linkSize noDec white" href="/sample">Trending</a>
                     </div>
                     <div className="col-2 bottom-border-thicker-gray white">
                       <a className="linkSize noDec white" href="/sample">Covid-19</a>
                     </div>
                     <div className="col-2 bottom-border-thicker-gray white">
                       <a className="linkSize noDec white" href="/sample">News</a>
                     </div>
                     <div className="col-2 bottom-border-thicker-gray white">
                       <a className="linkSize noDec white" href="/sample">Sports</a>
                     </div>
                     <div className="col-2 bottom-border-thicker-gray white">
                       <a className="linkSize noDec white" href="/sample">Entertainment</a>
                     </div>

                   </div>
                 </div>

           <div className="pt-2 container">
                   <div className="form">
                     <h2 className="mainImageH ps-2 mt-10 white">Whale Shark</h2>
                     <img src="whaleShark.webp" width="105%" className="leftPad ps-4" alt=""/>
                   </div>
                 </div>

           <div className="container backgroundDarkGray">
           {<PostSummaryList />}
           </div>
     </div>);
}
export default ExploreComponent;
