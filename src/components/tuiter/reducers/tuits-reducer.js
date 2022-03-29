import tuits from "../data/tuits.json";

//{ "author": "New York Post", "handle": "@nypost", "time": "23h", "text": "Grimes seen reading Karl Marx after split from Elon Musk", "image": "https://images.indianexpress.com/2021/10/grimmes-marx.jpg", "comments": "965", "retweets": "2.4", "likes": "4k", "stats": {"likes": 37}}
const tuitsReducer = (state = tuits, action) => {


    switch (action.type) {
      case 'like-tuit':

        return state.map(tuit => {
          if(tuit._id === action.tuit._id) {

            if(tuit.liked === true) {
                  tuit.liked = false;
                  tuit.stats.likes--;
                } else {
                  tuit.liked = true;
                  tuit.stats.likes++;
                }
                return tuit;
              } else {
                return tuit;
              }
            });

      case 'delete-tuit':
        console.log(action);
        return state.filter(tuit => tuit._id !== action.tuit._id);
      case 'create-tuit':
        console.log("logging action");
        console.log(action);
        //{ "author": "New York Post", "handle": "@nypost", "time": "23h", "text": "Grimes seen reading Karl Marx after split from Elon Musk", "image": "https://images.indianexpress.com/2021/10/grimmes-marx.jpg", "comments": "965", "retweets": "2.4", "likes": "4k", "stats": {"likes": 37}}
        const newTuit = { author: "New Author", handle: "@newhandle", time: "23h", text: action.tuit, image: "https://www.nomadfoods.com/wp-content/uploads/2018/08/placeholder-1-e1533569576673-960x960.png", comments: 0, retweets: 0, likes: 0, stats: {likes: 0}}
        return [
          newTuit,
          ...state,
        ];
      default:
        return tuits
    }
}

export default tuitsReducer;
