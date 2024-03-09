import { Route, Routes } from "react-router-dom";
import Profile from "../components/contentProfile/Profile";
import LoginForm from "../components/LoginForm";
import "../style/homePage.css";
import SignUpPage from "../components/SignUpPage";
import ShotListPage from "../components/contentShotList/ShotListPage";

export default function ContentRoutes(props) {
  return (
    <Routes>
      <Route
        index
        element={
          <div className="container">            
            <img
              className="homeImage"
              src="/images/image-asset.jpeg"
              alt="floor directing image"
            ></img>
            <div className="topLeft"><LoginForm/></div>
          </div>
        }
      ></Route>
      <Route path="login" element={<LoginForm {...props} />} />
      <Route path="signup" element={<SignUpPage />} />
      <Route path="ShotList" element={<ShotListPage />} />
      <Route path="Profile" element={<Profile />} />
    </Routes>
  );
}
