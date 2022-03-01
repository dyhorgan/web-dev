const PostItem = (post) => {
    return(`
        <div class="container border-bottom">
           <div class="row">

              <div class="col-3 bold white">
                  ${post.author}
                  <img src="check.jpeg" height="15em" class="rounded-circle" />
              </div>
              <div class="col-2">
                  ${post.handle}
              </div>
              <div class="col-2">
                  ${post.time}
              </div>


           </div>


           <div class="row">

           <div class="col-6 white">
           ${post.text}
           </div>

           </div>

           <div class="row">

           <div class="col-12 image-radius">
           <img src=${post.image} width="100%" height="250em" class="image-radius" />
           </div>

           </div>

           <div class="row">
              <div class="col-3">
                  <i class="fa-solid fa-comment"></i>
                  ${post.comments}
              </div>
              <div class="col-3">
                  <i class="fa-solid fa-retweet"></i>
                  ${post.retweets}

              </div>
              <div class="col-3">
              <i class="fa-regular fa-heart"></i>
                  ${post.likes}
              </div>
              <div class="col-3">
                <i class="fas fa-download"></i>
              </div>
           </div>

        </div>
    `);
}
export default PostItem;
