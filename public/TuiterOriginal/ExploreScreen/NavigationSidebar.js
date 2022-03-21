import NavList from "./NavList.js"
const NavigationSidebar = (active) => {
    return(`

            ${NavList(active)}

            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
