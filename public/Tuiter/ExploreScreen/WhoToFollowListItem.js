const WhoToFollowListItem = (listItem) => {
    return(`
         <div class="row border-right backgroundDarkGray border-bottom">
            <div class="col-2">
              <img src=${listItem.avatarIcon} width="100%"/>
            </div>

             <div class="col-6 container">
                    <div class="row">
                      <div class="col-5 bold white">${listItem.userName}</div>
                      <div class="col-3">
                        <img src="check.jpeg" width="100%" height="15em" class="rounded-circle"/>
                      </div>
                    </div>
                    <div class="white">
                      ${'@' + listItem.handle}
                    </div>
                  </div>
                  <div class="col-2 pt-1">
                    <button type="Button" class="btn btn-primary override-bs ">Follow</button>
                  </div>
                  <div class="col-2"></div>
                </div>
    `);
}
export default WhoToFollowListItem;


