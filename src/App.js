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

function App() {
  const [user, setUser] = useState(false);
  const [userName, setUserName] = useState("");
  const [userAvater, setUserAvater] = useState("");
  const [showNav, setShowNav] = useState(true);
  const userInfo = JSON.parse(localStorage.getItem("user-info"));

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setUser(true);
      setUserName(userInfo.firstname);
      setUserAvater(userInfo.avatar);
    } else {
      setUser(false);
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
          showNav,
          setShowNav,
        }}
      >
        {showNav ? <TopBar /> : null}
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/listing" element={<Listing />} />
          <Route exact path="/listing/:id" element={<Details />} />
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
