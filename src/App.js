import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CssBaseline from "@mui/material/CssBaseline";
import TopBar from "./components/TopBar";
import { Routes, Route, useNavigate } from "react-router-dom";
import Verified from "./pages/Verified";
import LandingPage from "./pages/LandingPage";
import Details from "./pages/Details";
import Landlord from "./pages/Landlord";
import Resetpwd from "./pages/Resetpwd";
import Verify from "./pages/Verify";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPwd from "./pages/ForgotPwd";
import Listing from "./pages/Listing";
import RegSuccess from "./pages/RegSuccess";
import PwdResetSuccess from "./pages/PwdResetSuccess";
import { UserContext } from "./context/UserContext";
import SocialAuth from "./pages/SocialAuth";
import FacebookAuth from "./pages/FacebookAuth";
import Footer from "./components/Footer";
import Listings from "./pages/landlord/Listings";
import Tenants from "./pages/landlord/Tenants";
import Profile from "./pages/landlord/Profile";
import Chat from "./pages/landlord/Chat";
import Settings from "./pages/landlord/Settings";
import Home from "./pages/landlord/Home";



function App() {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvater, setUserAvater] = useState("");
  const [token, setToken] = useState();
  const [showNav, setShowNav] = useState(true);
  const [openSidebar, setOpenSideBar] = useState(true);
  const [searchParam, setsearchParam] = useState("");
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const navigate = useNavigate();


  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setUser(true);
      setUserName(userInfo.firstname);
      setUserAvater(userInfo.avatar);
      setToken(userInfo.access_token);
    } else {
      setUser(false);
      // navigate("/welcome");
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          setUser,
          userName,
          setUserName,
          userAvater,
          setUserAvater,
          token,
          setToken,
          showNav,
          setShowNav,
          openSidebar,
          setOpenSideBar, searchParam, setsearchParam
        }}
      >
        {showNav ? <TopBar /> : null}
        <Routes>
          <Route exact path="/welcome" element={<LandingPage />} />
          <Route exact path="/" element={<Listing />} />
          <Route exact path="/listing/:id" element={<Details />} />
          <Route exact path="/app/landlord" element={<Landlord />}>
            <Route exact path="" element={<Home />} />
            <Route exact path="listings" element={<Listings />} />
            <Route path="tenants" element={<Tenants />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chat" element={<Chat />} />
            <Route path="settings" element={<Settings />} />
          </Route>
          <Route exact path="/:token/:email" element={<Resetpwd />} />
          <Route exact path="/verified" element={<Verified />} />
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="/register/accounttype/:account_type"
            element={<Register />}
          />
          <Route exact path="/sociallogin" element={<SocialAuth />} />
          <Route exact path="/facebooklogin" element={<FacebookAuth />} />
          <Route exact path="/users/password/forgot" element={<ForgotPwd />} />
          <Route exact path="/email/verify/:id/:hash" element={<Verify />} />
          <Route
            exact
            path="/register/:successmessage/:email"
            element={<RegSuccess />}
          />

          <Route
            exact
            path="/resetpassword/:successmessage"
            element={<PwdResetSuccess />}
          />
        </Routes>


        {showNav ? <Footer /> : null}
      </UserContext.Provider>

      <CssBaseline />

    </>
  );
}

export default App;
