import {BrouserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "scenes/homePage";
import LoginPage from "scenes/loginPage";
import ProfilePage from "scenes/profilePage";

function App() {
  return <div className="app">
    <BrouserRouter>
      <Routes>
        <Route path="/" element = {<LoginPage />} />
        <Route path="/home" element = {<HomePage />} />
        <Route path="/profile/:userId" element = {<ProfilePage />} />
      </Routes>
    </BrouserRouter>
  </div>
}

export default App;
