


const NavItem = (item, active) => {
    console.log(active)
    let cssActiveColor = '"navRow container ';
    if(active === item.active){
      cssActiveColor += 'blue"'
    }
    console.log(cssActiveColor)
    let thing = `

                           <div class=${cssActiveColor}>
                                     <img src=${item.icon} class="d-xl-none tinyIconAdjust" height="20em">

                                     <div class="row">
                                       <img src=${item.icon} class="col-3 tinyTopPad smallIconAdjust d-sm-none d-md-none d-lg-none d-xl-block d-xxl-block" height="20em">

                                       <div class="d-sm-none d-md-none d-lg-none d-xl-block col-xxl-2 col-xl-2 smallLabelAdjust white">
                                         <a href=${item.href}>${item.text}</a>

                                       </div>
                                     </div>
                                   </div>
                    `

    return(thing);
}



export default NavItem;
