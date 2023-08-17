import { Routes, Route } from "react-router";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import HomeScreen from "./home-screen";
import BookmarksScreen from "./bookmarks-screen";
import NotificationScreen from "./notifications.js";
import ListScreen from "./list-screen";
import MessagesScreen from "./messages-screen"
import MoreScreen from "./more-screen";
import WhoToFollowListItem from "./who-to-follow-list/who-to-follow-list-item";
import TuitSummaryList from "./tuit-summary-list";
import ExploreScreen from "./explore-screen";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuit-reducer";
import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./reducers/auth-reducer";
import ProfileScreen from "./user/profile-screen";
import LoginScreen from "./user/login-screen";
import RegisterScreen from "./user/register-screen";



import {Provider} from "react-redux";
const store = configureStore({
  reducer: {
   who: whoReducer,
   tuits: tuitsReducer,
   user:  authReducer
  }});

function Tuiter() {
    return(
      <Provider store={store}>
    <div>
      <Nav/>
      <div className="container text-center"></div>
      <div className="row">
        <div className="col-2">
        <NavigationSidebar />
        </div> 
        <div className="col-8"> 
        <Routes>
          <Route path="/home" element={<HomeScreen/>} /> 
          <Route path="/explore" element={<ExploreScreen/>} />
          <Route path="/bookmarks" element={<h1>Bookmarks</h1>} /> 
          <Route path="/profile" element={<h1>Profile</h1>} /> 
          <Route path="/notifications" element={<h1>Notification</h1>} /> 
          <Route path="/messages-screen" element={<h1>Messages</h1>} /> 
          <Route path="/list-screen" element={<h1>List</h1>} /> 
          <Route path="/more-screen" element={<h1>More</h1>} /> 
          <Route path="/login"    element={<LoginScreen    />} />
          <Route path="/register" element={<RegisterScreen />} />
          <Route path="/profile"  element={<ProfileScreen  />} />
        </Routes>
        </div>
            <div className="col-2">
              <h3>Who To Follow</h3>
              <WhoToFollowListItem />
              <WhoToFollowListItem who={{
                userName: "YT",
                handle: "youtube",
                avatarIcon: "python.png>"}} />
                <WhoToFollowListItem who={{
                  userName: "Python",
                  handle: "python",
                  avatarIcon: "python.png", }} />
            </div>
        </div>
        </div>
        </Provider>

    );
 }
 export default Tuiter;

 