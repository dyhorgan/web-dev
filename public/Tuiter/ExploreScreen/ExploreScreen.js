import NavigationSidebar from "./NavigationSidebar.js";
import ExploreComponent from "./ExploreComponent.js";
import WhoToFollowList from "./WhoToFollowList.js";
import {active} from './active.js';

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2 container firstColumnPad">
            ${NavigationSidebar(active)}
        </div>
        <div class="border-left bottom-border-gray col-7 col-md-7 col-lg-7 col-xl-7">
            ${ExploreComponent()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-3 col-xl-3 border-left container">
          <div class="row border-right backgroundDarkGray"><div class="bold white">Who to Follow</div></div>
            ${WhoToFollowList()}
        </div>
        </div>
    `);
})($);

