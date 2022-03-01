import PostItem from "./PostItem.js";
import fullPost from "./fullPost.js";

const PostList = () => {
    return(`
           ${
              fullPost.map(fullPost => {
             return(PostItem(fullPost));
            }).join('')
           }
    `);
}
export default PostList;
