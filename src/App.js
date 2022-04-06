import "./vendors/all.min.css";
import "./vendors/bootstrap.min.css";
import './App.css';
import HelloWorld from "./components/helloworld";
import Labs from "./components/labs";
import ExploreElement from "./components/tuiter/ExploreComponent/exploreElement";
import {BrowserRouter, Route, Routes} from "react-router-dom"
//import PostList from "./components/tuiter/home-screen/PostList";
import HomeScreen from "./components/tuiter/home-screen";
//import TuitList from "./components/tuiter/tuit-list"
import Tuiter from "./components/tuiter/index.js"
import ProfileScreen from "./components/tuiter/ProfileScreen"
import EditProfile from "./components/tuiter/EditProfile"


function App() {
  return (     <BrowserRouter>
               <div className="container">
               <Routes>
               <Route path="/" >
                <Route path="/" exact={true} element={<Labs/>} />
                <Route path="labs" element={<Labs/>} />
                <Route path="hello" element={<HelloWorld/>} />

                <Route path="tuiter" element={<Tuiter/>} >
                  <Route index element={<HomeScreen/>} />
                  <Route path="explore" exact={true} element={<ExploreElement/>} />
                  <Route path="home" exact={true} element={<HomeScreen />} />
                  <Route path="profile" exact={true} element={<ProfileScreen />} />
                  <Route path="editProfile" exact={true} element={<EditProfile />} />
                </Route>
               </Route>
               </Routes>
               </div>
               </BrowserRouter>
           );
}

export default App;
