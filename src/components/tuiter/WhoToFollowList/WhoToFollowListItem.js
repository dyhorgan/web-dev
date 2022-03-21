import React from "react"
const WhoToFollowListItem = (props) => {

    return(
         <div className="row border-right backgroundDarkGray border-bottom">
            <div className="col-2">
              <img src={props.listItem.avatarIcon} width="200%"/>
            </div>

             <div className="col-6 container">
                    <div className="row">
                      <div className="col-7 bold white">{props.listItem.userName}</div>
                      <div className="col-3">
                        <img src="check.jpeg" width="300%" height="15em" className="rounded-circle"/>
                      </div>
                    </div>
                    <div className="white">
                      {'@' + props.listItem.handle}
                    </div>
                  </div>
                  <div className="col-2 pt-1">
                    <button type="Button" className="btn btn-primary override-bs ">Follow</button>
                  </div>
                  <div className="col-2"></div>
                </div>
    );
}
export default WhoToFollowListItem;


