
import NavBar from "./components/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./components/Body";
import Login from "./components/Login";
import Profile from "./components/Profile";
import Feed from "./components/Feed";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Connections from "./components/Connections";
import Requests from "./components/Requests";
import Premium from "./components/Premium";
import Chat from "./components/Chat";


function App() {

  return (
    <>
      <Provider store={appStore}>
        <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            { // children routes 
              // children component can not be directly render here 
              // children needs to render in parent component using <outlet/>
            }
            <Route path="/" element={<Feed/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element= {<Profile/>}/>
            <Route path="/connections" element= {<Connections/>}/>
            <Route path="/requests" element={<Requests/>}/>
            <Route path="/premium" element={<Premium/>}/>
            <Route path="/chat/:targetUserId" element={<Chat/>}/>
          </Route>
          
        </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App;
