import NavigationSidebar from "./NavigationSidebar.js";
import PostSummaryList from "./PostSummaryList.js";
import PostList from "./PostList.js";

(function ($) {
    $('#wd-explore').append(`
        <div class="row mt-2">

        <div class="col-2 col-md-2 col-lg-1 col-xl-2 container">
            ${NavigationSidebar()}
        </div>
        <div class="border-left bottom-border-gray col-6 col-md-6 col-lg-6 col-xl-6">
            ${PostList()}
        </div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4 border-left container">
            ${PostSummaryList()}
        </div>

        </div>
    `);
    NavigationSidebar.setAttribute("active", "")
})($);
