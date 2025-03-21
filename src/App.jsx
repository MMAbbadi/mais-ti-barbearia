import React from "react";
import { Routes, Route} from 'react-router-dom';

// Pages
import Home from "./pages/Home";
import ProfilePage from "./pages/ProfilePage";
import Register from "./pages/Register";
import Login from "./pages/Login";

// Components
import SideBar from "./components/SideBar";
import Footer from "./components/Footer";

// Styles
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <aside>
        <SideBar />
      </aside>
      <main>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/profilepage" element={<ProfilePage />}/>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login/>}/>
        </Routes>   
      </main>
      <Footer/>
    </div>
  );
};

export default App;
