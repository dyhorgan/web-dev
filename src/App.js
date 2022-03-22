import "./vendors/all.min.css";
import "./vendors/bootstrap.min.css";
import './App.css';
import HelloWorld from "./components/helloworld";
import Labs from "./components/labs";
import ExploreComponent from "./components/tuiter/ExploreComponent";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomeScreen from "./components/tuiter/home-screen";


function App() {
  return (     <BrowserRouter>
               <div className="container">
               <Routes>
               <Route path="/hello" exact={true} element={<HelloWorld/>} />
               <Route path="/" exact={true} element={<Labs/>} />

               <Route path="/tuiter" exact={true} element={<HomeScreen/>} />
               <Route path="/tuiter/explore" exact={true} element={<ExploreComponent/>} />
               <Route path="/tuiter/home" exact={true} element={<HomeScreen/>} />
               </Routes>
               </div>
               </BrowserRouter>
           );
}

export default App;
