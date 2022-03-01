import PostSummaryList from "./PostSummaryList.js";

const ExploreComponent = () => {
    return(`
             <div class="center">

                    <div class="container searchMargin">
                      <form action="/" method="GET" class="form searchWidth">
                        <div class="search-icon">
                          <img src="glass.png" class="mb-2"/>
                        </div>
                        <input type="search" class="searchInput p-4 me-1" placeholder="Search Tuiter"/>
                        <img src="whiteGear.png" class="gears"/>
                      </form>
                    </div>

                  </div>

           <div class="container rounded">

                   <div class="row pt-3">

                     <div class="col-2 other-border-gray">

                       <a class="linkSize noDec white">For You</a>
                     </div>
                     <div class="col-2 bottom-border-thicker-gray">
                       <a class="linkSize noDec grayed-text">Trending</a>
                     </div>
                     <div class="col-2 bottom-border-thicker-gray">
                       <a class="linkSize noDec grayed-text">Covid-19</a>
                     </div>
                     <div class="col-2 bottom-border-thicker-gray">
                       <a class="linkSize noDec grayed-text">News</a>
                     </div>
                     <div class="col-2 bottom-border-thicker-gray">
                       <a class="linkSize noDec grayed-text">Sports</a>
                     </div>
                     <div class="col-2 bottom-border-thicker-gray">
                       <a class="linkSize noDec grayed-text">Entertainment</a>
                     </div>

                   </div>
                 </div>

           <div class="pt-2 container">
                   <div class="form">
                     <h2 class="mainImageH ps-2 mt-10 white">Whale Shark</h2>
                     <img src="whaleShark.webp" width="100%" class="leftPad"/>
                   </div>
                 </div>

           <div class="container backgroundDarkGray">
           ${PostSummaryList()}
           </div>
    `);
}
export default ExploreComponent;
