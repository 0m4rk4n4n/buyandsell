import { BrowserRouter, Routes, Route } from "react-router-dom";
import ForgotPassword from "./pages/ForgotPassword"
import axios from "axios";
import { useState,useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RealEstate from "./pages/RealEstate";
import Jobs from "./pages/Jobs";
import Services from "./pages/Services";
import Pets from "./pages/Pets";
import Ad from "./pages/Ad";
import SearchPage from "./pages/SearchPage";
import User from "./pages/User";
import UserMainPage from "./pages/UserMainPage";
import AutosBaesOnCondition from "./pages/AutosBaesOnCondition";
import { useDispatch, useSelector } from "react-redux";
import { changeArr } from "./redux/current";
import Locations from "./components/Locations"
import Error from "./pages/Error";
import RealEstateAd from "./pages/RealEstateAd"
import Post from "./pages/Post";
import JobAd from "./pages/JobAd";
import ServiceAd from "./pages/ServiceAd";
import PetAd from "./pages/PetAd";
import Message from "./pages/Message";
import { changeAutoAds } from "./redux/ads";
import SessionExpired from "./pages/SessionExpired";
import AboutPage from "./pages/About";
function App() {
  const [val,setVal]=useState(false)
  const { currentUser }=useSelector(state=>state.user)
  const { query } = useSelector(state=>state.search)
  const dispatch=useDispatch()
  return (
    <div className="App">
      {val ? <Locations val={val} setVal={setVal}/>
    :   <BrowserRouter>
    <Routes>
    <Route path="/">
    <Route index element={<Home val={val} setVal={setVal}/>}/>
    <Route path="user-main-page" element={<UserMainPage/>}/>
    <Route path="session-expired" element={<SessionExpired/>}/>
    <Route path="login" element={currentUser ? <Home val={val} setVal={setVal}/> : <Login/>}/>
    <Route path="register" element={!currentUser ? <Register/> : <Home val={val} setVal={setVal}/> }/>
    <Route path="forgot-password" element={<ForgotPassword/>}/>
    <Route path="real-estate">
    <Route path=":id" element={<RealEstate/>}/>
    </Route>
    <Route path="services" element={<Services/>}/>
    <Route path="about" element={<AboutPage/>}/>
    <Route path="pets" element={<Pets/>}/>
    <Route path="postad" element={<Post/>}/>
    <Route path="ad">
    <Route path=":id" element={<Ad />}/>
    </Route>
    <Route path="realestatead">
    <Route path=":id" element={<RealEstateAd/>}/>
    </Route>
    <Route path="jobad">
    <Route path=":id" element={<JobAd/>}/>
    </Route>
    <Route path="jobs">
    <Route path=":id" element={<Jobs/>}/>
    </Route>
    <Route path="servicead">
    <Route path=":id" element={<ServiceAd/>}/>
    </Route>
    <Route path="petsad">
    <Route path=":id" element={<PetAd/>}/>
    </Route>
    <Route path="autosbasedoncondition">
    <Route path=":id" element={<AutosBaesOnCondition val={val} setVal={setVal}/>}/>
    </Route>
    <Route path="user">
    <Route path=":id" element={<User/>}/>
    </Route>
    <Route path="search">
    <Route path=":id" element={<SearchPage/>}/>
    </Route>
    <Route path="user">
    <Route path=":id" element={<User/>}/>
    </Route>
    <Route path="message">
    <Route path=":id" element={currentUser ? <Message/> : <Home/>}/>
    </Route>
    </Route>
    <Route path="*" element={<Error/>} />
    </Routes>
</BrowserRouter>
    }
    </div>
  );
}

export default App;
