
import NavBar from "./NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./Body";
import Login from "./Login";
import Profile from "./Profile";


function App() {

  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
          { // children routes 
            // children component can not be directly render here 
            // children needs to render in parent component using <outlet/>
          }
            <Route path="/login" element={<Login/>}/>
            <Route path="/profile" element= {<Profile/>}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
      {/* <NavBar/> */}
      {/* <h1 className="text-3xl font-bold text-yellow-600">Hello world! chal gya tailwind</h1>
      <p className="text-red-400">in red color</p> */}
    </>
  )
}

export default App;
