
const PostSummaryItem = (postSummary) => {
    return(`

    <div class="topic-height border-bottom container row">

              <div class="col-9">
                <div class="grayed-text">${postSummary.topic}</div>
                <div class="grayed-text flexRow">


                      <div class="bold white"> ${postSummary.userName}</div>
                      <div>
                      <img src="check.jpeg" width="20px" height="20px" class="rounded-circle"/>
                      </div>


                   <div>- ${postSummary.time}</div>
                </div>
                <div class="ps-4 bold white">${postSummary.title}</div>

              </div>

              <div class="pt-1 pe-1 col-3">
                <img src=${postSummary.image} height="90em" width="140em" class="image-radius"/>
              </div>

            </div>
    `);
}
export default PostSummaryItem;
