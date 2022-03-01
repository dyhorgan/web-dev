const NavItem = (item) => {
    return(`

           <div class="container">
                     <img src=${item.icon} class="d-xl-none tinyIconAdjust" height="20em">

                     <div class="row">
                       <img src=${item.icon} class="col-3 tinyTopPad smallIconAdjust d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" height="20em">

                       <div class="d-sm-none d-md-none d-lg-none d-xl-block col-xxl-2 col-xl-2 smallLabelAdjust white">
                       <a href=${item.href}>
                         ${item.text}
                         </a>
                       </div>
                     </div>
                   </div>
    `);
}
export default NavItem;
