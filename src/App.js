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
import Appointments from "./pages/landlord/Appointments";
import AllListings from "./pages/landlord/AllListings";
import CreateListing from "./pages/landlord/CreateListing";
import Editlisting from "./pages/landlord/Editlisting";
import AllTenants from "./pages/landlord/AllTenants";
import Tenant from "./pages/Tenant";
import Rentals from "./pages/tenant/Rentals";
import FavoriteListings from "./pages/tenant/FavoriteListings";
import TenantProfile from "./pages/tenant/TenantProfile";
import TenantChat from "./pages/tenant/Chat";
import TenantSettings from "./pages/tenant/Settings";
import TenantsAppointments from "./pages/tenant/Appointments";


function App() {
  const [user, setUser] = useState(false);
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userAvater, setUserAvater] = useState("");
  const [updatedAvater, setUpdatedAvater] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const [updatedAddress, setUpdatedAddress] = useState("");
  const [userAbout, setUserAbout] = useState("");
  const [updatedAbout, setUpdatedAbout] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const [updatedPhone, setUpdatedPhone] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userLastName, setUSerLastName] = useState("")
  const [token, setToken] = useState("");
  const [emailVerifiedAt, setEmailVerifiedAt] = useState("");
  const [accountType, setAccountType] = useState(0);
  const [showNav, setShowNav] = useState(true);
  const [openSidebar, setOpenSideBar] = useState(true);
  const [openTenantDrawer, setOpenTenantDrawer] = useState(false);
  const [openLandlordDrawer, setOpenLandlordDrawer] = useState(false);
  const [allAppCol, setAllAppCol] = useState(false);
  const [pendingAppCol, setPendingAppCol] = useState(false);
  const [completedAppCol, setCompletedAppCol] = useState(false);
  const [allCol, setAllCol] = useState(false);
  const [publishedCol, setPublishedCol] = useState(false);
  const [hiddendCol, setHiddenCol] = useState(false);
  const [draftCol, setDraftCol] = useState(false);
  const [allColor, setAllColor] = useState(false);
  const [currentcolor, setCurrentColor] = useState(false);
  const [pastcolor, setPastColor] = useState(false);
  const [upcomingcolor, setUpcomingColor] = useState(false);
  const [searchParam, setsearchParam] = useState("");
  const [title, setTitle] = useState("")
  const [movedListing, setMovedListing] = useState(false);
  const [movedTenants, setMovedTenants] = useState(false);
  const [alert, setAlert] = useState(false);
  const [refresh, setRefesh] = useState(0);
  const userInfo = JSON.parse(localStorage.getItem("user-info"));
  const userToken = localStorage.getItem("user-token");
  const id = localStorage.getItem("lemvan");
  const navigate = useNavigate();
  


  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      setUser(true);
      setUserId(id);
      setUserName(userInfo.firstname);
      setUSerLastName(userInfo.lastname);
      setUserEmail(userInfo.email);
      setUserAvater(userInfo.avatar);
      setToken(userToken);
      setAccountType(userInfo.account_type);
      setUserPhone(userInfo.phone);
      setUserAddress(userInfo.address)
      setUserAbout(userInfo.about)
      setEmailVerifiedAt(userInfo.email_verified_at)
  
    } else {
      setUser(false);
      navigate("/welcome");
    }
  }, []);

  return (
    <>
      <UserContext.Provider
        value={{
          user,
          userId,
          setUser,
          userName,
          setUserName,
          userLastName,
          userPhone,
          setUserPhone,
          userEmail,
          userAvater,
          setUserAvater,
          token,
          setToken,
          accountType,
          userAddress,
          setUserAddress,
          userAbout,
          setUserAbout,
          emailVerifiedAt,
          setEmailVerifiedAt,
          showNav,
          setShowNav,
          openSidebar,
          setOpenSideBar,
          openTenantDrawer,
          setOpenTenantDrawer,
          openLandlordDrawer,
          setOpenLandlordDrawer,
          searchParam,
          setsearchParam,
          title,
          setTitle,
          allCol,
          setAllCol,
          publishedCol,
          setPublishedCol,
          hiddendCol,
          setHiddenCol,
          draftCol,
          setDraftCol,
          allColor,
          setAllColor,
          allAppCol,
          setAllAppCol,
          pendingAppCol,
          setPendingAppCol,
          completedAppCol,
          setCompletedAppCol,
          currentcolor,
          setCurrentColor,
          pastcolor,
          setPastColor,
          upcomingcolor,
          setUpcomingColor,
          movedListing,
          setMovedListing,
          movedTenants,
          setMovedTenants,
          alert,
          setAlert,
          updatedAvater,
          setUpdatedAvater,
          updatedAbout,
          setUpdatedAbout,
          updatedPhone,
          setUpdatedPhone,
          updatedAddress,
          setUpdatedAddress,
          refresh,
          setRefesh
        }}
      >
        {showNav ? <TopBar /> : null}
        <Routes>
          <Route path="/welcome" element={<LandingPage />} />
          <Route path="/" element={<Listing />} />
          <Route path="/listing/:id" element={<Details />} />

          {/* landlord */}
          <Route path="/app/landlord" element={<Landlord />}>
            <Route path="" element={<Home />} />
            <Route path="listings" element={<Listings />}>
              <Route path="" element={<AllListings />} />

              <Route path="create" element={<CreateListing />} />
              <Route path="edit/:id" element={<Editlisting />} />
            </Route>


            {/* <Route path="saved" element={<SavedListings />} /> */}
            <Route path="appointments" element={<Appointments />} />

            <Route path="tenants" element={<Tenants />}>
              <Route path="" element={<AllTenants />} />
            </Route>

            <Route path="profile" element={<Profile />} />
            <Route path="chat" element={<Chat />} />
            <Route path="settings" element={<Settings />} />

          </Route>

          {/* tenants */}
          <Route path="/app/tenant" element={<Tenant />}>
            <Route path="" element={<Rentals />} />
            <Route path="favorites" element={<FavoriteListings />} />
            <Route path="chat" element={<TenantChat />} />
            <Route path="appointments" element={<TenantsAppointments />} />
            <Route path="profile" element={<TenantProfile />} />
            <Route path="settings" element={<TenantSettings />} />
          </Route>

          <Route path="/:token/:email" element={<Resetpwd />} />
          <Route path="/verified" element={<Verified />} />
          <Route path="/login" element={<Login />} />
          <Route

            path="/register/accounttype/:account_type"
            element={<Register />}
          />
          <Route path="/sociallogin" element={<SocialAuth />} />
          <Route path="/facebooklogin" element={<FacebookAuth />} />
          <Route path="/users/password/forgot" element={<ForgotPwd />} />
          <Route path="/email/verify/:id/:hash" element={<Verify />} />
          <Route

            path="/register/:successmessage/:email"
            element={<RegSuccess />}
          />

          <Route
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
